import { useSearchParams } from "react-router-dom";
import MediaCard from "./MediaCard";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  const mediaList = [
    {
      id: 1,
      title: "Avatar",
      year: "2009",
      rating: 7.8,
      type: "movie",
      poster: "https://image.tmdb.org/t/p/w500/6EiRUJpuoeQPghrs3YNktfnqOVh.jpg",
    },
    {
      id: 2,
      title: "The last of us",
      year: "2023",
      rating: 9.2,
      type: "tv",
      poster:
        "https://image.tmdb.org/t/p/w500/8zqF57u9123456789012345678901234.jpg",
    },
  ];

  const filteredMediaList = mediaList.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-10 text-white">
      <section className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-3xl font-bold text-cyan-400">
          Search results for: {query}
        </h2>
        {filteredMediaList.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredMediaList.map((item) => (
              <MediaCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <p className="text-slate-400">
            Nothing found 😕 Try another movie or TV show name.
          </p>
        )}
      </section>
    </main>
  );
};

export default SearchResults;
