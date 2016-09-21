import React, { Component } from 'react';
import { render} from 'react-dom';
import _ from 'lodash';
import { Form } from './form.jsx';
import { Data } from './data.jsx';
import { Todo } from './todo.jsx';
import { CreateTodo } from './create-todo.jsx';



const todos = [
{
   task:'learn react',
   isCompleted: false
 },
 {
   task: 'write react code',
   isCompleted: true
 }

];


class HelloWorld extends Component {

  constructor(){
      super();
      this.state = { data: [],
                     todos
                   };


    //this.handleCommentChange = this.handleCommentChange.bind(this);

  }

  handleCommentSubmit = (name) => {
//console.log(this.state.data);
     let comments = this.state.data;
      this.setState({data: comments.concat([name.comment])});

  }

    render = () => {
        return (
            <div>

              {/*  <Form
even={true}/>*/}
                 <CreateTodo createTask={this.createTask.bind(this)}/>
              {/* <Data onCommentSubmit={this.handleCommentSubmit} />
                {this.state.data.map((elem) => <p>{elem}</p>)}*/}
                <Todo
                  todos={this.state.todos}
                  toggleTask={this.toggleTask.bind(this)}
                  saveTask={this.saveTask.bind(this)}
                  deleteTask={this.deleteTask.bind(this)}
                  />

            </div>
        );
    }

    toggleTask(task){

      const foundTodo = _.find(this.state.todos, todo => todo.task === task);
      foundTodo.isCompleted = !foundTodo.isCompleted;
      this.setState({todos: this.state.todos});
    }



    createTask(task){
      this.state.todos.push({
        task,
        isCompleted: false
      });
      this.setState({todos: this.state.todos });
    }

    saveTask(oldTask, newTask){
     const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
     foundTodo.task =newTask;
     this.setState({todos:this.state.todos});

    }

    deleteTask(TaskToDelete){
      _.remove(this.state.todos, todo => todo.task === TaskToDelete);
      this.setState({todos: this.state.todos});

    }

}



const app = document.getElementById('app');
render(<HelloWorld/>, app);
