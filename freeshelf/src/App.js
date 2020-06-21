import React from 'react';
import Booklist from './componets/Booklist';
import json from './books.json';
import './App.css';

class App extends React.Component {
  render () {
    return (
      <div className='App'>
        ;
        <Booklist />
      </div>
    )
  }
}

export default App
