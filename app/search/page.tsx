import { fetchNews } from "../../utils/fetchNews";
import NewsList from "../../components/NewsList/NewsList";

type Props = {
  searchParams: { term: string };
};

const SearchPage = async ({ searchParams }: Props) => {
  const news = await fetchNews("keywords", searchParams.term);
  return (
    <>
      <h1 className="headerTitle">Search Results For: {searchParams.term}</h1>
      <NewsList news={news!} />
    </>
  );
};

export default SearchPage;
