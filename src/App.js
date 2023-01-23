import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import Resume from "./pages/resume";
import Test from "./pages/test";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + "/"} component={About} />
        <Route path={process.env.PUBLIC_URL + "/portfolio"} component={Portfolio} />
        <Route path={process.env.PUBLIC_URL + "/resume"} component={Resume} />
        <Route path={process.env.PUBLIC_URL + "/test"} component={Test} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;