import Header from "./components/Header";
import Hero from "./components/Hero";
import MobileNav from "./components/MobileNav";
import MovieGrid from "./components/MovieGrid";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MovieGrid />
      </main>
      <MobileNav />
    </>
  );
};

export default App;
