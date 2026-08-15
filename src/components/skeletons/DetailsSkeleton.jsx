const DetailsSkeleton = () => {
  return (
    <main className="animate-pulse overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 shadow-lg h-full p-14">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 h-10 w-40 rounded bg-slate-800" />
        <section className="grid gap-8 md:grid-cols-[300px_1fr]">
          <div className="aspect-[2/3] h-full  rounded-2xl shadow-lg shadow-cyan-500/20 bg-slate-800" />
          <div>
            <h1 className="text-4xl font-bold bg-slate-800 h-12 w-2/3 rounded" />
            <div className="mt-3 flex flex-wrap gap-3 text-sm text-gray-300">
              <span className="bg-slate-800 h-6 w-16" />
              <span className="bg-slate-800 h-6 w-24" />
              <span className="bg-slate-800 h-6 w-32" />
            </div>
            <div className="mt-5">
              <div className="h-8 w-24 rounded-full bg-slate-800" />
            </div>

            <div className="mt-6 space-y-3">
              <div className="h-4 w-full rounded bg-slate-800" />
              <div className="h-4 w-11/12 rounded bg-slate-800" />
              <div className="h-4 w-10/12 rounded bg-slate-800" />
              <div className="h-4 w-9/12 rounded bg-slate-800" />
              <div className="h-4 w-8/12 rounded bg-slate-800" />
            </div>

            <div className="mt-8 cursor-pointer rounded-xl bg-slate-800 px-6 py-3 font-semibold text-black transition h-12 w-44"></div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default DetailsSkeleton;
