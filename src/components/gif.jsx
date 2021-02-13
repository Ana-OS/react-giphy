import React, { Component } from 'react'

class Gif extends Component {

  handleClick = () => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  }

  render() {

    // se não houver nenhum gif.id return null
    if (!this.props.id){return null}
    // o props.id é devolvido como props por app. É de lá que vem a info de que este componente precisa ""
    const src = `https://media2.giphy.com/media/${this.props.id}/giphy.gif?cid=ecf05e4780185a8229cb65e80f78fae7ea0487474e90a167&rid=giphy.gif`;

    return (
      <img src={src} alt="" className="gif" onClick={this.handleClick} />
    );
  }

}

export default Gif;
