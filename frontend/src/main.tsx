import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Reservations from "./component/main/Reservations.tsx";
import Check from "./component/main/Check.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/reservations",
    element: <Reservations></Reservations>,
  },
  {
    path: "/checkReservations",
    element: <Check></Check>,
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router}></RouterProvider>
);
