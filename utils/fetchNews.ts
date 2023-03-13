import axios from "axios";
import { sortNewsByImg } from "./sortNewsByImg";

const { BASE_URL = "http://api.mediastack.com/v1/" } = process.env;

export const fetchNews = async (rout?: string, category?: string) => {
  try {
    const res = await axios.get(`${BASE_URL}${rout}=${category}`);
    const data = sortNewsByImg(res.data);
    return data;
  } catch (err) {
    console.log(err);
  }
};
