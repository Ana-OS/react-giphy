import React, { Component } from 'react'

class Gif extends Component {
  render() {
    const src = "https://media2.giphy.com/media/2qFAkEKypfbu0Sgw0d/giphy.gif?cid=ecf05e4780185a8229cb65e80f78fae7ea0487474e90a167&rid=giphy.gif";

    return (
      <img src={src} alt="" className="gif"/>
    )
  }

}

export default Gif;
