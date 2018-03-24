import React, { Component } from 'react';

const apiUrl = "https://travelsquadback.herokuapp.com/api"
let objectToSend;

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

  }

  getId = (url) => {
    var arrayOfStrings = url.split("/")
    console.log(arrayOfStrings)
    return arrayOfStrings[4].slice(-13, -5)
  }

  onSubmit = (event) => {
    console.log('submitted')
    event.preventDefault()
    Promise.all([
      this.submitBnb(event),
    ]).then(results => {
    console.log("r", results)
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
    .then(res => {console.log('responsebnb', res); return res})
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
    console.log('objtosend', objectToSend);
    return objectToSend
      })
    .then(result => {
      console.log("h", result)
      this.postBnb(result)})
    .catch(error => console.error('Error:', error))
    .then(response => {console.log('Success:', this.state); return response})

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

  render() {
    return (

      <div className="lodging">
        <h2>Lodging</h2>
        <form onSubmit={this.onSubmit}>
          <label>Insert link to lodging here</label>
          <input type="text" name="bnbUrl"></input>
          <input type="submit" value="Submit"></input>
        </form>
        <ul>
          <h2>{this.state.bnb1Title}</h2>
          <img className="bnbimg" src={this.state.bnb1ImageSrc}></img>
        </ul>
      </div>
    )
  }

}

export default Lodging;
