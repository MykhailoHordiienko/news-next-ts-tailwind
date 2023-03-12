"use client";

import { useRouter } from "next/navigation";

type Props = {
  article: DataEntry;
};

const ReadMoreButton = ({ article }: Props) => {
  const router = useRouter();

  const handleClick = () => {
    const queryString = Object.entries(article)
      .map(([key, value]) => {
        return `${key}=${value?.replace("&#8230;", "").replace("&#8211;", "")}`;
      })
      .join("&");
    const url = `/article?${queryString}`;
    router.push(url);
  };

  return (
    <button
      onClick={handleClick}
      className="w-full bg-orange-400 h-10 rounded-b-lg dark:text-gray-900
 hover:bg-orange-500">
      Read More{" "}
    </button>
  );
};

export default ReadMoreButton;
