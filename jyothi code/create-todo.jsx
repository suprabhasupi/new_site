import React, { Component, PropTypes } from 'react';
import { render} from 'react-dom';
import _ from 'lodash';


export  class CreateTodo extends Component {

   constructor(props){
    super(props);
    this.state = {
      error:null
    };
   }

 renderError() {
        if (!this.state.error) { return null; }

        return <div style={{ color: 'red' }}>{this.state.error}</div>;
    }
  render = () => {

   return (

            <form onSubmit={this.handleCreate.bind(this)}>
              <input type="text" placeholder="my task" ref="createInput"/>
              <button>Create</button>
              {this.renderError()}
            </form>

   );
  }

  handleCreate(event){
    event.preventDefault();
  //  console.log(this.props.createTask);
    const createInput = this.refs.createInput;
    const task = createInput.value;
    const validateInput = this.validateInput(task);

    if(validateInput){
       this.state({error: validateInput });
       return;
    }

    this.setState({error: null });
    this.props.createTask(this.refs.createInput.value);
    this.refs.createInput.value = '';
  }

  validateInput(task){
    if(!task){
      return 'Please enter a task.';
    }
    else if(_.find(this.props.todos , todo => task.todo ===task)){
      return 'Task already exists.';
    }else{
      return null;
    }
    }


}
