import { PUBLIC_BASE_URL_API } from "$env/static/public";
import axios from "axios";
export async function load() {
  try {
    const response = await axios.get(
      `${PUBLIC_BASE_URL_API}/blogs/api/v1/blogs`
    );
    if (response.data) {
      console.log(response.data);
      return {
        blog: response.data,
      };
    }
  } catch (error) {
    console.log("Erro");
    return {
      blog: [],
    };
  }
}
