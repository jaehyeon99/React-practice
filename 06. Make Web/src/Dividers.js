import React from 'react'
import {Divider, Header, Icon} from 'semantic-ui-react';

class Dividers extends  React.Component{
  constructor(props){
    super(props);
    
    this.state ={
      comment : "댓글을 달아주세요!",
      contact: "Contact Me",
      name:"commenting"
    }
  }


    render(){
        return(
            <Divider horizontal>
            <Header as='h4'>
              <Icon name ={this.state.name} />
              {this.state.comment}
            </Header>
          </Divider>
        )
    }
}

export default Dividers;