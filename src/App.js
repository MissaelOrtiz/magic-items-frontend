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
        <div>
          <header>
            <h2>Albert's Wondrous Oddities, Trinkets, and Baubles</h2>
            <div className="link-container">
              <p className="box"><Link to="/">All Wares</Link></p>
              <p><Link to="/create">Add to the Hoard</Link></p>
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