type Category =
  | "General"
  | "Business"
  | "Entertainment"
  | "Health"
  | "Science"
  | "Sports"
  | "Technology";

type Pagination = {
  count: int;
  limit: int;
  offset: int;
  total: int;
};

type DataEntry = {
  author: string | null;
  category: string;
  country: string;
  description: string;
  image: string | null;
  language: string;
  published_at: string;
  source: string;
  title: string;
  url: string;
};

type NewsResponse = {
  pagination: Pagination;
  data: DataEntry[];
};
