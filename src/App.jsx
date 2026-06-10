import Header from "./components/Header";
import Hero from "./components/Hero";
import MovieGrid from "./components/MovieGrid";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MovieGrid />
      </main>
    </>
  );
};

export default App;
