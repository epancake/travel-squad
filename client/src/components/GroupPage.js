import React, { Component } from 'react';
import Dates from "./Dates"
import Lodging from "./Lodging"
import Activities from "./Activities"
import InviteFriends from "./InviteFriends"
import Chat from "./Chat"
import "./styles.css"

let currentGroup;

class GroupPage extends Component {
  constructor(props){
      super(props)
      this.state = {
        inviteInfo: false,
        users: this.props.users,
        groups: this.props.groups,
        currentGroup: {}
      }
  }

  componentDidMount() {
  }

  getGroupName(id) {
    let groupname;
    if (!this.props.groups) {
      return <h1>No data yet, one second please!!!</h1>
    } else if (this.props.groups) {
      this.props.groups.map(group => {
        if (group.id == id) {
          groupname = group.name
          currentGroup = group
          return true
        }
      })
      return <h1>{groupname}</h1>
    }
  }


  render() {
    return (

      <div id="choices-section">
        <header className="landing-header">
            {this.getGroupName((window.location.href.slice(-9)))}
        </header>
        <InviteFriends users={this.props.users} status={this.state.inviteInfo} currentGroup={currentGroup}/>
        <Dates dates={this.props.dates} users={this.props.users}/>
        <Lodging users={this.props.users}/>
        <Activities users={this.props.users}/>
        <Chat/>
      </div>
    )
  }

}

export default GroupPage;
