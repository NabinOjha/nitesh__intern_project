import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Home from "./components/Home/index";
import Favourites from "./components/Favourites/index";
import TopRated from "./components/TopRated/index";
import SearchResults from "./components/SearchResults";
import MovieDetail from "./components/MovieDetail";
import Trending from './components/Trending'


const App = () => {
  return (
    <Router>
      <div style={{ maxWidth: 1365, margin: "0 auto" }}>
        <Header />
        <Switch>
          <Route path="/favourites" component={Favourites} />
          <Route path="/trending" component={Trending} />
          <Route path="/top-rated" component={TopRated} />
          <Route path="/search/:searchValue" component={SearchResults} />
          <Route path="/movies/:item" component={MovieDetail} />
          <Route path="/home" component={Home} />
          <Redirect form="/" to="/home" />
        </Switch>
      </div>
    </Router >
  );
};

export default App;
