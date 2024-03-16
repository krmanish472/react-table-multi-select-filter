import React, { useState, useEffect, useRef } from "react";
import { useTable, useSortBy, usePagination } from "react-table";
import TableFilter from "react-table-filter";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";

export const CustomTable = ({ columns, data }) => {
  const [filteredData, setFilteredData] = useState([]);
  const filterRef = useRef(null);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns: columns,
        data: filteredData,
      },
      useSortBy,
      usePagination
    );
  useEffect(() => {
    filterRef.current.reset(data, true);
    setFilteredData(data);
  }, [data]);

  // Render the UI for your table
  const updateFilterHandler = (newData) => {
    setFilteredData(newData);
  };

  return (
    <div style={{ position: "relative" }}>
      <div style={{ position: "relative" }}>
        <Table {...getTableProps()}>
          <TableHead>
            {headerGroups.map((headerGroup) => (
              <TableFilter
                {...headerGroup.getHeaderGroupProps()}
                style={{ color: "black" }}
                rows={data}
                onFilterUpdate={updateFilterHandler}
                ref={filterRef}
              >
                {headerGroup.headers.map((column) => {
                  console.log(column);
                  return (
                    <TableCell
                      {...column.getHeaderProps()}
                      style={{
                        width: 100,
                        color: "black",
                      }}
                      filterkey={column.id}
                    >
                      {column.render("Header")}
                    </TableCell>
                  );
                })}
              </TableFilter>
            ))}
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <TableRow id={row.getRowProps().key} {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <TableCell
                        id={cell.getCellProps().key}
                        {...cell.getCellProps()}
                      >
                        {cell.render("Cell")}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
