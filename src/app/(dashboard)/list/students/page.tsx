import Pagination from "@/components/listContent/Pagination";
import Table from "@/components/listContent/Table";
import { role, studentsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import ListHeader from "@/components/listContent/ListHeader";
import { studentColumns } from "@/lib/columns";

const StudentsListPage = () => {
  const renderRow = (item: student) => (
    <tr
      key={item.studentId}
      className="border-b border-gray-200 text-sm even:bg-skyLight  hover:bg-purpleLight"
    >
      <td className="flex items-center p-4 gap-4">
        <Image
          src={item.photo}
          alt="Teacher Photo"
          width={40}
          height={40}
          className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <h3 className="font-bold">{item.name}</h3>
          <p className="tex-xs text-gray-500">{item.class}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.studentId}</td>
      <td className="hidden md:table-cell">{item.grade}</td>
      <td className="hidden xl:table-cell">{item.phone}</td>
      <td className="hidden xl:table-cell">{item.address}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.studentId}`}>
            <button className="w-7 h-7 rounded-full flex items-center justify-center bg-mainSky">
              <Image src="/view.png" alt="view image" width={16} height={16} />
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
      <ListHeader title="Students" />
      <Table
        columnsHeader={studentColumns}
        renderRow={renderRow}
        data={studentsData}
      />
      <Pagination />
    </div>
  );
};

export default StudentsListPage;