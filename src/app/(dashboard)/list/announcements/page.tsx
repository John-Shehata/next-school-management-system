import Pagination from "@/components/listContent/Pagination";
import Table from "@/components/listContent/Table";
import { announcementsData, role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import ListHeader from "@/components/listContent/ListHeader";
import { announcementColumns } from "@/lib/columns";

const AnnouncementsListPage = () => {
  const renderRow = (item: announcement) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 text-sm even:bg-skyLight  hover:bg-purpleLight"
    >
      <td className="flex items-center p-4 gap-4">
        <h3 className="font-bold">{item.title}</h3>
      </td>
      <td className="hidden sm:table-cell">{item.class}</td>
      <td className="hidden md:table-cell">{item.date}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
            <button className="w-7 h-7 rounded-full flex items-center justify-center bg-mainSky">
              <Image src="/edit.png" alt="view image" width={16} height={16} />
            </button>
          </Link>
          {role === "admin" && (
            <button className="w-7 h-7 rounded-full flex items-center justify-center bg-mainPurple">
              <Image
                src="/delete.png"
                alt="delete image"
                width={16}
                height={16}
              />
            </button>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-lg m-3">
      <ListHeader title="Announcements" />
      <Table
        columnsHeader={announcementColumns}
        renderRow={renderRow}
        data={announcementsData}
      />
      <Pagination />
    </div>
  );
};

export default AnnouncementsListPage;