import React, { Component } from 'react';

const apiUrl = "https://travelsquadback.herokuapp.com/api"

class NewGroup extends Component {

  componentDidMount() {
    this.onSubmit = this.onSubmit.bind(this);
    this.getData = this.getData.bind(this);
    this.submitGroup = this.submitGroup.bind(this);
    this.submitLeader = this.submitLeader.bind(this);
    this.postGroup = this.postGroup.bind(this)
    this.postLeader = this.postLeader.bind(this)
    this.getData()
    this.getId()
  }

  getData = () => {
    fetch(apiUrl)
    .then(res => res.json())
    .then(res => {
    this.setState({
      users: res.users,
      groups: res.groups
    })
        })
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', this.state))
    }

  getId = () => {
    this.newID = Math.floor(Math.random() * (999999999 - 99999999)) + 99999999;
    return this.newID
  }

  onSubmit = (event) => {
    console.log('submitted')
    event.preventDefault()
    this.submitGroup(event)
    .then(response => this.submitLeader(event))
    .then(response => this.props.onNewGroup())
    .then(results => {
    window.location.hash = "/group/" + this.newID
    })
  }

  submitGroup(event) {
    const form = event.target;
    const data = new FormData(form);
    const groupToSend = ({
      "id": this.newID,
      "url": apiUrl + "/" + this.newID,
      "name": data.get('groupName')
    })
    return this.postGroup(groupToSend)
  }

  postGroup = (group) => {
    let url = apiUrl + "/groups"
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(group),
      headers: new Headers({
        'Content-Type': 'application/json'
    })
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(data => {this.setState({groups: data})})
    //
  }

  submitLeader(event) {
    const form = this.refs.form;
    console.log("form", form)
    const data = new FormData(form);
    const mainUserToSend = ({
      "email": data.get("main-email"),
      "fname": data.get("main-fname"),
      "lname": data.get("main-lname"),
      "group_id": this.newID
      })
    return this.postLeader(mainUserToSend)
  }

  postLeader = (user) => {
    let url = apiUrl + "/users"
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: new Headers({
        'Content-Type': 'application/json'
    })
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(data => {this.setState({users: data})})
  }

  render() {
    return (
      <div>
      <header className="landing-header">
          <h1>TravelSquad</h1>
      </header>
        <div className="form">
          <p className="instructions">Enter details about your group.</p>
          <form ref="form" className="memberForm" onSubmit={this.onSubmit}>
            <input placeholder="Group Name" type="text" name="groupName"/>
            <section className="person-entry">
              <input placeholder="Your First Name" type="text" name="main-fname"/>
              <input placeholder="Your Last Name" type="text" name="main-lname"/>
              <input placeholder="Your Email" type="text" name="main-email"/>
            </section>
            <input className="formEnd" type="submit" value="Continue">
            </input>
          </form>
        </div>
        <div className="landing-footer">
            <small>&copy; 2018 Emily Pancake</small>
        </div>
      </div>
    )
  }
}

export default NewGroup
