import React, { Component } from 'react';
import './App.css';
import UserOutput from './components/UserOutput/UserOutput';
import UserInput from './components/UserInput/UserInput';
import ValidationComponent from './components/ValidationComponent/ValidationComponent';
import CharComponent from './components/CharComponent/CharComponent';

class App extends Component {
  state = {
      stringLength: '0',
      string: '',
      chars: []
  }

  stringLengthChangedHandler = (event) => {
    this.setState({ stringLength: event.target.value.length, 
                    string: event.target.value,
                    chars: event.target.value.split('')
                  })
  }

  deleteCharHandler = (charIndex) => {
    // const persons = this.state.persons.slice();
    const chars = [...this.state.chars]
    chars.splice(charIndex, 1);
    this.setState({chars: chars});
  }

  render() {


    let splitMap = null

      splitMap = (
        <div>
          {this.state.chars.map((chars, index) => {
            return <CharComponent char={this.state.chars[index]} click={() => this.deleteCharHandler(index)}/> 
          })}
      </div>
      );

    return (
      <div className="App">
        <UserInput changed={this.stringLengthChangedHandler}/>    
        <UserOutput stringLength={this.state.stringLength}/>
        <ValidationComponent stringLength={this.state.stringLength}/>
        {splitMap}
      </div>
    );
  }
}

export default App;
