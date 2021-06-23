import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import ListPage from "./ListPage";
import CreatePage from "./CreatePage";
import DetailPage from "./DetailPage";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <header>
            <h2 className="banner">Albert's Wondrous Oddities, Trinkets, and Baubles</h2>
            <div className="link-container">
              <button className="nav red"><Link to="/" className="white">All Wares</Link></button>
              <img src="https://cdn.dribbble.com/users/3676423/screenshots/6583465/mimic-idle.gif" alt="a moving chest" className="mimic"/>
              <button className="nav blue"><Link to="/create" className="white">Add to the Hoard</Link></button>
            </div>
          </header>
          <Switch>
            <Route 
              path="/" 
              exact
              render={(routerProps) => <ListPage {...routerProps} />} 
            /> 
              <Route 
              path="/magicItems/:id" 
              exact
              render={(routerProps) => <DetailPage {...routerProps} />} 
            />
            <Route 
              path="/create" 
              exact
              render={(routerProps) => <CreatePage {...routerProps} />} 
            />          
          </Switch>
        </div>
      </Router>
    );
  }
}