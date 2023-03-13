import { fetchNews } from "../../utils/fetchNews";
import NewsList from "../../components/NewsList/NewsList";

type Props = {
  searchParams: { term: string };
};

const SearchPage = ({ searchParams }: Props) => {
  console.log(searchParams);
  return <div>{SearchPage.length}</div>;
};

export default SearchPage;
