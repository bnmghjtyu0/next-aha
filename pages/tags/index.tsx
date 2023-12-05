import { TagsApi } from "@/lib/api/tags";
import Style2Card from "@/lib/components/cards/Style2Card";
import NavigationBar from "@/lib/components/shared/NavgiationBar";
import { AppLinks, prefix } from "@/lib/constants";
import { Tag } from "@/lib/models/api/users/tag.model";
import { useMediaQuery, useTheme } from "@mui/material";
import {
  InfiniteData,
  QueryKey,
  useInfiniteQuery,
} from "@tanstack/react-query";
import { useEffect, useMemo } from "react";

const Tags = () => {
  const tagsApi = new TagsApi();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const { data, error, status, refetch } = useInfiniteQuery<
    unknown,
    Error,
    InfiniteData<Tag[], unknown>,
    QueryKey,
    unknown
  >({
    enable: false,
    queryKey: ["data"],
    queryFn: tagsApi.getTags,
    getNextPageParam: (lastPage: Tag[]) => {
      return null;
    },
  } as any);

  useEffect(() => {
    refetch();
  }, []);

  const allItems = useMemo(() => {
    return data?.pages.flat();
  }, [data]);

  return (
    <>
      {isMobile ? (
        <NavigationBar
          title="Tags"
          navigate={{ url: AppLinks.home, name: "Home Page" }}
        />
      ) : (
        <section className={`${prefix}container`}>
          <h2 className="headline-1 font-weight-light mt-80 mb-24">Tags</h2>
        </section>
      )}
      <section className={`${prefix}container`}>
        {status === "pending" ? (
          <p>Loading...</p>
        ) : status === "error" ? (
          <p>Error: {error?.message}</p>
        ) : (
          <>
            <div className="row flex-wrap">
              {allItems &&
                allItems.length > 0 &&
                allItems.map((tag, tagIndex) => {
                  return (
                    <div key={tagIndex} className="col-6 col-sm-5">
                      <Style2Card
                        title={tag.name}
                        content={`${tag.count} Questions`}
                      ></Style2Card>
                    </div>
                  );
                })}
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default Tags;
