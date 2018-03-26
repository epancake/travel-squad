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
      groups: [],
      dates: [],
      airbnbs: [],
      activities: []
  }

  componentDidMount() {
    this.getData()
    this.getActivities()

  }

  getData = () => {
    fetch(apiUrl)
    .then(res => res.json())
    .then(res => {
    this.setState({
      users: res.users,
      groups: res.groups,
      dates: res.dates,
      airbnbs: res.airbnb
    })
  })
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', this.state))
    }

  getActivities = () => {
    fetch(apiUrl + "/activities")
    .then(res => res.json())
    .then(res => {
    this.setState({
      activities: res.activities,
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
             <Route path="/new" render={(props)=><NewGroup
               users={this.state.users}
               groups={this.state.groups}
               {...props} />}
            />
             <Route path="/group/:id" render={(props)=><GroupPage
               airbnbs={this.state.airbnbs}
               dates={this.state.dates}
               users={this.state.users}
               groups={this.state.groups}
               activities={this.state.activities}
               {...props} />} />
           </Switch>
         </div>
       </Router>
   )
 }
}

export default App;
