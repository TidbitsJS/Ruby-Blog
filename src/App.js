import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./container/Header/Header";
import Home from "./container/pages/Home/Home";
import ArticlePage from "./container/pages/Article/ArticlePage";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/article" exact>
            <ArticlePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
