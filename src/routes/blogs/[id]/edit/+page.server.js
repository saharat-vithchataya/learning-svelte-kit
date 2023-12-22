import axios from "axios";
import { BASE_URL_API } from "$env/static/private";
import { fail } from "@sveltejs/kit";

export async function load({ params, locals }) {
  try {
    const response = await axios.get(
      `${BASE_URL_API}/blogs/api/v1/blogs/${params.id}`
    );
    console.log(response.data);
    return {
      id: params.id,
      blog: response.data,
      user: locals.user,
    };
  } catch (error) {
    console.log(error);
    return {
      blog: null,
      id: params.id,
    };
  }
}

export const actions = {
  update: async ({ cookies, request, params }) => {
    const data = await request.formData();
    const blogName = data.get("blog-name");
    const blogID = params.id;
    try {
      if (!blogName) {
        throw new Error("please add blog name");
      }
      const response = await axios.put(
        `${BASE_URL_API}/blogs/api/v1/blogs/${blogID}`,
        {
          name: blogName,
        }
      );
      console.log(response.status);
    } catch (error) {
      console.log(error);
      return fail(422, {
        error: error.message,
      });
    }
  },
};
