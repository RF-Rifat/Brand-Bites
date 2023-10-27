import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./components/Route/Route.jsx";
import Provider from "./components/Authentication/Provider";
import "aos/dist/aos.css";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <HelmetProvider>
        {" "}
        <RouterProvider router={router}></RouterProvider>
      </HelmetProvider>
    </Provider>
  </React.StrictMode>
);
