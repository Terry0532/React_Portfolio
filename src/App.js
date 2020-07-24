import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import Resume from "./pages/resume";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/resume" component={Resume} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;