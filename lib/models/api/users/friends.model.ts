import { Friend } from "./all.model";

export interface UsersFriendsResponse {
  total: number;
  totalPages: number;
  page: number;
  pageSize: number;
  data: Friend[];
}
