import React from "react";
import ReadMoreButton from "./ReadMoreButton";
import defaultImg from "../../public/defaultImg.jpeg";
import Image from "next/image";
import LiveTimeAgo from "../LiveTimeAgo/LiveTimeAgo";

type Props = {
  article: DataEntry;
};

const ArticleNews = ({ article }: Props) => {
  const { description, image, title, published_at, source } = article;

  const liveTime = new Date(published_at).getTime();

  return (
    <article className="bg-slate-100 dark:bg-slate-800 flex flex-col rounded-lg shadow-lg hover:scale-105 hover:shadow-xl hover:bg-slate-200 transition-all duration-300 ease-out">
      {!image ? (
        <Image
          className="w-full object-cover rounded-t-lg shadow-md h-56"
          alt="image"
          src={defaultImg}
        />
      ) : (
        <img
          src={image}
          alt={title}
          className="w-full object-cover rounded-t-lg shadow-md h-56"
        />
      )}
      <div className="flex flex-1 flex-col">
        <div className="flex flex-1 flex-col p-5">
          <h2 className="font-bold font-serif">{title}</h2>
          <div className="flex-1 mt-2">
            <p className="text-xs line-clamp-6">{description}</p>
          </div>
          <div className="text-xs text-right ml-auto flex space-x-1 pt-5 text-gray-400 italic">
            <p>{source} -</p>
            <p>
              <LiveTimeAgo time={liveTime} />
            </p>
          </div>
        </div>
      </div>
      <div>
        <ReadMoreButton article={article} />
      </div>
    </article>
  );
};

export default ArticleNews;
