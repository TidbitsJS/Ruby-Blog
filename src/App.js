import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./container/Header/Header";
import Home from "./container/pages/Home/Home";
import ArticlePage from "./container/pages/Article/ArticlePage";
import ScrollToTop from "./components/ScrollToTop";
import TagPage from "./container/pages/Tag/TagPage";
import Footer from "./container/Footer/Footer";
import AuthorPage from "./container/pages/Author/AuthorPage";
import NotFound from "./container/NotFound/NotFound";

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
          <Route path="/authors" exact>
            <AuthorPage />
          </Route>
          <Route path="/articles/:articleId" exact>
            <ArticlePage />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
