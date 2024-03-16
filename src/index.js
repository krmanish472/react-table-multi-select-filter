import React from "react";
import ReactDOM from "react-dom";
import { HorizonTable } from "./components/HorizonTable/HorizonTable.js";
import "./styles.css";
import "react-table-filter/lib/styles.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import faker from "faker";
import {
  faFilter,
  faSort,
  faSortUp,
  faSortDown
} from "@fortawesome/free-solid-svg-icons";
library.add(faFilter, faSort, faSortUp, faSortDown);
function App() {
  const createData = amount => {
    let data = [];
    for (let i = 0; i < amount; i++) {
      data.push({
        firstName: faker.name.firstName(),
        middleName: faker.name.firstName(),
        lastName: faker.name.lastName()
      });
    }
    return data;
  };
  return (
    <div className="App">
      <HorizonTable
        columns={React.useMemo(
          () => [
            {
              Header: <span style={{ color: "white" }}>First Name</span>,
              accessor: "firstName"
            },
            {
              Header: <span style={{ color: "white" }}>Middle Name</span>,
              accessor: "middleName"
            },
            {
              Header: <span style={{ color: "white" }}>Last Name</span>,
              accessor: "lastName"
            }
          ],
          []
        )}
        data={createData(1000)}
        // data={[]}
        loading={false}
        enablePagination={true}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
