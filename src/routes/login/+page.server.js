import { BASE_URL_API, JWT_SECRET } from "$env/static/private";
import { fail, redirect } from "@sveltejs/kit";
import axios from "axios";
import jwt from "jsonwebtoken";

export const actions = {
  login: async ({ cookies, request, params }) => {
    const data = await request.formData();
    const email = data.get("email");
    const password = data.get("password");
    try {
      if (!email || !password) {
        throw new Error("Invalid Credentials");
      }
      const response = await axios.get(`${BASE_URL_API}/blogs/api/v1/user`);
      console.log("HERE");
      const selectedUser = response.data.find((user) => user.email == email);
      if (!selectedUser) {
        throw new Error("Not found");
      }

      if (selectedUser.password == password) {
        const token = jwt.sign(
          { id: selectedUser, email: selectedUser.email },
          JWT_SECRET
        );
        console.log("Successful", token);
        cookies.set("token", token, {
          path: "/",
          maxAge: 60 * 60 * 1,
        });
      }
    } catch (error) {
      return fail(422, {
        error: error.message,
      });
    }
    redirect(302, "/");
  },
};
