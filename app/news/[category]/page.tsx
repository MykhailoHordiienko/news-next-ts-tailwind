import { fetchNews } from "../../../utils/fetchNews";
import NewsList from "../../../components/NewsList/NewsList";
import ErrorPage from "../../../components/ErrorPage/ErrorPage";

type Props = {
  params: { category: Category };
};

const NewsCategoryPage = async ({ params: { category } }: Props) => {
  const news = await fetchNews("categories", category.toLowerCase());
  if (!news) {
    return <ErrorPage />;
  }
  return (
    <>
      <h1 className="headerTitle text-center">{category}</h1>
      <NewsList news={news} />
    </>
  );
};

export default NewsCategoryPage;
