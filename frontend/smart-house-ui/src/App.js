import React , {Component} from 'react';
import './App.css';
import HouseContainer from './HouseContainer.js'
import HouseForm from './HouseForm.js'

class App extends Component {
  constructor(){
    super()
    this.state = {
      houses: [],
      newHouse: ""
    }

  }

  componentDidMount(){
    fetch('http://localhost:3000/houses')
      .then(resp => resp.json())
      .then( data =>
        this.setState({
          houses: data
        })
      )
  }

  handleFormInput = (event) => {
    this.setState({
      newHouse: event.target.value
    })
  }

  handleSubmit = (event) =>{
    event.preventDefault()
    fetch("http://localhost:3000/houses",{
      method: "POST",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify({
        "address": this.state.newHouse
      })
    })
      .then(resp => resp.json())
      .then(data => this.setState({
        houses: [...this.state.houses, data]
      }))
  }

  render(){
    console.log(this.state)
    return(
      <div>
        <HouseContainer
          houses={this.state.houses}
        />
        <HouseForm
          newhouse={this.state.newHouse}
          handleFormInput={this.handleFormInput}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }



}

export default App;



//select dropdown
  //on change - switch from locked true --> false

//create lock form

