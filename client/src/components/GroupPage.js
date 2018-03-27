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

var emojis = [
'😄','😃','😀','😊','☺','😉','😍','😘','😚','😗','😙','😜','😝','😛','😳','😁','😔','😌','😒','😞','😣','😢','😂','😭','😪','😥','😰','😅','😓','😩','😫','😨','😱','😠','😡','😤','😖','😆','😋','😷','😎','😴','😵','😲','😟','😦','😧','😈','👿','😮','😬','😐','😕','😯','😶','😇','😏','😑','👲','👳','👮','👷','💂','👶','👦','👧','👨','👩','👴','👵','👱','👼','👸','😺','😸','😻','😽','😼','🙀','😿','😹','😾','👹','👺','🙈','🙉','🙊','💀','👽','💩','🔥','✨','🌟','💫','💥','💢','💦','💧','💤','💨','👂','👀','👃','👅','👄','👍','👎','👌','👊','✊','✌','👋','✋','👐','👆','👇','👉','👈','🙌','🙏','☝','👏','💪','🚶','🏃','💃','👫','👪','👬','👭','💏','💑','👯','🙆','🙅','💁','🙋','💆','💇','💅','👰','🙎','🙍','🙇','🎩','👑','👒','👟','👞','👡','👠','👢','👕','👔','👚','👗','🎽','👖','👘','👙','💼','👜','👝','👛','👓','🎀','🌂','💄','💛','💙','💜','💚','❤','💔','💗','💓','💕','💖','💞','💘','💌','💋','💍','💎','👤','👥','💬','👣','💭','🐶','🐺','🐱','🐭','🐹','🐰','🐸','🐯','🐨','🐻','🐷','🐽','🐮','🐗','🐵','🐒','🐴','🐑','🐘','🐼','🐧','🐦','🐤','🐥','🐣','🐔','🐍','🐢','🐛','🐝','🐜','🐞','🐌','🐙','🐚','🐠','🐟','🐬','🐳','🐋','🐄','🐏','🐀','🐃','🐅','🐇','🐉','🐎','🐐','🐓','🐕','🐖','🐁','🐂','🐲','🐡','🐊','🐫','🐪','🐆','🐈','🐩','🐾','💐','🌸','🌷','🍀','🌹','🌻','🌺','🍁','🍃','🍂','🌿','🌾','🍄','🌵','🌴','🌲','🌳','🌰','🌱','🌼','🌐','🌞','🌝','🌚','🌑','🌒','🌓','🌔','🌕','🌖','🌗','🌘','🌜','🌛','🌙','🌍','🌎','🌏','🌋','🌌','🌠','⭐','☀','⛅','☁','⚡','☔','❄','⛄','🌀','🌁','🌈','🌊','🎍','💝','🎎','🎒','🎓','🎏','🎆','🎇','🎐','🎑','🎃','👻','🎅','🎄','🎁','🎋','🎉','🎊','🎈','🎌','🔮','🎥','📷','📹','📼','💿','📀','💽','💾','💻','📱','☎','📞','📟','📠','📡','📺','📻','🔊','🔉','🔈','🔇','🔔','🔕','📢','📣','⏳','⌛','⏰','⌚','🔓','🔒','🔏','🔐','🔑','🔎','💡','🔦','🔆','🔅','🔌','🔋','🔍','🛁','🛀','🚿','🚽','🔧','🔩','🔨','🚪','🚬','💣','🔫','🔪','💊','💉','💰','💴','💵','💷','💶','💳','💸','📲','📧','📥','📤','✉','📩','📨','📯','📫','📪','📬','📭','📮','📦','📝','📄','📃','📑','📊','📈','📉','📜','📋','📅','📆','📇','📁','📂','✂','📌','📎','✒','✏','📏','📐','📕','📗','📘','📙','📓','📔','📒','📚','📖','🔖','📛','🔬','🔭','📰','🎨','🎬','🎤','🎧','🎼','🎵','🎶','🎹','🎻','🎺','🎷','🎸','👾','🎮','🃏','🎴','🀄','🎲','🎯','🏈','🏀','⚽','⚾','🎾','🎱','🏉','🎳','⛳','🚵','🚴','🏁','🏇','🏆','🎿','🏂','🏊','🏄','🎣','☕','🍵','🍶','🍼','🍺','🍻','🍸','🍹','🍷','🍴','🍕','🍔','🍟','🍗','🍖','🍝','🍛','🍤','🍱','🍣','🍥','🍙','🍘','🍚','🍜','🍲','🍢','🍡','🍳','🍞','🍩','🍮','🍦','🍨','🍧','🎂','🍰','🍪','🍫','🍬','🍭','🍯','🍎','🍏','🍊','🍋','🍒','🍇','🍉','🍓','🍑','🍈','🍌','🍐','🍍','🍠','🍆','🍅','🌽','🏠','🏡','🏫','🏢','🏣','🏥','🏦','🏪','🏩','🏨','💒','⛪','🏬','🏤','🌇','🌆','🏯','🏰','⛺','🏭','🗼','🗾','🗻','🌄','🌅','🌃','🗽','🌉','🎠','🎡','⛲','🎢','🚢','⛵','🚤','🚣','⚓','🚀','✈','💺','🚁','🚂','🚊','🚉','🚞','🚆','🚄','🚅','🚈','🚇','🚝','🚋','🚃','🚎','🚌','🚍','🚙','🚘','🚗','🚕','🚖','🚛','🚚','🚨','🚓','🚔','🚒','🚑','🚐','🚲','🚡','🚟','🚠','🚜','💈','🚏','🎫','🚦','🚥','⚠','🚧','🔰','⛽','🏮','🎰','♨','🗿','🎪'
];

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
        groupId: ""
      }
  }

  componentDidMount() {
    this.setState(() => {return {groupName: this.getGroupName(), groupId: this.props.match.params.id}})
    Modal.setAppElement('.App');
    console.log("grouppage props", this.props)

  }

  getGroupName = () => {
    let groupName;
    if (!this.props.groups) {
      return <h1>No data yet, one second please!!!</h1>
    } else if (this.props.groups) {
      this.props.groups.map(group => {
        if (group.id == this.state.groupId) {
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

  randomEmoji = () => {
    return emojis[Math.floor(Math.random() * emojis.length)];
  };

  closeSubmitModal = () => {
    this.setState({submitModalIsOpen: false});
  }

  sendEmail = () => {
    console.log('starting to sending')
    Promise.all([
      this.mapUsers(),
    ]).then(results => {
    this.closeSubmitModal()
    })
  }

  mapUsers = () => {
    return this.props.users.map(user => {
      if (user.group_id == window.location.href.slice(-9)) {
        this.sendObject(user)
      }
    })
  }

  sendObject = (user) => {
    const objectToSend = ({
      "url": window.location.href,
      "email": user.email,
      "groupName": this.getGroupName(),
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
  }

  getUsers = () => {
      return this.props.users.map(user => {
        if (user.group_id == window.location.href.slice(-9)) {
          return <li key={user.id} className="person">{this.randomEmoji() + user.fname + " " + user.lname}</li>
        }
      })
  }


  render() {
    return (

      <div id="choices-section">
        <header className="landing-header fadeIn">
            <h1>{this.getGroupName()}</h1>
        </header>
        <InviteFriends reFetchData={this.props.reFetchData} users={this.props.users} status={this.state.inviteInfo} currentGroup={currentGroup}/>
        <input type="submit" value="Generate Email Invite" onClick={this.openSubmitModal}/>
        <Dates dates={this.props.dates} users={this.props.users}/>
        <Lodging reFetchData={this.props.reFetchData} airbnbs={this.props.airbnbs} users={this.props.users}/>
        <Activities users={this.props.users} activities={this.props.activities}/>
        <Chat/>
        <div className="landing-footer">
            <small>&copy; 2018 Emily Pancake</small>
        </div>


        <Modal
          isOpen={this.state.submitModalIsOpen}
          onRequestClose={this.closeSubmitModal}
          contentLabel="Solved Modal"
          onCancel={this.closeSubmitModal}
        >
        <h2>Send a link to all your friends!</h2>
        <div className="modalBody">
        <p>By pushing submit, you will be sending an invitation to this page to all members of the group:</p>
        <ul className="userlist">{this.getUsers()}</ul>
        </div>
        <input type="submit" value="Submit" onClick={this.sendEmail}/>
        <input type="submit" value="Cancel" onClick={this.closeSubmitModal}/>
        </Modal>

      </div>
    )
  }

}

export default GroupPage;
