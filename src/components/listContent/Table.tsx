type tableProps = {
  columnsHeader: {
    header: string;
    className?: string;
  }[];
  renderRow: (item: any) => React.ReactNode;
  data: any[];
};

const Table = ({ columnsHeader, renderRow, data }: tableProps) => {
  return (
    <table className="w-full mt-4">
      <thead>
        <tr className="text-left text-sm text-gray-500">
          {columnsHeader.map((col) => (
            <th key={col.header} className={col.className}>
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{data.map((item) => renderRow(item))}</tbody>
    </table>
  );
};

export default Table;
