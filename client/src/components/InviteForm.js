import React, { Component } from 'react';

const apiUrl = "https://travelsquadback.herokuapp.com/api"

class InviteForm extends Component {

  constructor(props) {
    super(props);
    this.onSubmitUser = this.onSubmitUser.bind(this);
    this.postUser = this.postUser.bind(this);

    this.state = {
      inputField1: "",
      inputField2: "",
      inputField3: ""
    }
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
      .then(res => this.props.reFetchData())
      .then(res => {this.setState({inputField1: "", inputField2: "", inputField3: ""}); return res})
      .catch(error => console.error('Error:', error))
    }

    handleInputChange1 = (e) => {
      this.setState({inputField1: e.target.value});
    }

    handleInputChange2 = (e) => {
      this.setState({inputField2: e.target.value});
    }

    handleInputChange3 = (e) => {
      this.setState({inputField3: e.target.value});
    }

  render() {
  return (
    <div className="form">
      <p>Enter new traveler info</p>
      <form className="memberForm" onSubmit={this.onSubmitUser}>
        <section className="person-entry">
          <input placeholder="Traveler First Name" value={this.state.inputField1} type="text" name="main-fname" onChange={this.handleInputChange1}/>
          <input placeholder="Traveler Last Name" value={this.state.inputField2} type="text" name="main-lname" onChange={this.handleInputChange2}/>
          <input placeholder="Traveler Email" value={this.state.inputField3} type="text" name="main-email" onChange={this.handleInputChange3}/>
        </section>
        <input className="formEnd" type="submit" value="Submit Traveler">
        </input>
      </form>
    </div>
  )
  }
}


export default InviteForm
