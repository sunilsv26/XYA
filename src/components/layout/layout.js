import React from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Grid, Database } from "react-feather";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import {Row,Col} from 'reactstrap'
import '../../assets/css/custom.css'

const layout = (props) => {
  return (
      <div className="d-flex component ">
        <nav>
        <ProSidebar collapsed="true">
            <Menu iconShape="square">
              <MenuItem
                icon={
                  <NavLink to="/dashboard">
                    <Grid />
                  </NavLink>
                }
              ></MenuItem>
            </Menu>
            <Menu iconShape="square">
              <MenuItem
                icon={
                  <NavLink to="/table">
                    <Database />
                  </NavLink>
                }
              ></MenuItem>
            </Menu>
          </ProSidebar>
        </nav>
        <div className="col-lg-11 p-0">{props.children}</div>
      </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLogin: state.login.isLogin,
  };
};

export default connect(mapStateToProps)(layout);
