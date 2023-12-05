import { UserAllResponse } from "../models/api/users/all.model";
import { UsersFriendsResponse } from "../models/api/users/friends.model";

export interface GetUsersAllBody {
  page?: number;
  keyword?: string;
}
type GetUsersAll = (arg1?: GetUsersAllBody) => Promise<UserAllResponse>;

/** User Api */
class UsersApi {
  /**
   * all users
   * @param {GetUsersAllBody} arg1
   */
  getUsersAll: GetUsersAll = async (arg1): Promise<UserAllResponse> => {
    const res = await fetch(
      `https://avl-frontend-exam.herokuapp.com/api/users/all?page=${
        arg1?.page ?? 1
      }&pageSize=10&keyword=${arg1?.keyword ?? ""}`
    );
    return res.json() as Promise<UserAllResponse>;
  };

  getUsersFriends = async (): Promise<UsersFriendsResponse> => {
    const res = await fetch(
      "https://avl-frontend-exam.herokuapp.com/api/users/friends?page=1&pageSize=10"
    );
    return res.json() as Promise<UsersFriendsResponse>;
  };
}

export { UsersApi };
