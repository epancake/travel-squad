import React, { Component } from 'react';

const apiUrl = "https://travelsquadback.herokuapp.com/api"
let numOfDates = 0
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

class Dates extends Component {

  constructor(props) {
    super(props)

    this.state = {
      buttons: [],
      startDate: 0,
      endDate: 0,
      row1col1: false,
      row1col2: false,
      row1col3: false,
      row1col4: false,
      row1col5: false,
      row2col1: false,
      row2col2: false,
      row2col3: false,
      row2col4: false,
      row2col5: false,
      row3col1: false,
      row3col2: false,
      row3col3: false,
      row3col4: false,
      row3col5: false,
      row4col1: false,
      row4col2: false,
      row4col3: false,
      row4col4: false,
      row4col5: false,
      row5col1: false,
      row5col2: false,
      row5col3: false,
      row5col4: false,
      row5col5: false,
      row6col1: false,
      row6col2: false,
      row6col3: false,
      row6col4: false,
      row6col5: false
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

  populateUserNames(id){
      let row = 0
      return this.props.users.map(user => {
        if (user.group_id == id) {
          row++
          return (
            <tr key={user.id} className="person">
              <td>{user.fname + " " + user.lname}</td>
              {this.getNumOfButtonsForRow(row)}
            </tr>
          )
        }
      })
    }

  addFinalRow(){
    let usersHere = 0
    this.props.users.map(user => {
      if (user.group_id == window.location.href.slice(-9)) {
        usersHere++
      }
    })
      return (
        <tr className="final">
          <td>Final Choice</td>
          {this.getNumOfButtonsForRow(usersHere+1)}
        </tr>
      )
  }

  populateButtonChecks = (row, col) => {
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

  getNumOfButtonsForRow = (row) => {
    numOfDates = 0
    return this.props.dates.map(date => {
      if (date.group_id == window.location.href.slice(-9)) {
        numOfDates ++
        let name = `this.state.row${row}col${numOfDates}`
        let checkForChecks = this.populateButtonChecks(row, numOfDates)
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

  populateDates(){
    return this.props.dates.map(date => {
      if (date.group_id == window.location.href.slice(-9)) {
        return (
          <td key={date.id} >{date.dateSuggestion}</td>
        )
      }
    })
  }

  makePostableDateObject = (event) => {
    event.preventDefault()
    const groupID = window.location.href.slice(-9)
    const Month = (date) => {
      if (date[5] > 0) {
        return months[date[6]+9]
      } else return months[date[6]-1]
    }
    const Day = (date) => {
      return `${date[8]}${date[9]}`
    }
    const Year = (date) => {
      return `${date[0]}${date[1]}${date[2]}${date[3]}`
    }
    const dateToSend = ({
      "dateSuggestion": `${Month(this.state.startDate)} ${Day(this.state.startDate)}, ${Year(this.state.startDate)} to ${Month(this.state.endDate)} ${Day(this.state.endDate)}, ${Year(this.state.endDate)}`,
      "group_id": groupID
      })
    this.postDate(dateToSend)
  }

    postDate = (date) => {
      let url = apiUrl + "/dates"
      fetch(url, {
        method: 'POST',
        body: JSON.stringify(date),
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
      console.log('form', form)
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
      const row4col1 = () => {
        if (data.get("row4col1") != null) {
        return true
        } else return false
      }
      const row4col2 = () => {
        if (data.get("row4col2") != null) {
        return true
        } else return false
      }
      const row4col3 = () => {
        if (data.get("row4col3") != null) {
        return true
        } else return false
      }
      const row4col4 = () => {
        if (data.get("row4col4") != null) {
        return true
        } else return false
      }
      const row4col5 = () => {
        if (data.get("row4col5") != null) {
        return true
        } else return false
      }
      const row5col1 = () => {
        if (data.get("row5col1") != null) {
        return true
        } else return false
      }
      const row5col2 = () => {
        if (data.get("row5col2") != null) {
        return true
        } else return false
      }
      const row5col3 = () => {
        if (data.get("row5col3") != null) {
        return true
        } else return false
      }
      const row5col4 = () => {
        if (data.get("row5col4") != null) {
        return true
        } else return false
      }
      const row5col5 = () => {
        if (data.get("row5col5") != null) {
        return true
        } else return false
      }
      const row6col1 = () => {
        if (data.get("row5col1") != null) {
        return true
        } else return false
      }
      const row6col2 = () => {
        if (data.get("row6col2") != null) {
        return true
        } else return false
      }
      const row6col3 = () => {
        if (data.get("row6col3") != null) {
        return true
        } else return false
      }
      const row6col4 = () => {
        if (data.get("row6col4") != null) {
        return true
        } else return false
      }
      const row6col5 = () => {
        if (data.get("row6col5") != null) {
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
        "row3col5": row3col5(),
        "row4col1": row4col1(),
        "row4col2": row4col2(),
        "row4col3": row4col3(),
        "row4col4": row4col4(),
        "row4col5": row4col5(),
        "row5col1": row5col1(),
        "row5col2": row5col2(),
        "row5col3": row5col3(),
        "row5col4": row5col4(),
        "row5col5": row5col5(),
        "row6col1": row6col1(),
        "row6col2": row6col2(),
        "row6col3": row6col3(),
        "row6col4": row6col4(),
        "row6col5": row6col5()
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
  
  handleInputStartDate = (e) => {
    this.setState({startDate: e.target.value});
  }
  
  handleInputEndDate = (e) => {
    this.setState({endDate: e.target.value});
  }
  
  handleBoxChange = (e) => {
    console.log(e.target)
  }

  render() {
    return (

      <div className="dates">
        <h2>Dates:</h2>

        <form className="submissionForm" onSubmit={this.makePostableDateObject}>
          <div className="inputContainer">
            <label>Suggest Dates: </label>
            <input name="dateStart" type="date" onInput={this.handleInputStartDate}></input>
            <p>to</p>
            <input name="dateEnd" type="date" onInput={this.handleInputEndDate}></input>
          </div>
          <input type="submit"/>
        </form>
        <form className="radioForm" onSubmit={this.onSubmitRadioForm}>
          <p>Select your preferred dates:</p>
          <table>
            <tbody>
              <tr>
                <th >People</th>
                {this.populateDates()}
              </tr>
              {this.populateUserNames(window.location.href.slice(-9))}
              {this.addFinalRow()}
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
