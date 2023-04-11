import Login from "../Screen/Login";
import Layout from "../components/layout/Layout";
import Home from "../Screen/Home";
import UserSelected from "../Screen/UserSelected";
import Favorites from "../Screen/Favorites";
import Contact from "../Screen/Contact";
import Error from "../Screen/Error";

export const routes = [
  {
    id: 1,
    path: "/home",
    Element: Home,
  },
  {
    id: 2,
    path: "/users/:login",
    Element: UserSelected,
  },
  {
    id: 3,
    path: "/favoritos",
    Element: Favorites,
  },
  {
    id: 4,
    path: "/contacto",
    Element: Contact,
  },
  {
    id: 5,
    path: "*",
    Element: Error,
  }
];

export { Login, Layout };
