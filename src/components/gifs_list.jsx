import React, {Component} from 'react'
import Gif from './gif.jsx'

const GifList = (props) => { // em vez de escrever props podemos escrever GifList = ({gifs, sleectedGif} e assim abaixo já nao temos de escrever props.gifs podemos simplesmenete fazer gifs.map )

  return (
    //em vez de fazer gifs.map(gif => <Gif id={gif.id} podemos fazer: gifs.map(({id}) => <Gif id={id},... )

    <div className="gif-list">
      {props.gifs.map(gif => <Gif id={gif.id} key={gif.id} selectGif={props.selectGif} />)}
    </div>
  );
};
export default GifList;
