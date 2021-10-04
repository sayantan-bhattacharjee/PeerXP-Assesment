import { posts, pages } from "../config/api/apiEndpoints";
import axiosPeerXp from '../config/api/axiosPeerXp'

export const getPostAPI = () => axiosPeerXp(posts);

export const getPageAPI = () => axiosPeerXp(pages);
