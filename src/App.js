import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./container/Header/Header";
import Home from "./container/pages/Home/Home";
import ArticlePage from "./container/pages/Article/ArticlePage";
import ScrollToTop from "./components/ScrollToTop";
import TagPage from "./container/pages/Tag/TagPage";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/tag" exact>
            <TagPage />
          </Route>
          <Route path="/:articleId" exact>
            <ArticlePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
