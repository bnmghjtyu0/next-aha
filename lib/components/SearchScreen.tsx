import { Fragment, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Friend } from "../models/api/users/all.model";
import Style1Card from "./cards/Style1Card";
interface Props {
  type: "infinite" | "loadMore";
  status?: "error" | "pending" | "success";
  error?: Error | null;
  data?: Friend[];
  isFetchingNextPage: any;
  hasNextPage: boolean;
  fetchNextPage: any;
}

const SearchScreen = ({
  status,
  error,
  data,
  isFetchingNextPage,
  hasNextPage,
  type,
  fetchNextPage,
}: Props) => {
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      if (type === "infinite") {
        console.log("next");
        fetchNextPage();
      }
    }
  }, [inView]);

  return status === "pending" ? (
    <p>Loading...</p>
  ) : status === "error" ? (
    <p>Error: {error?.message}</p>
  ) : (
    <>
      <div className="row">
        {data &&
          data.length > 0 &&
          data.map((d, i) => (
            <Fragment key={i}>
              <div className="col-12 col-sm-4">
                <Style1Card
                  title={d?.name ?? ""}
                  content={d?.username ?? ""}
                  image={{
                    src: d?.avater ?? null,
                    alt: d?.name ?? "",
                    width: 219,
                    height: 146,
                  }}
                />
              </div>
            </Fragment>
          ))}
      </div>
      <div className="mt-20">
        {type === "loadMore" && (
          <button
            className="btn btn-xxl btn-white fw-bold"
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetchingNextPage}
          >
            {isFetchingNextPage
              ? "Loading more..."
              : hasNextPage
                ? "MORE"
                : "Nothing more to load"}
          </button>
        )}

        {type === "infinite" && (
          <div ref={ref}>
            {isFetchingNextPage
              ? "Loading more..."
              : hasNextPage
                ? "MORE"
                : "Nothing more to load"}
          </div>
        )}
      </div>
    </>
  );
};

export default SearchScreen;
