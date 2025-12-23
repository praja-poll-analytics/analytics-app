import { ColumnDef } from '@tanstack/react-table';
import { PartyWiseEntry } from '../types';
import { partyColorMapping } from '../utils/colorMapping';

export const columns: ColumnDef<PartyWiseEntry>[] = [
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
