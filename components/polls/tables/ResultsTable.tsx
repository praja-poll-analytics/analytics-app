import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useState } from 'react';
import { ReactSVG } from 'react-svg';

interface ResultTableProps<T> {
  title: string;
  data: T[];
  columns: ColumnDef<T>[];
  scrollable?: boolean;
  mergeCells?: Array<{
    columnKey: string;
    startRow: number;
    rowSpan: number;
    value: string;
  }>;
}

const pageSizes = [10, 25, 50, 100];

export function ResultTable<T>({ title, data, columns, scrollable = false, mergeCells = [] }: ResultTableProps<T>) {
  const [searchQuery, setSearchQuery] = useState('');
  const [pageSize, setPageSize] = useState(25);

  // Helper function to check if a cell should be hidden (part of a merged cell)
  const shouldHideCell = (rowIndex: number, columnKey: string): boolean => {
    return mergeCells.some(
      (merge) => merge.columnKey === columnKey && rowIndex > merge.startRow && rowIndex < merge.startRow + merge.rowSpan
    );
  };

  // Helper function to get rowspan for a cell
  const getCellRowSpan = (rowIndex: number, columnKey: string): number => {
    const merge = mergeCells.find((m) => m.columnKey === columnKey && m.startRow === rowIndex);
    return merge ? merge.rowSpan : 1;
  };

  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable({
    data,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      globalFilter: searchQuery,
      pagination: {
        pageSize: pageSize,
        pageIndex: 0,
      },
    },
    onGlobalFilterChange: setSearchQuery,
    onPaginationChange: (updater) => {
      const newState = typeof updater === 'function' ? updater(table.getState().pagination) : updater;
      setPageSize(newState.pageSize);
    },
  });

  return (
    <div className="w-full">
      {/* Title */}
      {title && <h2 className="text-2xl font-bold text-neutral-900 mb-4">{title}</h2>}

      {/* Search and Page Size Row */}
      <div className="mb-4 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        {/* Search Input */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <ReactSVG src="/assets/icons/search.svg" className="text-neutral-400 size-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search table..."
              className="block w-full pl-10 pr-10 py-2 border border-neutral-300 rounded-md leading-5 bg-white placeholder-neutral-500 focus:outline-none focus:placeholder-neutral-400 focus:ring-1 focus:ring-primary focus:border-primary text-sm"
            />
            {searchQuery && (
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-neutral-400 hover:text-neutral-600 focus:outline-none"
                  title="Clear search"
                >
                  <ReactSVG src="/assets/icons/clear.svg" className="size-4" />
                </button>
              </div>
            )}
          </div>
          {searchQuery && (
            <div className="mt-2 text-sm text-neutral-600">
              Found {table.getFilteredRowModel().rows.length} results for &quot;{searchQuery}&quot;
            </div>
          )}
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-sm text-neutral-600">Show</span>
          <select
            value={pageSize}
            onChange={(e) => {
              const newPageSize = Number(e.target.value);
              setPageSize(newPageSize);
              table.setPageSize(newPageSize);
            }}
            className="border border-neutral-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
          >
            {pageSizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          <span className="text-sm text-neutral-600">entries</span>
        </div>
      </div>

      <div className="flex flex-row justify-between w-full items-center mb-4">
        <div className="text-sm text-neutral-600">
          Showing {table.getState().pagination.pageIndex * pageSize + 1} to{' '}
          {Math.min((table.getState().pagination.pageIndex + 1) * pageSize, table.getFilteredRowModel().rows.length)} of{' '}
          {table.getFilteredRowModel().rows.length} entries
        </div>
        {table.getPageCount() > 1 && (
          <div className="flex items-center justify-end space-x-2">
            <div className="space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                Previous
              </Button>
              <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
                Next
              </Button>
            </div>
          </div>
        )}
      </div>

      <div className={`rounded-md border ${scrollable ? 'overflow-x-auto' : 'overflow-x-auto lg:overflow-hidden'}`}>
        <Table className={scrollable ? 'w-full' : 'table-fixed w-full'}>
          <TableHeader className="bg-primary">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className={`border-r text-white text-center px-2 break-words whitespace-normal h-auto py-2 ${
                        scrollable ? 'min-w-[150px]' : ''
                      }`}
                    >
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row, rowIndex) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                  {row.getVisibleCells().map((cell) => {
                    const columnKey = cell.column.id;
                    const hide = shouldHideCell(rowIndex, columnKey);
                    const rowSpan = getCellRowSpan(rowIndex, columnKey);

                    if (hide) {
                      return null;
                    }

                    return (
                      <TableCell
                        key={cell.id}
                        rowSpan={rowSpan}
                        className={`border-r px-2 ${scrollable ? 'min-w-[150px]' : 'lg:truncate'} ${
                          rowSpan > 1 ? 'align-middle' : ''
                        }`}
                      >
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
