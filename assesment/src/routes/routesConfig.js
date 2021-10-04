import Dashboard from "../Pages/Dashboard/Dashboard";
import PostPage from "../Pages/PostPage/PostPage";
import LinkPage from "../Pages/LinkPage/LinkPage";

export const ROUTES = [
  {
    path: "/",
    component: Dashboard,
    exact: true,
    // We can use this isPrivate for handle the private routes, if it is set to true for any route then we can put condition when the user is not logged in the he will not be able to access the route url
    isPrivate: false,
    isEager: true,
  },
  {
    path: "/posts-page",
    component: PostPage,
    isPrivate: false,
    isEager: true,
  },
  {
    path: "/links-page",
    component: LinkPage,
    isPrivate: false,
    isEager: true,
  },
];
