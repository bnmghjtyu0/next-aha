import { Tag } from "../models/api/users/tag.model";

/** tag api class */
class TagsApi {
  getTags = async (): Promise<Tag[]> => {
    const res = await fetch(`https://avl-frontend-exam.herokuapp.com/api/tags`);
    return res.json() as Promise<Tag[]>;
  };
}

export { TagsApi };
