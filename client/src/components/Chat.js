import React, { Component } from 'react';
import "./styles.css"

class Chat extends Component {

  render() {
    return (

      <div className="chat">
        <h2>Chat</h2>
          <ul id="messages"></ul>
          <form action="">
            <input id="m" autocomplete="off" /><button>Send</button>
          </form>
      </div>
    )
  }

}

export default Chat;
