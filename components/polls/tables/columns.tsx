import { formatVotes } from '@/lib/utils/string';
import { ColumnDef, Row } from '@tanstack/react-table';
import { CSVData } from '../types';
import { partyColorMapping } from './utils/colorMapping';

export const getTableColumns = (csvData: CSVData): ColumnDef<Record<string, string>>[] => {
  const columns: ColumnDef<Record<string, string>>[] = csvData.headers.map((header) => ({
    accessorKey: header,
    header,
    cell: ({ row }) =>
      header === 'Party Name' ? <PartyNameCell row={row} /> : <DefaultCell row={row} header={header} />,
  }));
  return columns;
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
  const value = row.getValue(header) as string;
  const isNumber = value.length > 0 && !isNaN(Number(value));
  const isPositive = (value as string).startsWith('+');
  const displayValue = isNumber ? (isPositive ? '+' : '') + formatVotes(Number(value)) : (value as string);

  // Check if the value contains literal \n and split into lines
  const hasNewline = displayValue.includes('\\n');
  if (hasNewline) {
    const lines = displayValue.split('\\n');
    return (
      <div className="capitalize text-center">
        {lines.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
    );
  }

  return <div className="capitalize text-center">{displayValue}</div>;
};
