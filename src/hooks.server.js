import { JWT_SECRET } from "$env/static/private";
import { redirect } from "@sveltejs/kit";
import jwt from "jsonwebtoken";

export async function handle({ event, resolve }) {
  console.log("server hook");
  try {
    if (event.url.pathname.includes("edit")) {
      const token = event.cookies.get("token") || "";
      const decodedToken = jwt.verify(token, JWT_SECRET);
      event.locals.user = decodedToken;
    }
    return await resolve(event);
  } catch (error) {
    console.log(error);
  }

  redirect(302, "/login");
}
