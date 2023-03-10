import React from "react";
import { CATEGORIES } from "../constants";
import { fetchNews } from "../utils/fetchNews";

type Props = {};

const Homepage = async (props: Props) => {
  //   const news: NewsResponse = await fetchNews(CATEGORIES.join(","));
  return <div>Homepage</div>;
};

export default Homepage;
