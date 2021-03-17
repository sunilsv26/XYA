import React, { Component, Fragment } from "react";
import { Row, Col, Form, FormGroup, Input, Button } from "reactstrap";
import Table from "../../components/table/table";
import '../../assets/css/custom.css'

class dashBoard extends Component {
  render() {
    return (
      <Fragment>
        <Form onClick={(e) => e.preventDefault()}>
          <Row className="m-0 mt-3 tableSearch">
            <Col>
              <FormGroup>
                <Input type="text" placeholder="Start Date" />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Input type="text" placeholder="End Date" />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Input type="text" placeholder="Parameters" />
              </FormGroup>
            </Col>
            <Col>
              <Button
                color="primary"
                style={{ float: "left", marginBottom: "12px" }}
              >
                Search
              </Button>
            </Col>
          </Row>
        </Form>
        <Row>
          <Col lg="12">
            <Table />
          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default dashBoard;
