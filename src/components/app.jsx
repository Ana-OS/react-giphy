import React, { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './search_bar.jsx'
import Gif from './gif.jsx'
import GifList from './gifs_list.jsx'
  // component , render and props are built in React
class App extends Component {
    constructor(props) {
      super(props);
      // states é tudo o que é passivel de mudar
      this.state = {
        gifs: [],
        selectedGifId: "2qFAkEKypfbu0Sgw0d"
      }
      // this.search("homer thinking")
    }

    search = (query) => {
      giphy("B0AnJ5suZRu9SI9HN1xuOGqqbrz4hWLN").search({
        q: query,
        limit: 3
      }, (err, res) => {
        // passamos para o empty array gifs que definimos no constructor o resultado dado pela search -data
          this.setState({
            gifs: res.data
          })
      });
    }

  render(){  // este render vai fazer ponte com reactDOM.render de index
    // const gifs = [
    //   {id: "2qFAkEKypfbu0Sgw0d"},
    //   {id: "Icv8n1Y8gnPigLEBgk"}
    // ];

    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search}/>
            <div className="selected-gif">
              <Gif id={this.state.selectedGifId}/>
            </div>
        </div>
        <div className="rigth-scene">
          <GifList gifs={this.state.gifs}/>
        </div>
      </div>
    )
  }

}

export default App;
