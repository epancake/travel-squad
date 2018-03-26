import React, { Component } from 'react';

const apiUrl = "https://travelsquadback.herokuapp.com/api"

class InviteForm extends Component {

  constructor(props) {
    super(props);
    this.onSubmitUser = this.onSubmitUser.bind(this);
    this.postUser = this.postUser.bind(this);
  }

  onSubmitUser(event) {
    event.preventDefault()
    event.stopPropagation()
    const groupID = window.location.href.slice(-9)
    const form = event.target;
    const data = new FormData(form);
    const userToSend = ({
      "email": data.get("main-email"),
      "fname": data.get("main-fname"),
      "lname": data.get("main-lname"),
      "group_id": groupID
      })
    console.log('user', userToSend)
    this.postUser(userToSend)
  }

    postUser = (user) => {
      let url = apiUrl + "/users"
      console.log("url", url)
      fetch(url, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: new Headers({
          'Content-Type': 'application/json'
      })
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
    }

  render() {
  return (
    <div className="form">
      <p>Enter new traveler info</p>
      <form className="memberForm" onSubmit={this.onSubmitUser}>
        <section className="person-entry">
          <label>Traveler First Name:</label>
          <input type="text" name="main-fname"/>
          <label>Traveler Last Name:</label>
          <input type="text" name="main-lname"/>
          <label>Traveler Email:</label>
          <input type="text" name="main-email"/>
        </section>
        <input className="formEnd" type="submit" value="Submit Traveler">
        </input>
      </form>
    </div>
  )
  }
}


export default InviteForm
