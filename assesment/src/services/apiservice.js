import { posts, pages, authors, tags } from "../config/api/apiEndpoints";
import axiosPeerXp from "../config/api/axiosPeerXp";

export const getPostAPI = () => axiosPeerXp(posts);

export const getPageAPI = () => axiosPeerXp(pages);

export const getAuthorsAPI = () => axiosPeerXp(authors);

export const getTagsAPI = () => axiosPeerXp(tags);
