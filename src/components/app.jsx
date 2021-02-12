import React, { Component } from 'react';
import SearchBar from './search_bar.jsx'
import Gif from './gif.jsx'
  // component , render and props are built in React
class App extends Component {
  render(){  // este render vai fazer ponte com reactDOM.render de index
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
            <div className="selected-gif">
              <Gif />
            </div>
        </div>
        <div className="rigth-scene"></div>
      </div>
    )
  }

}

export default App;
