import { AxiosResponse } from "axios";
import React from "react";
import NewsList from "../components/NewsList/NewsList";
import { CATEGORIES } from "../constants";
import { fetchNews } from "../utils/fetchNews";

type Props = {};

const Homepage = async (props: Props) => {
  const news = await fetchNews(
    "categories",
    CATEGORIES.join(",").toLowerCase()
  );

  return (
    <>
      <NewsList news={news!} />
    </>
  );
};

export default Homepage;
