import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import NewGroup from "./components/NewGroup.js"
import About from "./components/About.js"
import Landing from "./components/Landing.js"
import GroupPage from "./components/GroupPage.js"

const apiUrl = "https://travelsquadback.herokuapp.com/api"

class App extends Component {

  state = {
      users: [],
      groups: []
  }

  componentDidMount() {
    this.getData()
  }

  getData = () => {
    fetch(apiUrl)
    .then(res => res.json())
    .then(res => {console.log('response', res); return res})
    .then(res => {
    this.setState({
      users: res.users,
      groups: res.groups
    })
        })
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', this.state))
    }

 render() {
   return (
       <Router>
         <div className="App">
           <Switch>
             <Route exact path="/" component={Landing} />
             <Route path="/new" render={()=><NewGroup users={this.state.users} groups={this.state.groups}/>} />
             <Route path="/group/:id" render={()=><GroupPage users={this.state.users} groups={this.state.groups}/>} />
           </Switch>
         </div>
       </Router>
   )
 }
}

export default App;
