import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layouts/Mainlayout";
import Home from "../Pages/Home";
import Blogs from "../Pages/Blogs";
import Blog from "../Pages/Blog";
import Bookmarks from "../Pages/Bookmarks";

const router = createBrowserRouter([
    {
      path: '/',
      element: <Mainlayout></Mainlayout>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>,
          loader: () => fetch(`https://dev.to/api/articles?per_page=31&top=7`)
        },
        {
          path: '/blogs/:id',
          element: <Blog></Blog>
        },
        {
          path: '/bookmarks',
          element: <Bookmarks></Bookmarks>,
        }
      ]
    }
  ])

export default router;