import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Applayout from "./components/applayout/Applayout";
import MyProfile from "./pages/myprofile/MyProfile";
import PostDetail from "./pages/postdetail/PostDetail";
import SocialLogin from "./pages/login/SocialLogin";
import SocialRegister from "./pages/register/SocialRegister";
import PostListing from "./pages/posts/PostListing";
import EditProfile from "./components/editprofile/EditProfile";
import ChangePassword from "./components/changedpassword/ChangePassword";
import Bookmark from "./components/Bookmark/Bookmark";
import "./App.css";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/myprofile",
        element: <MyProfile />,
        children: [
          {
            path: "/myprofile/edit",
            element: <EditProfile />,
          },
          {
            path: "/myprofile/changepassword",
            element: <ChangePassword />,
          },
          {
            path: "/myprofile/bookmark",
            element: <Bookmark />,
          },
        ],
      },
      {
        path: "/postdetial",
        element: <PostDetail />,
      },
      {
        path: "/login",
        element: <SocialLogin />,
      },
      {
        path: "/postdetial",
        element: <PostDetail />,
      },
      {
        path: "/register",
        element: <SocialRegister />,
      },
      {
        path: "/postlist",
        element: <PostListing />,
      },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={Router} />;
};

export default App;
