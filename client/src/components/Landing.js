import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class Landing extends Component {

  render() {
    return (

      <div className="landing">
        <header className="landing-header">
          <Link to="/">
            <h1>TravelSquad</h1>
          </Link>
        </header>
        <div className="main">
        <button className="createGroup">
          <Link to="/new">Create Group</Link>
        </button>
        </div>
        <div className="landing-footer">
            <small>&copy; 2018 Emily Pancake</small>
        </div>
      </div>
    )
  }

}

export default Landing;
