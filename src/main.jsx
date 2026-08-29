import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import App from "./App.jsx";
import Home from "./components/Home.jsx";
import Details from "./components/Details.jsx";
import NotFoundPage from "./components/NotFoundPage.jsx";
import Movies from "./components/Movies.jsx";
import TVShows from "./components/TVShows.jsx";
import Favorites from "./components/Favorites.jsx";
import TrendingMovies from "./components/TrendingMovies.jsx";
import SearchResults from "./components/SearchResults.jsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <NotFoundPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "movie/:id",
          element: <Details />,
        },
        {
          path: "tv-show/:id",
          element: <Details />,
        },
        {
          path: "movies",
          element: <Movies />,
        },
        {
          path: "tv-shows",
          element: <TVShows />,
        },
        {
          path: "favorites",
          element: <Favorites />,
        },
        {
          path: "trending",
          element: <TrendingMovies />,
        },
        {
          path: "search",
          element: <SearchResults />,
        },
        {
          path: "*",
          element: <NotFoundPage />,
        },
      ],
    },
  ],
  {
    basename: "/cinewave-website",
  },
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
