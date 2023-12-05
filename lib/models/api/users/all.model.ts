export interface UserAllResponse {
  total: number;
  totalPages: number;
  page: number;
  pageSize: number;
  data: Friend[];
}

export interface Friend {
  id: string;
  name: string;
  username: string;
  avater: string;
  isFollowing: boolean;
}
