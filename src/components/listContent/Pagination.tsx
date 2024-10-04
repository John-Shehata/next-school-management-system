const Pagination = () => {
  return (
    <div className="p-4 flex items-center justify-center gap-10 mt-4">
      <button
        disabled
        className="py-2 px-4 rounded-lg bg-mainYellow text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Prev
      </button>
      <div className="flex items-center gap-2 text-sm">
        <button className="px-3 py-1 rounded-lg bg-mainSky">1</button>
        <button className="px-2">2</button>
        <button className="px-2">3</button>
        <button className="px-2">4</button>
        <button className="px-2">5</button>
      </div>
      <button className="py-2 px-4 rounded-lg bg-mainYellow text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
        Next
      </button>
    </div>
  );
};

export default Pagination;
