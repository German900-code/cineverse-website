import { Outlet } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import MobileNav from "./components/MobileNav";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <MobileNav />
      <Footer />
    </>
  );
};

export default App;
