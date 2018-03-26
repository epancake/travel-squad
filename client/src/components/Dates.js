import React, { Component } from 'react';

const apiUrl = "https://travelsquadback.herokuapp.com/api"
let numOfDates = 0
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; 

class Dates extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      dates: true,
      buttons: [],
      row1col1: false
    }
  }
  
  componentDidMount() {
    this.props.dates.map(date => {
      if (date.group_id == window.location.href.slice(-9)) {
        this.setState({dates: true})
      }
    })
    
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
          numOfDates = 1
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
      return (
        <tr className="final">
          <td>Final Choice</td>
          {this.getNum(this.props.users.length+1)}
        </tr>
      )      
    }
    
    isItChecked = (row, col) => {
      console.log('checking');
        let buttonsArray = []
        this.state.buttons.map(button => {
          if (button.group_id == window.location.href.slice(-9)) {
            buttonsArray.push(button)
            console.log('ba', buttonsArray);
          }
        })
        let lastSave = buttonsArray[buttonsArray.length-1]
        console.log('ls', lastSave)
        let cellName = `row${row}col${col}`
        console.log('cn', cellName)
        if (lastSave) {
          if (lastSave[cellName] === true) {
            return true
          } 
        } else return false

    }
    
    getNum = (row) => {
      return this.props.dates.map(date => {
        if (date.group_id == window.location.href.slice(-9)) {
          numOfDates ++
          let name = `this.state.row${row}col${numOfDates}`
          let checkForChecks = this.isItChecked(row, numOfDates)
          console.log("checkForChecks", checkForChecks)
          return (
            <td key={Math.random()} className="radiotd">
            <div className="flexDiv">
              <input type="checkbox" defaultChecked={checkForChecks} name={`row${row}col${numOfDates}`} id={`dateChoice${numOfDates}`} value=""/>
            </div>
            </td>
          )
        }
      })
    }
  
  suggestedDates(){
    return this.props.dates.map(date => {
      if (date.group_id == window.location.href.slice(-9)) {
        return (
          <td key={date.id} >{date.dateSuggestion}</td>
        )
      }
    })
  }
    
  submitDates = (event) => {
    event.preventDefault()
    const groupID = window.location.href.slice(-9)
    const form = event.target;
    console.log("f", form)
    const data = new FormData(form);
    const startDateMonth = () => {
      if (data.get("dateStart")[5] > 0) {
        return months[data.get("dateStart")[6]+9]
      } else return months[data.get("dateStart")[6]-1]
    }
    const Month = (date) => {
      if (data.get(date)[5] > 0) {
        return months[data.get(date)[6]+9]
      } else return months[data.get(date)[6]-1]
    }
    const Day = (date) => {
      return `${data.get(date)[8]}${data.get(date)[9]}`
    }
    const Year = (date) => {
      return `${data.get(date)[0]}${data.get(date)[1]}${data.get(date)[2]}${data.get(date)[3]}`
    }
    const dateToSend = ({
      "dateSuggestion": `${Month("dateStart")} ${Day("dateStart")}, ${Year("dateStart")} to ${Month("dateEnd")} ${Day("dateEnd")}, ${Year("dateEnd")}`,
      "group_id": groupID
      })
    console.log('dateSuggestion', dateToSend)
    this.postDate(dateToSend)
  }

    postDate = (user) => {
      let url = apiUrl + "/dates"
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
      console.log("ob", objectToSend)
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

      <div className="dates">
        <h2>Dates:</h2>
        
        <form className="submissionForm" onSubmit={this.submitDates}>
          <div className="inputContainer">
            <label>Suggest Dates: </label>
            <input name="dateStart" type="date"></input>
            <p>to</p>
            <input name="dateEnd" type="date"></input>
          </div>
          <input type="submit"/>
        </form> 
        <form className="radioForm" onSubmit={this.onSubmitRadioForm}>
          <p>Select your preferred dates:</p>
          <table>
            <tbody>
              <tr>
                <th >People</th>
                {this.suggestedDates()}
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

export default Dates;
