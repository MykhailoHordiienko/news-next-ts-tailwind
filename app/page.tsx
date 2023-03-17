import { AxiosResponse } from "axios";
import React from "react";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import NewsList from "../components/NewsList/NewsList";
import { CATEGORIES } from "../constants";
import { fetchNews } from "../utils/fetchNews";

const Homepage = async () => {
  const news = await fetchNews(
    "categories",
    CATEGORIES.join(",").toLowerCase()
  );

  if (!news) {
    return <ErrorPage />;
  }

  return (
    <>
      <NewsList news={news} />
    </>
  );
};

export default Homepage;
