import React, { Component } from "react";
import { Card, CardBody } from "reactstrap";
import ReactApexChart from "react-apexcharts";

class barChart extends Component {
  state = {
    series: [
      {
        name: "Net Profit",
        data: [
          44,
          55,
          57,
          56,
          61,
          58,
          63,
          60,
          66,
          44,
          55,
          57,
          56,
          61,
          58,
          63,
          60,
          66,
        ],
      },
    ],
    options: {
      chart: {
        toolbar:{
          show: true,
          offsetX: 0,
          offsetY: 0,
          tools: {
            download: true,
            selection: true,
            zoom: true,
            zoomin: true,
            zoomout: true,
            pan: true,
            reset: true | '<img src="/static/icons/reset.png" width="20">',
            customIcons: []
          },
        },
        type: "bar",
        height: 300,
        
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "25%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: true,
        offsetY: 70,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "ZONE_1",
          "ZONE_2",
          "ZONE_3",
          "ZONE_4",
          "ZONE_5",
          "ZONE_6",
          "ZONE_7",
          "ZONE_8",
          "ZONE_9",
          "ZONE_10",
          "ZONE_11",
          "ZONE_12",
          "ZONE_13",
          "ZONE_14",
          "ZONE_15",
          "ZONE_16",
          "ZONE_17",
          "ZONE_18",
        ],
      },
      title: {
        text: "ALARM OVERVIEW BY ZONE",
        floating: true,
        offsetY: 0,
        align: "center",
        style: {
          color: "#444",
        },
      },
      yaxis: {
       
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands";
          },
        },
      },
    },
  };
  render() {
    return (
      <div class="mt-2">
      <Card>
        <CardBody>
          <ReactApexChart
            height="400"
            series={this.state.series}
            options={this.state.options}
            type="bar"
          />
        </CardBody>
      </Card>
      </div>
    );
  }
}

export default barChart;
