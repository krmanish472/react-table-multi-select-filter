import React, { useEffect, useMemo, useState } from "react";
import ReactDOM from "react-dom";
import { CustomTable } from "./components/CustomTable.js";
import "./styles.css";
import "react-table-filter/lib/styles.css";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faFilter,
  faSort,
  faSortUp,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";

import { mockData } from "./MockData.js";

library.add(faFilter, faSort, faSortUp, faSortDown);

function App() {
  const [rowItems, setRowItems] = useState([]);

  useEffect(() => {
    setRowItems(mockData);
  }, []);

  useEffect(() => {
    console.log(rowItems);
  }, [rowItems]);

  const updateState = (row, data) => {
    console.log("first", row, data);
    const updatedData = data.map((item) => {
      return item.name == row.original.name
        ? {
            ...item,
            sponsor: row.original.sponsor == "true" ? "false" : "true",
          }
        : item;
    });
    setRowItems(updatedData);
  };

  const columns = useMemo(
    () => [
      {
        Header: "Gender",
        accessor: "gender",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "City",
        accessor: "city",
      },
      {
        Header: "Sponsor",
        accessor: "sponsor",
        Cell: ({ value, row, data }) => {
          return (
            <input
              type="checkbox"
              checked={value == "true" ? true : false}
              onChange={() => updateState(row, data)}
            ></input>
          );
        },
      },
    ],
    []
  );

  return (
    <div className="App">
      <CustomTable columns={columns} data={rowItems} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
