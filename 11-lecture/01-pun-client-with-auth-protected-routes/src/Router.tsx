import { createBrowserRouter } from "react-router";
import { Layout } from "./pages/Layout";
import { NotFound } from "./pages/NotFound";
import { ManagePuns } from "./pages/ManagePuns";
import { CreatePun } from "./pages/CreatePun";
import { UpdatePun } from "./pages/UpdatePun";
import { Login } from "./pages/Login";
import ProtectedRoutes from "./components/ProtectedRoutes";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoutes><Layout /></ProtectedRoutes>,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <ManagePuns />,
      },
      {
        path: "/create-pun",
        element: <CreatePun />,
      },
      {
        path: "/update-pun/:id",
        element: <UpdatePun />,
      }
    ],
  },
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/login",
        element: <Login />,
      }
    ],
  },
]);