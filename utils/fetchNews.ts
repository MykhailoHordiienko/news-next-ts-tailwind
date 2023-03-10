import axios from "axios";

const { API_KEY, BASE_URL } = process.env;

axios.defaults.baseURL = `${BASE_URL}${API_KEY}`;

export const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  try {
    const data = await axios.get(category);
  } catch (error) {
    console.log(error);
  }
};
