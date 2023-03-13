import { fetchNews } from "../../../utils/fetchNews";
import NewsList from "../../../components/NewsList/NewsList";

type Props = {
  params: { category: Category };
};

const NewsCategoryPage = async ({ params: { category } }: Props) => {
  const news = await fetchNews("categories", category.toLowerCase());
  return (
    <>
      <NewsList news={news!} />
    </>
  );
};

export default NewsCategoryPage;
