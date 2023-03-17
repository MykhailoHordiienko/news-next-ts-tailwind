import { fetchNews } from "../../../utils/fetchNews";
import NewsList from "../../../components/NewsList/NewsList";

type Props = {
  params: { category: Category };
};

const NewsCategoryPage = async ({ params: { category } }: Props) => {
  const news = await fetchNews("categories", category.toLowerCase());
  if (!news) {
    return;
  }
  return (
    <>
      <h1 className="headerTitle text-center">{category}</h1>
      <NewsList news={news} />
    </>
  );
};

export default NewsCategoryPage;
