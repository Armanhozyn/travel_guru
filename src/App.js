import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Booking from './components/Booking/Booking';
import { Route,BrowserRouter as Router,Switch} from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';


function App() {

  return (
    <div className="App container">
      <Router>
        <Switch>
        <Route path="/book">
            <Booking></Booking>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
