import React, { Component } from 'react';
import './App.css';
import MovieList from './movieList'

class App extends Component {
  render() {
  
      const title = 'Movies 1989'
    return (
      <div className="App">
        <header>
          <h1>{title}</h1>
          <MovieList />
        </header>
      </div>
    );
  }
}

export default App;
