export interface SearchData {
  pathname: string;
  query: Query;
}

export interface Query {
  page: number;
  keyword: string;
}
