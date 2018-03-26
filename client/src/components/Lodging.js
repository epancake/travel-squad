import React, { Component } from 'react';

const apiUrl = "https://travelsquadback.herokuapp.com/api"
let objectToSend;
let numOfBnbs = 0;

class Lodging extends Component {

  constructor(props){
    super(props)

    this.state = {
      bnb1Title: "",
      bnb1Url: "",
      bnb1ImageSrc: "",
      buttons: [],
      inputField: "",
    }

  }

  componentDidMount() {
    fetch(apiUrl + "/bnbbuttons")
    .then(res => res.json())
    .then(res => {
    this.setState({
      buttons: res.bnbbuttons
    })
  })
  }

  getId = (url) => {
    var arrayOfStrings = url.split("/")
    return arrayOfStrings[4].slice(-13, -5)
  }

  onSubmit = (event) => {
    event.preventDefault()
    Promise.all([
      this.submitBnb(event),
    ]).then(results => {
    })
  }

  submitBnb = (event) => {
    event.preventDefault()
    const form = event.target;
    const data = new FormData(form);
    const url = data.get("bnbUrl")
    const id = this.getId(url)
    return fetch(apiUrl + "/search/" + id)
    .then(res => res.json())
    .then(res => {
      objectToSend = {
        "bnbTitle": res.title,
        "bnbUrl": url,
        "bnbImageSrc": res.image,
        "group_id": window.location.href.slice(-9)
      };
      this.setState({
        bnb1Title: res.title,
        bnb1Url: url,
        bnb1ImageSrc: res.image
      });
    return objectToSend
      })
    .then(result => {
      this.postBnb(result)})
    .catch(error => console.error('Error:', error))
    .then(response => {console.log('Success:'); return response})

    }
    // post the url, image, and title to groups
    // display the url, image, and title

  postBnb = (bnb) => {
      let url = apiUrl + "/airbnb"
      return fetch(url, {
        method: 'POST',
        body: JSON.stringify(bnb),
        headers: new Headers({
          'Content-Type': 'application/json'
      })
      }).then(res => res.json())
      .then(res => {this.setState({inputField: ""}); return res})
      .then(res => this.props.reFetchData())
      .catch(error => console.error('Error:', error))
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
      numOfBnbs = 0
      return this.props.airbnbs.map(bnb => {
        if (bnb.group_id == window.location.href.slice(-9)) {
          numOfBnbs ++
          let name = `this.state.row${row}col${numOfBnbs}`
          let checkForChecks = this.isItChecked(row, numOfBnbs)
          return (
            <td key={Math.random()} className="radiotd">
            <div className="flexDiv">
              <input type="checkbox" defaultChecked={checkForChecks} name={`row${row}col${numOfBnbs}`} id={`bnbChoice${numOfBnbs}`} value=""/>
            </div>
            </td>
          )
        }
      })
    }


  listBnbs = () => {
    return this.props.airbnbs.map(bnb => {
      if (bnb.group_id == window.location.href.slice(-9)) {
        return (
          <th key={bnb.id} className="bnbCard">
            <div className="bnbTitle">
              <a href={bnb.bnbUrl}>{bnb.bnbTitle}</a>
            </div>
            <div className="flexDiv">
              <a href={bnb.bnbUrl}><img className="bnbimg" src={bnb.bnbImageSrc}/></a>
            </div>
          </th>
        )
      }
    })
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
    let url = apiUrl + "/bnbbuttons"
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(objectToSend),
      headers: new Headers({
        'Content-Type': 'application/json'
    })
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
  }

  handleInputChange = (e) => {
    this.setState({inputField: e.target.value});
  }


  render() {
    return (

      <div className="lodging">
        <h2>Lodging:</h2>
        <form className="submissionForm" onSubmit={this.onSubmit}>
          <div className="inputContainer">
            <label>Insert link to lodging here:</label>
            <input value={this.state.inputField} className="linkField" type="text" name="bnbUrl" onChange={this.handleInputChange}></input>
          </div>
          <input type="submit" value="Submit"></input>
        </form>
        <form className="radioForm" onSubmit={this.onSubmitRadioForm}>
        <p>Select your preferred accomodation:</p>
        <table>
          <tbody>
            <tr>
              <th>People</th>
              {this.listBnbs()}
            </tr>
            {this.getUserLines(window.location.href.slice(-9))}
            {this.finalRow()}
          </tbody>
        </table>
        <input type="submit" value="Save Table"></input>
        </form>
      </div>
    )
  }

}

export default Lodging;
