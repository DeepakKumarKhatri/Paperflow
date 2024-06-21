"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BreadcrumbWithDropdown } from "@/components/BreadCrumb";

const data: ContributedDocument[] = [
  {
    id: "m5gr84i9",
    amount: 316,
    status: "pending",
    email: "ken99@yahoo.com",
  },
  {
    id: "3u1reuv4",
    amount: 242,
    status: "rejected",
    email: "Abe45@gmail.com",
  },
  {
    id: "derv1ws0",
    amount: 837,
    status: "accepted",
    email: "Monserrat44@gmail.com",
  },
  {
    id: "5kma53ae",
    amount: 874,
    status: "pending",
    email: "Silas22@gmail.com",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "pending",
    email: "carmella@hotmail.com",
  },
];

export type ContributedDocument = {
  id: string;
  amount: number;
  status: "accepted" | "pending" | "rejected";
  email: string;
};

export const columns: ColumnDef<ContributedDocument>[] = [
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className={`badge badge-${row.getValue("status")}`}>
        {row.getValue("status")}
      </div>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      return <div className="text-right font-medium">{amount}</div>;
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const status = row.getValue("status");
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            {status === "rejected" || status === "accepted" ? (
              <DropdownMenuItem>Delete</DropdownMenuItem>
            ) : (
              <>
                <DropdownMenuItem>View</DropdownMenuItem>
                <DropdownMenuItem>Delete</DropdownMenuItem>
                <DropdownMenuItem>Edit</DropdownMenuItem>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export default function DataTableDemo() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [filterStatus, setFilterStatus] = React.useState<string | undefined>();

  const filteredData = filterStatus
    ? data.filter((item) => item.status === filterStatus)
    : data;

  const table = useReactTable({
    data: filteredData,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-center p-4 bg-gray-100 dark:bg-gray-900">
        <div className="relative w-full sm:w-auto mt-2 sm:mt-0">
          <h1 className="text-xl sm:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4 sm:mb-0">
            YOUR CONTRIBUTIONS
          </h1>
        </div>
        <BreadcrumbWithDropdown />
      </div>
      <div className="w-full">
        <div className="flex items-center py-4 space-x-2">
          <Button
            variant={filterStatus === undefined ? "ghost" : "outline"}
            onClick={() => setFilterStatus(undefined)}
          >
            All
          </Button>
          <Button
            variant={filterStatus === "pending" ? "ghost" : "outline"}
            onClick={() => setFilterStatus("pending")}
          >
            Pending
          </Button>
          <Button
            variant={filterStatus === "accepted" ? "ghost" : "outline"}
            onClick={() => setFilterStatus("accepted")}
          >
            Accepted
          </Button>
          <Button
            variant={filterStatus === "rejected" ? "ghost" : "outline"}
            onClick={() => setFilterStatus("rejected")}
          >
            Rejected
          </Button>
          <Input
            placeholder="Filter Documents"
            value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("email")?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />
        </div>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-end space-x-2 py-4">
          <div className="space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
