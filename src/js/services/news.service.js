import axios from "../plugins/axios/index";

export async function getNews() {
  try {
    const response = await axios.post(`/news`);

    console.log(response);
    return response.data;
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
}
