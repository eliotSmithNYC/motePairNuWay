import React, { Component } from 'react';
import AllPhotosContainer from './components/containers/AllPhotosContainer';
import FavoritePhotosContainer from './components/containers/FavoritePhotosContainer';
import SearchContainer from './components/containers/SearchContainer';

//console.log(sampleData);

// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
        <div>
          <SearchContainer/>
          <AllPhotosContainer/>
          <FavoritePhotosContainer/>
        </div>
    );
  }
}

export default App;
