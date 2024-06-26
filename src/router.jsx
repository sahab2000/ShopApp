import Main from "./pages/Main";
import Shop from "./pages/Shop";
import Home from "./cms/pages/Home";
import Users from "./cms/pages/Users";
import NewUser from "./cms/components/NewUser";
import Products from "./cms/pages/Products";
import Transactions from "./cms/pages/Transactions";
import Reports from "./cms/pages/Reports";
import Mail from "./cms/pages/Mail";
import Page404 from "./cms/pages/Page404";
import PrivateRouts from "./cms/pages/PrivateRouts";
import Feedback from "./cms/pages/Feedback";
import Manage from "./cms/pages/Manage";
import NewProduct from "./cms/components/NewProduct";

export const router = [
  { path: "/", element: <Main /> },
  { path: "/home", element: <Main /> },
  { path: "/shop", element: <Shop /> },
  {
    path: "*",
    element: <PrivateRouts />,
    children: [
      { path: "AdminHome", element: <Home /> },
      {
        path: "adminManageUsers",
        children: [
          { path: "", element: <Users /> },
          { path: "addNewUser", element: <NewUser /> },
        ],
      },
      {
        path: "adminManageProducts",
        children: [
          { path: "", element: <Products /> },
          { path: "addNewProduct", element: <NewProduct /> },
        ],
      },
      { path: "transactions", element: <Transactions /> },
      { path: "reports", element: <Reports /> },
      { path: "mail", element: <Mail /> },
      { path: "feedback", element: <Feedback /> },
      { path: "staffAnalytics", element: <Manage /> },
      { path: "*", element: <Page404 /> },
    ],
  },
];
