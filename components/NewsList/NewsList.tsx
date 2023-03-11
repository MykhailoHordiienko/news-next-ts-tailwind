import React from "react";
import ArticleNews from "../ArticleNews/ArticleNews";

type Props = {
  news: NewsResponse;
};

const NewsList = ({ news }: Props) => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
      {news.data.map((article) => (
        <ArticleNews
          key={article.title}
          article={article}
        />
      ))}
    </main>
  );
};

export default NewsList;
