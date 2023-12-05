import { UsersApi } from "@/lib/api";
import SearchScreen from "@/lib/components/SearchScreen";
import NavigationBar from "@/lib/components/shared/NavgiationBar";
import { AppLinks, prefix } from "@/lib/constants";
import { UserAllResponse } from "@/lib/models/api/users/all.model";
import { useMediaQuery, useTheme } from "@mui/material";
import {
  InfiniteData,
  QueryKey,
  useInfiniteQuery,
} from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo } from "react";

const Search = () => {
  const usersApi = new UsersApi();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const keyword = useSearchParams().get("keyword") ?? "";

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    refetch,
  } = useInfiniteQuery<
    unknown,
    Error,
    InfiniteData<UserAllResponse, unknown>,
    QueryKey,
    unknown
  >({
    enabled: false,
    queryKey: ["data"],
    queryFn: async ({ pageParam = 1 }) => {
      const res = await usersApi.getUsersAll({ page: pageParam, keyword });
      return res;
    },
    getNextPageParam: (lastPage: UserAllResponse) => {
      if (lastPage.page >= lastPage.totalPages) return null;
      return lastPage.page + 1;
    },
  } as any);

  useEffect(() => {
    refetch();
  }, []);

  const allItems = useMemo(() => {
    return data?.pages.flatMap((page) => page.data);
  }, [data]);

  return (
    <>
      <NavigationBar
        title="Results"
        navigate={{ url: AppLinks.home, name: "Home Page" }}
      />

      <section className={`${prefix}container`}>
        <SearchScreen
          type={isMobile ? "infinite" : "loadMore"}
          data={allItems}
          status={status}
          error={error}
          isFetchingNextPage={isFetchingNextPage}
          hasNextPage={hasNextPage}
          fetchNextPage={fetchNextPage}
        />
      </section>
    </>
  );
};

export default Search;
