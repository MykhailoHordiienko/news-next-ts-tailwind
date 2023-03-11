import axios from "axios";
import { sortNewsByImg } from "./sortNewsByImg";

const { BASE_URL } = process.env;

export const fetchNews = async (): Promise<NewsResponse | undefined> => {
  try {
    const res = await axios.get(`${BASE_URL}`);
    const data = sortNewsByImg(res.data);
    return data;
  } catch (err) {
    console.log(err);
  }
};
