import Image from "next/image";

const SearchItems = () => {
  return (
    <>
      <Image src="/search.png" alt="search image" width={14} height={14} />
      <input
        type="text"
        placeholder="Search.."
        name="search"
        className="w-[200px] p-2 bg-transparent outline-none"
      />
    </>
  );
};

export default SearchItems;
