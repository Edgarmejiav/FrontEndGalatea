import { Container } from "@mui/material";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "../layout/header/Header";
import { AboutScreen } from "../pages/AboutScreen";
import { HomeScreen } from "../pages/HomeScreen";

export const RouterApp = () => {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
      {/*       <Header />
       */}{" "}
      <Container maxWidth="lg">
        <Switch>
          <Route exact={true} path="/about" component={AboutScreen}></Route>
          <Route exact={true} path="/" component={HomeScreen}></Route>
        </Switch>
      </Container>
    </Router>
  );
};
