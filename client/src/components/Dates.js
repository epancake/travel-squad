import React, { Component } from 'react';

const apiUrl = "https://travelsquadback.herokuapp.com/api"
let numOfDates = 0

class Dates extends Component {
  constructor(props) {
    super(props)
  }

  getUserLines(id){
      return this.props.users.map(user => {
        if (user.group_id == id) {
          return (
            <tr key={user.id} className="person">
              <td>{user.fname + " " + user.lname}</td>
              {this.getNum()}
            </tr>
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
    const data = new FormData(form);
    const dateToSend = ({
      "dateSuggestion": data.get("dateSuggestion"),
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
    
    getNum = () => {
      return this.props.dates.map(date => {
        if (date.group_id == window.location.href.slice(-9)) {
          numOfDates ++
          return (
            <td key={Math.random()}><input type="radio" id="dateChoice1" name="choice1" value=""/></td>
          )
        }
      })
    }

  render() {
    return (

      <div className="dates">
        <h2>Dates:</h2>
        
        <form onSubmit={this.submitDates}>
          <label>Suggest Dates: </label>
          <input name="dateSuggestion" type="text"></input>
          <input type="submit"/>
        </form> 
        
        <p>Please select your preferred dates:</p>
        <form>
        <table>
          <tbody>
            <tr>
              <th >People</th>
              {this.suggestedDates()}
            </tr> 
            {this.getUserLines(window.location.href.slice(-9))}
          </tbody>
        </table>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <pre id="log">
      </pre>
      </div>
    )
  }

}

export default Dates;
