import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieList from './layout/MovieList';
import MovieData from './components/Movies/MovieData';
import TheMoviePage from './components/Movies/TheMoviePage';


const NoMatchRoute = () => <div>404 Page</div>;

const App = () => {
  return (
    <div className="movies">          
    <Router>
    <Switch>
      <Route path="/" exact component={MovieList} />
      {/* <Route path="/" exact component={Search} /> */}
      <Route path="/movie/:movieId" exact component={MovieData} />
      <Route component={NoMatchRoute} />
    </Switch>
  </Router>
  </div>
  );
}

export default App;
