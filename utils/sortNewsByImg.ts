export const sortNewsByImg = (news: NewsResponse) => {
  const newsWithImg = news.data.filter((item) => item.image !== null);
  const newsWithOutImg = news.data.filter((item) => item.image === null);
  const sortedNews = {
    pagination: news.pagination,
    data: [...newsWithImg, ...newsWithOutImg],
  };
  return sortedNews;
};
