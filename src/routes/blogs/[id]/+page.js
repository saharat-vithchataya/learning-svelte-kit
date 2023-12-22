import axios from "axios";
import { PUBLIC_BASE_URL_API } from "$env/static/public";

export async function load({ params }) {
  try {
    const response = await axios.get(
      `${PUBLIC_BASE_URL_API}/blogs/api/v1/blogs/${params.id}`
    );
    if (response.data) {
      return {
        blog: response.data,
      };
    }
  } catch (error) {
    return {
      blog: null,
    };
  }
}

export const ssr = true;
