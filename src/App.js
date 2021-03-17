import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Layout from "./components/layout/layout";
import Login from "./components/login/login";
import Dashboard from "./pages/dashBoard/dashBoard";
import Table from "./pages/dashBoard/table";
import "react-pro-sidebar/dist/css/styles.css";
import { connect } from "react-redux";


const App = (props) => {

  let authRoutes = (
    <Layout>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/table" component={Table} />
      </Switch>
    </Layout>
  );

  let loginRoute = (
    <Switch>
      <Route path="/" component={Login} />
      <Redirect to="/" />
    </Switch>
  );

  return <div className="App">{props.isLogin ? authRoutes:loginRoute}</div>;
};

const mapStateToProps = (state) => {
  return {
    isLogin: state.login.isLogin,
  };
};

export default connect(mapStateToProps)(App);
