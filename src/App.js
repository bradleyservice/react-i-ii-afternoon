import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import DisplayBox from './components/DisplayBox'
// import Info from './components/Info'
import data from '../src/react-i-ii-afternoon/data'

class App extends Component {
  constructor(){
    super();
    this.state = {
      people: data,
      currentIndex: 0
    }
  }
  
  handleAddIndex(){
    let {currentIndex} = this.state
    if(currentIndex < 24){
      this.setState({currentIndex: currentIndex + 1})
    }
  }

  handleSubIndex(){
    let {currentIndex} = this.state
    if(currentIndex > 0){
      this.setState({currentIndex: currentIndex - 1})
    } 
  }
  
  
  render(){
    const {people, currentIndex} = this.state;
    return (
      <div className="App">
        <header className='header'>
          <p className='home-link'>Home</p>
        </header>
        <div className='display-box'>
          <DisplayBox people={people} obj={currentIndex}/>
        </div>
        <div className='display-buttons'>
          <button className='page-button' onClick={e => this.handleSubIndex(e)}>{'< Previous'}</button>
          <div className='middle-container'>
            <button className='middle-button'>Edit</button>
            <button className='middle-button'>Delete</button>
            <button className='middle-button'>New</button>
          </div>
          <button className='page-button' onClick={e => this.handleAddIndex(e)}>{'Next >'}</button>
        </div>
      </div>
    );
  }
}

export default App;
