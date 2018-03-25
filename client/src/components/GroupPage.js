import React, { Component } from 'react';
import Modal from 'react-modal';
import Dates from "./Dates"
import Lodging from "./Lodging"
import Activities from "./Activities"
import InviteFriends from "./InviteFriends"
import Chat from "./Chat"
import "./styles.css"

let currentGroup;
const apiUrl = "https://travelsquadback.herokuapp.com/api"

class GroupPage extends Component {
  constructor(props){
      super(props)
      this.state = {
        inviteInfo: false,
        users: this.props.users,
        groups: this.props.groups,
        currentGroup: {},
        groupName: "",
        submitModalIsOpen: false,
      }
  }

  componentDidMount() {
    this.setState(() => {return {groupName: this.getGroupName()}})
    Modal.setAppElement('.App');
  }

  getGroupName = () => {
    let groupName;
    if (!this.props.groups) {
      return <h1>No data yet, one second please!!!</h1>
    } else if (this.props.groups) {
      this.props.groups.map(group => {
        if (group.id == window.location.href.slice(-9)) {
          groupName = group.name
          currentGroup = group
          return true
        }
      })
    }
    return groupName
  }
  
  openSubmitModal = () => {
  console.log('openine')
  this.setState({submitModalIsOpen: true});

  }

  closeSubmitModal = () => {
    this.setState({submitModalIsOpen: false});
  }
  
  // sendEmail = () => {
  //   console.log('starting to sending')
  //   // Promise.all([
  //   //   this.makeObject(),
  //   // ]).then(results => {
  //   // this.closeSubmitModal()
  //   // })
  // }

  // sendEmail() {
  // 
  //   return this.sendObject(objectToSend)
  // }

  sendObject = () => {
    const objectToSend = ({
      "message": "Hello big world",
      "email": "Email Address"
    })
    console.log("eo", objectToSend);
    let url = apiUrl + "/send"
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(objectToSend),
      headers: new Headers({
        'Content-Type': 'application/json'
    })
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    //
  }
  
  getUsers = () => {
      return this.props.users.map(user => {
        if (user.group_id == window.location.href.slice(-9)) {
          return <li key={user.id} className="person">{user.fname + " " + user.lname}</li>
        }
      })
  }


  render() {
    return (

      <div id="choices-section">
        <header className="landing-header">
            <h1>{this.getGroupName()} hi</h1>
            <h2>hi</h2>
        </header>
        <InviteFriends users={this.props.users} status={this.state.inviteInfo} currentGroup={currentGroup}/>
        <Dates dates={this.props.dates} users={this.props.users}/>
        <Lodging airbnbs={this.props.airbnbs} users={this.props.users}/>
        <Activities users={this.props.users}/>
        <input type="submit" value="Submit" onClick={this.openSubmitModal}/>
        <Chat/>
        
        <Modal
          isOpen={this.state.submitModalIsOpen}
          onRequestClose={this.closeSubmitModal}
          contentLabel="Solved Modal"
          onCancel={this.closeSubmitModal}
        >
        <h2>Send a link to all your friends!</h2>
        <p>By pushing submit, you will be sending an invitation to this page to all members of the group:</p>
        <ul className="userlist">{this.getUsers()}</ul>
        <input type="submit" value="Submit" onClick={this.sendObject()}/>
        </Modal>
      
      </div>
    )
  }

}

export default GroupPage;
