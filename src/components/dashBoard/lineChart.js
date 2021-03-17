import React, { Component } from "react";
import { Card, CardBody } from "reactstrap";
import ReactApexChart from "react-apexcharts";

class lineChart1 extends Component {
  state = {
    series: [
      {
        name: "High - 2013",
        data: [3, 1, 3, 10, 32, 45, 45, 46, 46, 46, 48, 48, 50, 55, 57, 64],
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
        height: 300,
        /* sparkline: {
          enabled: true
        }, */
        type: "line",
        dropShadow: {
          enabled: true,
          color: "#000",
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2,
        },
      },
      colors: ["#77B6EA", "#545454"],
      dataLabels: {
        enabled: true,
      },
      stroke: {
        curve: "smooth",
      },
      title: {
        text: "ZONE_1 STATUS BY TIME",
        align: "center",
      },
      grid: {
        borderColor: "#e7e7e7",
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      markers: {
        size: 1,
      },
      xaxis: {
        labels: {
          show: true,
          rotate: 45,
        },
        categories: [
          "0:00",
          "1:00",
          "3:00",
          "4:00",
          "5:00",
          "6:00",
          "7:00",
          "8:00",
          "9:00",
          "10:00",
          "11:00",
          "12:00",
          "13:00",
          "14:00",
          "15:00",
          "16:00",
          "17:00",
          "18:00",
          "19:00",
        ],
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -25,
        offsetX: -5,
      },
    },
  };
  render() {
    return (
      <div class="mt-2 mb-2">
      <Card>
        <CardBody>
          <div>
          <ReactApexChart
            width="100%"
            height="400"
            series={this.state.series}
            options={this.state.options}
            type="line"
          />
          </div>
        </CardBody>
      </Card>
      </div>
    );
  }
}

export default lineChart1;
