"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

type Props = {};

const SearchBox = (props: Props) => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const searchQuery = e.currentTarget.value;
    setQuery(searchQuery);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query) {
      return;
    }
    router.push(`/search?term=${query}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-6xl mx-auto flex justify-between items-center p-5">
      <input
        value={query}
        onChange={handleChange}
        placeholder="Search Keywords..."
        type="text"
        className="flex-1 w-full h-10 md:h-14 pl-13 caret-orange-400 placeholder-gray-500 text-gray-500 outline-none bg-transparent dark:text-orange-400 rounded-sm"
      />
      <button
        type="submit"
        disabled={!query}
        className="text-orange-400 disabled:text-gray-400">
        Search
      </button>
    </form>
  );
};

export default SearchBox;
