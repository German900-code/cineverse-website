import { Outlet } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MobileNav from "./components/MobileNav";
import MovieGrid from "./components/MovieGrid";

const App = () => {
  return (
    <>
      <Header />

      <Outlet />
      {/* <main className="pb-24">
        <Hero />
        <MovieGrid />
      </main> */}
      <MobileNav />
      <Footer />
    </>
  );
};

export default App;
