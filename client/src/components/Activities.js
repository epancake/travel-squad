import React, { Component } from 'react';

const apiUrl = "https://travelsquadback.herokuapp.com/api"
let numOfActivities = 0

class Activities extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
      buttons: [],
    }
  }
  
  componentDidMount() {
    fetch(apiUrl + "/buttons")
    .then(res => res.json())
    .then(res => {
    this.setState({
      buttons: res.buttons
    })
  })
  }

  getUserLines(id){
      let row = 0
      return this.props.users.map(user => {
        if (user.group_id == id) {
          row++
          return (
            <tr key={user.id} className="person">
              <td>{user.fname + " " + user.lname}</td>
              {this.getNum(row)}
            </tr>
          )
        }
      })
    }
    
    finalRow(){
      let usersHere = 0
      this.props.users.map(user => {
        if (user.group_id == window.location.href.slice(-9)) {
          usersHere++
        }
      })
        return (
          <tr className="final">
            <td>Final Choice</td>
            {this.getNum(usersHere+1)}
          </tr>
        )
    }
    
    isItChecked = (row, col) => {
        let buttonsArray = []
        this.state.buttons.map(button => {
          if (button.group_id == window.location.href.slice(-9)) {
            buttonsArray.push(button)
          }
        })
        let lastSave = buttonsArray[buttonsArray.length-1]
        let cellName = `row${row}col${col}`
        if (lastSave) {
          if (lastSave[cellName] === true) {
            return true
          } 
        } else return false

    }
    
    getNum = (row) => {
      numOfActivities = 0
      return this.props.activities.map(date => {
        if (date.group_id == window.location.href.slice(-9)) {
          numOfActivities ++
          let name = `this.state.row${row}col${numOfActivities}`
          let checkForChecks = this.isItChecked(row, numOfActivities)
          return (
            <td key={Math.random()} className="radiotd">
            <div className="flexDiv">
              <input type="checkbox" defaultChecked={checkForChecks} name={`row${row}col${numOfActivities}`} id={`dateChoice${numOfActivities}`} value=""/>
            </div>
            </td>
          )
        }
      })
    }
  
  suggestedActivities(){
    return this.props.activities.map(date => {
      if (date.group_id == window.location.href.slice(-9)) {
        return (
          <td key={date.id} >{date.dateSuggestion}</td>
        )
      }
    })
  }
    
  submitActivities = (event) => {
    event.preventDefault()
    const groupID = window.location.href.slice(-9)
    const form = event.target;
    const data = new FormData(form);
    const activitiyToSend = ({
      "activitySuggestion": data.get("activity"),
      "group_id": groupID
      })
    this.postDate(activitiyToSend)
  }

    postDate = (user) => {
      let url = apiUrl + "/activities"
      fetch(url, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: new Headers({
          'Content-Type': 'application/json'
      })
      }).then(res => res.json())
      .then(res => window.location.reload())
      .catch(error => console.error('Error:', error))
    }
    
    onSubmitRadioForm = (event) => {
      event.preventDefault()
      const form = event.target;
      const data = new FormData(form);
      const row1col1 = () => {
        if (data.get("row1col1") != null) {
        return true
        } else return false
      }
      const row1col2 = () => {
        if (data.get("row1col2") != null) {
        return true
        } else return false
      }
      const row1col3 = () => {
        if (data.get("row1col3") != null) {
        return true
        } else return false
      }
      const row1col4 = () => {
        if (data.get("row1col4") != null) {
        return true
        } else return false
      }
      const row1col5 = () => {
        if (data.get("row1col5") != null) {
        return true
        } else return false
      }
      const row2col1 = () => {
        if (data.get("row2col1") != null) {
        return true
        } else return false
      }
      const row2col2 = () => {
        if (data.get("row2col2") != null) {
        return true
        } else return false
      }
      const row2col3 = () => {
        if (data.get("row2col3") != null) {
        return true
        } else return false
      }
      const row2col4 = () => {
        if (data.get("row2col4") != null) {
        return true
        } else return false
      }
      const row2col5 = () => {
        if (data.get("row2col5") != null) {
        return true
        } else return false
      }
      const row3col1 = () => {
        if (data.get("row3col1") != null) {
        return true
        } else return false
      }
      const row3col2 = () => {
        if (data.get("row3col2") != null) {
        return true
        } else return false
      }
      const row3col3 = () => {
        if (data.get("row3col3") != null) {
        return true
        } else return false
      }
      const row3col4 = () => {
        if (data.get("row3col4") != null) {
        return true
        } else return false
      }
      const row3col5 = () => {
        if (data.get("row3col5") != null) {
        return true
        } else return false
      }
      const objectToSend = {
        "group_id": window.location.href.slice(-9),
        "row1col1": row1col1(),
        "row1col2": row1col2(),
        "row1col3": row1col3(),
        "row1col4": row1col4(),
        "row1col5": row1col5(),
        "row2col1": row2col1(),
        "row2col2": row2col2(),
        "row2col3": row2col3(),
        "row2col4": row2col4(),
        "row2col5": row2col5(),
        "row3col1": row3col1(),
        "row3col2": row3col2(),
        "row3col3": row3col3(),
        "row3col4": row3col4(),
        "row3col5": row3col5()
      };
      this.postButtons(objectToSend)  
    }
    
    postButtons = (objectToSend) => {
      let url = apiUrl + "/buttons"
      fetch(url, {
        method: 'POST',
        body: JSON.stringify(objectToSend),
        headers: new Headers({
          'Content-Type': 'application/json'
      })
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
    }

  render() {
    return (

      <div className="activities">
        <h2>Activities:</h2>
        
        <form className="submissionForm" onSubmit={this.submitActivities}>
          <div className="inputContainer">
            <label>Suggest Activities: </label>
            <input name="activity" type="text"></input>
          </div>
          <input type="submit"/>
        </form> 
        <form className="radioForm" onSubmit={this.onSubmitRadioForm}>
          <p>Select your preferred activities:</p>
          <table>
            <tbody>
              <tr>
                <th >People</th>
                {this.suggestedActivities()}
              </tr> 
              {this.getUserLines(window.location.href.slice(-9))}
              {this.finalRow()}
            </tbody>      
          </table>
          <input type="submit" value="Save Table"></input>
        </form>
      <pre id="log">
      </pre>
      </div>
    )
  }

}

export default Activities;
