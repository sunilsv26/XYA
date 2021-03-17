import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../../redux/actions/auth/auth";
import { User ,Key} from "react-feather";

class login extends Component {
  state = {
    email: "",
    password: "",
  };

  handleEmailInputChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handlePasswordInputChange = (e) => {
    this.setState({ password: e.target.value });
  };
  render() {
    return (
      <div class="container-fluid h-100 login-background">
        <div class="row align-items-center h-100">
          <Col></Col>
          <Col lg="4" md="6" sm="12">
            <Card>
              <CardBody>
                <Form>
                  <FormGroup>
                    <Col class="text-left">
                      <Label for="email">Email</Label>
                      <InputGroup>
                        <InputGroupAddon>
                          <InputGroupText>
                            <User />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          id="email"
                          placeholder="Email"
                          type="text"
                          onChange={(e) => this.handlePasswordInputChange(e)}
                        />
                      </InputGroup>
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Col>
                      <Label for="password">Password</Label>
                      <InputGroup>
                        <InputGroupAddon>
                          <InputGroupText>
                            <Key />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          id="password"
                          placeholder="Password"
                          type="text"
                          onChange={(e) => this.handlePasswordInputChange(e)}
                        />
                      </InputGroup>
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Col>
                      <NavLink to="/dashboard">
                        <Button
                          onClick={this.props.isLogin}
                          size="md"
                          color="primary"
                        >
                          LOGIN
                        </Button>
                      </NavLink>
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Col>
          <Col></Col>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    isLogin: () => dispatch(loginUser()),
  };
};

export default connect(null, mapDispatchToProps)(login);
