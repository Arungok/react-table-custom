import React from "react";
import { TableProps } from "./tableInterface";
import Filters from "./Filters";
import Pagination from "./Pagination";

import "./Table.scss";

const Header = (props: any) => {
  let row = new Array();
  for (let k of props.cols) {
    row.push(
      <div
        className={`table-header-title ${k.align ? `text-${k.align}` : ""}`}
        key={k.key}
      >
        {k.title}
      </div>
    );
  }
  return <div className="table-header"><div className="table-header-row">{row}</div></div>;
};

const Rows = (props: any) => {
  let row = new Array();
  for (let k of props.data) {
    const tmp = new Array();
    for (let v in k) {
      tmp.push(
        <div className="table-body-column" key={v} data-value={k[v]}>
          {`${k[v]}`}
        </div>
      );
    }
    row.push(<div className="table-body-row">{tmp}</div>);
  }
  return <div className="table-body">{row}</div>;
};

const Table = (props: TableProps) => {
  return (
    <div className="table">
      <Header cols={props.columns} />
      <Rows data={props.data} />
    </div>
  );
};

export default Table;
