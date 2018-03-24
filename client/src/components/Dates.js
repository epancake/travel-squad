import React, { Component } from 'react';

const apiUrl = "https://travelsquadback.herokuapp.com"

class Dates extends Component {
  constructor(props) {
    super(props)
  }

  getUserLines(id){
    console.log("hidates", this.props)
      return this.props.users.map(user => {
        if (user.group_id == id) {
          return (
            <tr key={user.id} className="person">
              <td>{user.fname + " " + user.lname}</td>
              <td><input type="radio" id="dateChoice1" name="contact" value=""/></td>
              <td><input type="radio" id="dateChoice2" name="contact" value=""/></td>
              <td><input type="radio" id="dateChoice3" name="contact" value=""/></td>
            </tr>
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
      .catch(error => console.error('Error:', error))
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
              <th className="gridcol2">People</th>
              <th className="gridcol2">April 9-21</th>
              <th className="gridcol3">May 1-10</th>
              <th className="gridcol4">May 19-31</th>
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
