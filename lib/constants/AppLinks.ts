import { Query, SearchData } from "../models/constants/AppLinks";

const AppLinks = {
  home: "/",
  search: ({ page, keyword }: Query): SearchData => {
    return {
      pathname: "/search",
      query: { page, keyword },
    };
  },
  tags: "/tags",
};

export { AppLinks };
