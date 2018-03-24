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
        <button className="createGroup">
          <Link to="/new">Create Group</Link>
        </button>
      </div>
    )
  }

}

export default Landing;
