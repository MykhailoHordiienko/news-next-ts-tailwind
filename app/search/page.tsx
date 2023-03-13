import { fetchNews } from "../../utils/fetchNews";
import NewsList from "../../components/NewsList/NewsList";

type Props = {
  searchParams: { term: string };
};

const SearchPage = async ({ searchParams }: Props) => {
  const news = await fetchNews("keywords", searchParams.term);
  return (
    <div>
      <NewsList news={news!} />
    </div>
  );
};

export default SearchPage;
