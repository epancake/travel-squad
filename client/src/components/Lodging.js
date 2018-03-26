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
      bnb1ImageSrc: ""
    }

  }

  componentDidMount() {
    this.forceUpdate()
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
      .catch(error => console.error('Error:', error))
  }
  
  listBnbs = () => {
    return this.props.airbnbs.map(bnb => {
      if (bnb.group_id == window.location.href.slice(-9)) {
        numOfBnbs ++
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
  
  getUserLines = () => {
      return this.props.users.map(user => {
        if (user.group_id == window.location.href.slice(-9)) {
          return (
            <tr key={user.id} className="person">
              <td>{user.fname + " " + user.lname}</td>
              {this.getNum()}
            </tr>
          )
        }
      })
    }
    
  getNum = () => {
    return this.props.airbnbs.map(bnb => {
      if (bnb.group_id == window.location.href.slice(-9)) {
        numOfBnbs ++
        return (
          <td className="radiotd" key={numOfBnbs}>
            <div className="flexDiv">
              <input type="radio" id="dateChoice1" className="radio" name="choice1" value=""/>
            </div>
          </td>
        )
      }
    })
  }
    

  render() {
    return (

      <div className="lodging">
        <h2>Lodging</h2>
        <form className="submissionForm" onSubmit={this.onSubmit}>
          <div className="inputContainer">
            <label>Insert link to lodging here</label>
            <input className="linkField" type="text" name="bnbUrl"></input>
          </div>
          <input type="submit" value="Submit"></input>
        </form>    
        <form className="radioForm">
        <p>Select your preferred dates:</p>    
        <table>
          <tbody>
            <tr>
              <th >People</th>
              {this.listBnbs()}
            </tr> 
            {this.getUserLines()}
          </tbody>
        </table>
        </form>
      </div>
    )
  }

}

export default Lodging;
