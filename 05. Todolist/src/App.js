import React, { Component } from 'react';
import TodoListTemplate from './Components/TodoListTemplate';
import Form from './Components/Form';
import TodoItemList from './Components/TodoItemList';

class App extends Component {

  id =3;
  state ={
    input: '',
    todos: [
      {id:0, text: '리액트 소개', checked:false},
      {id:1, text: '리액트 소개', checked:true},
      {id:2, text: '리액트 소개', checked:false},
    ]
  }

  handleRemove = (id) => {
    const {todos } =this.state;
    this.setState({
      todos:todos.filter(todo => todo.id !== id)
    });
  }

  handleToggle = (id) => {
    const { todos } = this.state;

   
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index]; // 선택한 객체

    const nextTodos = [...todos]; // 배열을 복사


    nextTodos[index] = { 
      ...selected, 
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    });
  }

  handleChange = (e) => {
    this.setState({
      input:e.target.value
    });
  }
  handleCreate = () => {
    const {input,todos} =this.state;
    this.setState({
      input:'',
      todos:todos.concat({
        id: this.id++,
        text:input,
        checked:false
      })
    });
  }
  handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      this.handleCreate();
    }
  }


  render() {
    const {input,todos} =this.state;
    const{
      handleChange,
      handleCreate,
      handleKeyPress
    } =this;
    return (
      
      // todolisttemplate 의 form 은 form.js를 참조한다. 라는 뜻의 props
      <TodoListTemplate form={(
        <Form
          value ={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
          />
      )}>  
        <TodoItemList todos ={todos} onToggle={this.handleToggle} onRemove = {this.handleRemove}/>
      </TodoListTemplate>
    );
  }
}

export default App;
