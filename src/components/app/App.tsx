import React from "react";
import "./App.scss";
import Table from "../table/Table";
import TableData from "../../assets/data.json";

function App() {
  return (
    <div className="App">
      <Table columns={TableData?.cols} data={TableData?.data} />
    </div>
  );
}

export default App;
