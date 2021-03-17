import React, { Component, Fragment } from "react";
import { Row, Col } from "reactstrap";
import BarChart from "../../components/dashBoard/barChart";
import LineChart1 from "../../components/dashBoard/lineChart";

class dashBoard extends Component {
  render() {
    return (
      <Fragment>
        <Row className="m-0">
          <Col lg="12">
            <BarChart />
          </Col>
        </Row>
        <Row className="m-0">
          <Col lg="6" md="12" sm="12">
            <LineChart1 />
          </Col>
          <Col  lg="6" md="12" sm="12">
            <LineChart1 />
          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default dashBoard;
