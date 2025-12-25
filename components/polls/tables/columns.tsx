import { formatVotes } from '@/lib/utils/string';
import { ColumnDef, Row } from '@tanstack/react-table';
import { CSVData } from '../types';
import { partyColorMapping } from './utils/colorMapping';

export const getTableData = (
  csvData: CSVData
): { data: Record<string, string>[]; columns: ColumnDef<Record<string, string>>[] } => {
  const columns: ColumnDef<Record<string, string>>[] = csvData.headers.map((header) => ({
    accessorKey: header,
    header,
    cell: ({ row }) =>
      header === 'Party Name' ? <PartyNameCell row={row} /> : <DefaultCell row={row} header={header} />,
  }));
  return { data: csvData.data, columns };
};

const PartyNameCell = ({ row }: { row: Row<Record<string, string>> }) => {
  const partyName = row.getValue('Party Name') as string;
  return (
    <div className="capitalize text-center">
      <span
        className="px-4 py-1 rounded-sm text-white font-semibold"
        style={{ background: partyColorMapping[partyName] ?? partyColorMapping['Others'] }}
      >
        {partyName}
      </span>
    </div>
  );
};

const DefaultCell = ({ row, header }: { row: Row<Record<string, string>>; header: string }) => {
  const value = row.getValue(header);
  const isNumber = !isNaN(Number(value));
  const displayValue = isNumber ? formatVotes(Number(value)) : (value as string);
  return <div className="capitalize text-center">{displayValue}</div>;
};
