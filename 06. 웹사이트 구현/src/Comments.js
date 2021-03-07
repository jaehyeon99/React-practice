import React from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'




function Singlecomment(detail) {
  return(
    <Comment>
    <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
    <Comment.Content>
      <Comment.Author as='a'>익명</Comment.Author>
      <Comment.Metadata>
        <div></div>
      </Comment.Metadata>
      <Comment.Text>now</Comment.Text>
      <Comment.Actions>
        <Comment.Action>Reply</Comment.Action>
      </Comment.Actions>
    </Comment.Content>
  </Comment>
  )

} 

class Comments extends React.Component{





  constructor(){
    super()
    this.state ={
      inputContent: "댓글을 입력하세요",
      commentLists: [],
    }
  }



    render(){
      console.log(this.state.commentLists)
        return(<Comment.Group style = {{marginLeft: "600px"}}>
            <Header as='h3' dividing>
              Comments
            </Header>  
            {this.state.commentLists.map(comments => <Singlecomment content ={comments}/>)}
                     
            <Form reply>
              <Form.TextArea placeholder ={this.state.inputContent} 
              onChange ={(e) => this.setState({inputContent:e.target.value})}/>
              
              
              <Button content='Add Reply' labelPosition='left' icon='edit' primary
              onClick ={() => 
              this.setState( (prevState) =>  {
                return{
                  commentLists :[...prevState.commentLists, this.state.inputContent]}})} />
            </Form>
            </Comment.Group>
            )
    }
}

export default Comments;
