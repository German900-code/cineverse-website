import { Outlet } from "react-router-dom";
import { ToastContainer, Slide } from "react-toastify";

import Footer from "./components/Footer";
import Header from "./components/Header";
import MobileNav from "./components/MobileNav";
import FavoritesProvider from "./context/FavoritesProvider";

const App = () => {
  return (
    <>
      <FavoritesProvider>
        <Header />
        <Outlet />
        <MobileNav />
        <Footer />
      </FavoritesProvider>
      <ToastContainer
        transition={Slide}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
      />
    </>
  );
};

export default App;
