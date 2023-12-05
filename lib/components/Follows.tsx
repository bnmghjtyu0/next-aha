import { useContext, useEffect, useState } from "react";
import { UsersApi } from "../api";
import { BaseLayoutContext } from "../contexts/BaseLayoutContext";
import { Friend } from "../models/api/users/all.model";
import Style1ListItem from "./listItems/Style1ListItem";
import AppTabs from "./shared/AppTabs";

interface ListProps {
  data: Friend[];
}
const List = ({ data }: ListProps) => {
  return (
    <ul className="list-group p-0">
      {data?.length > 0 &&
        data.map((d) => {
          return (
            <li key={d.id} className="list-group-item bg-transparent p-0 mb-18">
              <Style1ListItem status={d.isFollowing ? "following" : "follow"} />
            </li>
          );
        })}
    </ul>
  );
};

const Follows = () => {
  const [baseLayoutData] = useContext(BaseLayoutContext);
  const [state, setState] = useState<{
    followers: Friend[];
    following: Friend[];
  }>({
    followers: [],
    following: [],
  });

  const loadApi = async () => {
    const usersApi = new UsersApi();
    const friendsRes = await usersApi.getUsersFriends();

    setState(() => ({
      ...state,
      followers: baseLayoutData?.userAllData?.data ?? [],
      following: friendsRes.data,
    }));
  };

  useEffect(() => {
    loadApi();
  }, [baseLayoutData]);

  return (
    <AppTabs
      data={[
        {
          title: "Followers",
          content: () => <List data={state.followers} />,
        },
        {
          title: "Following",
          content: () => <List data={state.following} />,
        },
      ]}
    />
  );
};

export default Follows;
