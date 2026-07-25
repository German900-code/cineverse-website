import { Outlet } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import MobileNav from "./components/MobileNav";
import FavoritesProvider from "./context/FavoritesProvider";
import DetailsSkeleton from "./components/skeletons/DetailsSkeleton";

const App = () => {
  return (
    <FavoritesProvider>
      <Header />
      <Outlet />
      <MobileNav />
      {/* <DetailsSkeleton /> */}
      <Footer />
    </FavoritesProvider>
  );
};

export default App;
