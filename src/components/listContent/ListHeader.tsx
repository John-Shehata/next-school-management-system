import React from "react";
import SearchItems from "../SearchItems";
import Image from "next/image";
import { role } from "@/lib/data";

type listHeaderProps = {
  title: string;
};

const ListHeader = ({ title }: listHeaderProps) => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="hidden md:block text-lg font-semibold">{title}</h1>
      <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
        <div className="flex w-full md:w-auto items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-3">
          <SearchItems />
        </div>
        <div className="flex items-center self-end gap-4">
          <button className="w-8 h-8 rounded-full flex items-center justify-center bg-mainYellow">
            <Image
              src="/filter.png"
              alt="filter image"
              width={14}
              height={14}
            />
          </button>
          <button className="w-8 h-8 rounded-full flex items-center justify-center bg-mainYellow">
            <Image src="/sort.png" alt="sort image" width={14} height={14} />
          </button>
          {role === "admin" && (
            <button className="w-8 h-8 rounded-full flex items-center justify-center bg-mainYellow">
              <Image src="/plus.png" alt="plus image" width={14} height={14} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListHeader;
