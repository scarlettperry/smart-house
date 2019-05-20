import React , {Component} from 'react';
import './App.css';
import HouseContainer from './HouseContainer.js'

// function App() {
//   return (
//     <div className="App">
//       Hello
//     </div>
//   );
// }

class App extends Component {
  constructor(){
    super()
    this.state = {
      houses: []
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

  render(){
    console.log(this.state)
    return(
      <div>
        <HouseContainer
          houses={this.state.houses}
        />
      </div>
    )
  }



}

export default App;



//select dropdown
  //on change - switch from locked true --> false

//import house form
  //create new house 
  //make POST request
  //update house array in state

