import { ColumnDef } from '@tanstack/react-table';
import { ConstituencyWiseEntry, PartyWiseEntry } from './types';
import { partyColorMapping } from './utils/colorMapping';

export const partyWisecolumns: ColumnDef<PartyWiseEntry>[] = [
  {
    accessorKey: 'partyName',
    header: 'Party Name',
    cell: ({ row }) => (
      <div className="capitalize text-center">
        <span
          className="px-4 rounded-sm text-white font-semibold"
          style={{ background: partyColorMapping[row.getValue('partyName') as string] }}
        >
          {row.getValue('partyName')}
        </span>
      </div>
    ),
  },
  {
    accessorKey: 'estimatedSeatsBefore',
    header: 'Estimated Seats before 09-03-2017',
    cell: ({ row }) => <div className="capitalize text-center">{row.getValue('estimatedSeatsBefore')}</div>,
  },
  {
    accessorKey: 'estimatedPlusMinus',
    header: 'Estimated Plus Minus',
    cell: ({ row }) => <div className="capitalize text-center">{row.getValue('estimatedPlusMinus')}</div>,
  },
  {
    accessorKey: 'estimatedSeatsAfter',
    header: 'Estimates on 09-03-2017 after calculations',
    cell: ({ row }) => <div className="capitalize text-center">{row.getValue('estimatedSeatsAfter')}</div>,
  },
  {
    accessorKey: 'actualSeatsReceived',
    header: 'Actual seats received on 11-03-2017',
    cell: ({ row }) => <div className="capitalize text-center">{row.getValue('actualSeatsReceived')}</div>,
  },
];

export const constituencyWiseColumns: ColumnDef<ConstituencyWiseEntry>[] = [
  {
    accessorKey: 'district',
    header: 'District',
    cell: ({ row }) => <div className="capitalize text-center">{row.getValue('district')}</div>,
  },
  {
    accessorKey: 'constituency',
    header: 'Constituency',
    cell: ({ row }) => <div className="capitalize text-center">{row.getValue('constituency')}</div>,
  },
  {
    accessorKey: 'partyName',
    header: 'Party Name',
    cell: ({ row }) => (
      <div className="capitalize text-center">
        <span
          className="px-4 rounded-sm text-white font-semibold"
          style={{ background: partyColorMapping[row.getValue('partyName') as string] ?? partyColorMapping['Others'] }}
        >
          {row.getValue('partyName')}
        </span>
      </div>
    ),
  },
  {
    accessorKey: 'estimatedVotes',
    header: 'Estimated Votes (09-03-2017)',
    cell: ({ row }) => <div className="capitalize text-center">{row.getValue('estimatedVotes')}</div>,
  },
  {
    accessorKey: 'actualVotes',
    header: 'Actual Votes (11-03-2017)',
    cell: ({ row }) => <div className="capitalize text-center">{row.getValue('actualVotes')}</div>,
  },
  {
    accessorKey: 'difference',
    header: 'Difference',
    cell: ({ row }) => {
      const estimated = parseInt(row.getValue('estimatedVotes'));
      const actual = parseInt(row.getValue('actualVotes'));
      const difference = actual - estimated;
      return (
        <div className="capitalize text-center">
          {difference >= 0 ? '+' : '-'}
          {difference}
        </div>
      );
    },
  },
];
