import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Rooms } from "./pages/Rooms";
import { Booking } from "./pages/Booking";
import { AddRoom } from "./pages/AddRoom";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { Base } from "./pages/Base";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "rooms", Component: Rooms },
      { path: "booking", Component: Booking },
      { path: "add-room", Component: AddRoom },
      { path: "base", Component: Base },
      { path: "*", Component: NotFound },
    ],
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/signup",
    Component: SignUp,
  },
]);
