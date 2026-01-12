import { formatVotes } from '@/lib/utils/string';
import { ColumnDef, Row } from '@tanstack/react-table';
import { partyColorMapping } from '../data';
import { CSVData } from '../types';

export const getTableColumns = (csvData: CSVData): ColumnDef<Record<string, string>>[] => {
  const columns: ColumnDef<Record<string, string>>[] = csvData.headers.map((header) => ({
    accessorKey: header,
    header,
    cell: ({ row }) =>
      ['Party Name', ...(csvData.partyNameColumns || [])].includes(header) ? (
        <PartyNameCell row={row} header={header} />
      ) : (
        <DefaultCell row={row} header={header} />
      ),
  }));
  return columns;
};

const PartyNameCell = ({ row, header }: { row: Row<Record<string, string>>; header: string }) => {
  const partyName = row.getValue(header) as string;
  const partyNameCleaned = partyName.split(' (')[0].trim();
  const allianceName = partyName.includes(' (') ? partyName.split(' (')[1].replace(')', '').trim() : null;
  const colorMapping = partyColorMapping[partyNameCleaned] || partyColorMapping['Others'];
  return (
    <div className="flex flex-col gap-2">
      <div className="capitalize text-center">
        <span
          className="px-4 py-1 rounded-sm text-white text-xs font-semibold"
          style={
            partyNameCleaned.trim() !== '-'
              ? {
                  background: colorMapping.bg,
                  color: colorMapping.fg,
                  borderColor: colorMapping.border,
                  borderWidth: '1.5px',
                }
              : {}
          }
        >
          {partyNameCleaned}
        </span>
      </div>
      {allianceName && <div className="text-xs text-neutral-600 text-center">({allianceName})</div>}
    </div>
  );
};

const DefaultCell = ({ row, header }: { row: Row<Record<string, string>>; header: string }) => {
  const value = row.getValue(header) as string;
  const isNumber = value.length > 0 && !isNaN(Number(value));
  const isPositive = (value as string).startsWith('+');
  const displayValue = isNumber ? (isPositive ? '+' : '') + formatVotes(Number(value)) : (value as string);

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
