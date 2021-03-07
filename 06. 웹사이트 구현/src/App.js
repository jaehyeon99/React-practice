import React from 'react';
import './App.css';
import {Image} from 'semantic-ui-react'
import arin from "./arin.jpg"
import Comment from './Comments'
import Divider from './Dividers'
import Soical from './Social'
import Like from './Like'


class App extends React.Component{


  render(){
    return(
      <>
      <Image src = {arin} alt ="arin" centered size ='medium'/> <br/><br/>
      <Like/><br/>
      <Divider/>
      <Comment/>
      <Soical/>
          
        </>
    )
  }
}

export default App;
