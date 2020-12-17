import React from 'react';
import './App.css';
import Header from './Header'
import Footer from './Footer'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from './Homepage';
import SearchPage from './SearchPage'

function App () {
    return (
      <div className="App">
        
        <Router>
          <Header />
          <Switch>
            <Route path="/search">
              <SearchPage />
             </Route>
            <Route path="/">
              <Homepage />
            </Route>
          </Switch>
          <Footer />
        </Router>
       
      </div>
    );
  }


export default App;
