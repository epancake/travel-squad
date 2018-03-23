import React from "react"
import Collapse from "react-collapse"
import InviteForm from "./InviteForm.js"
import "./styles.css"


class InviteFriends extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isOpened: this.props.status,
    }
  }

  componentDidMount(){
  }

  getUsers(){
    if (this.props.currentGroup) {
      console.log("hi", this.props)
      return this.props.users.map(user => {
        if (user.group_id == window.location.href.slice(-9)) {
          return <li className="person">{user.fname + " " + user.lname}</li>
        }
      })
    }
  }

  render(){
    return (
      <div className="invite-div">
        <div className="groupList">
          <p>Group Members:</p>
          <ul>{this.getUsers()}</ul>
        </div>
        <section className="invite-friends" onClick={(e)=>{this.setState({ isOpened: !this.state.isOpened })}}>
        <h2>Add Group Members</h2>
        <h3 className={this.state.isOpened ? "hidden" : ""}>
          <i className="fas fa-plus-square"></i>
        </h3>
        <h3 className={!this.state.isOpened ? "hidden" : ""}>
          <i className="fas fa-minus-square"></i>
        </h3>
        </section>

        <Collapse isOpened={this.state.isOpened}>
          <InviteForm key="1" users={this.props.users}/>
        </Collapse>
      </div>
    )
  }
}

export default InviteFriends
