import Listpage from "./routes/listPage/Listpage";
import Homepage from "./routes/homepage/Homepage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./routes/layout/layout";
import Singlepage from "./routes/singlepage/Singlepage";
import ProfilePage from "./routes/profilepage/profilepage";
import Login from "./routes/loginpage/login";
import Register from "./routes/register/register";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/list",
          element: <Listpage />,
        },
        {
          path: "/:id",
          element: <Singlepage/>,
        },
        {
          path:"/profile",
          element:<ProfilePage/>
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/register",
          element:<Register/>
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
