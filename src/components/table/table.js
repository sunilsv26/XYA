import React, { Component } from "react";
import DataTable from "react-data-table-component";



class table extends Component {
  state = {
    columns: [
      { name: "TIME STAMP", selector: "time", sortable: true },
      { name: "MACHINE NAME", selector: "name", sortable: true },
      { name: "MOULD NAME", selector: "mould", sortable: true },
      { name: "ZONE NAME ", selector: "zone", sortable: true },
      { name: "HIGHER LIMIT ", selector: "higher", sortable: true },
      { name: "LOWER LIMIT ", selector: "lower", sortable: true },
      { name: "Y PHASE CURRENT ", selector: "y", sortable: true },
      { name: "R PHASE CURRENT ", selector: "r", sortable: true },
      { name: "B PHASE CURRENT ", selector: "b", sortable: true },
    ],
    data: [
      {
        id:'1',
        time: "25/12/2020 12_06_33.568",
        name: "TOYO",
        mould: "M20",
        zone: "ZONE_1",
        higher: "120",
        lower: "100",
        y: "115",
        r: 121.7,
        b: "128.1",
      },
      {
        id:'2',
        time: "25/12/2020 12_06_34.568",
        name: "TOYO",
        mould: "M20",
        zone: "ZONE_2",
        higher: "120",
        lower: "100",
        y: "115",
        r: 121.7,
        b: "128.1",
      },
      {
        id:'3',
        time: "25/12/2020 12_06_35.568",
        name: "TOYO",
        mould: "M20",
        zone: "ZONE_3",
        higher: "120",
        lower: "100",
        y: "115",
        r: 121.7,
        b: "128.1",
      },
    ],
  };
  

  render() {
    return <DataTable columns={this.state.columns} data={this.state.data}  pagination title="HEATER OPEN DETECTION DAY REPORT - FEB 6TH 2021"/>;
  }
}

export default table;
