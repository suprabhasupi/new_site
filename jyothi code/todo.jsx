import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import { render} from 'react-dom';
import { TodoListHeader } from './todo-list-header.jsx';
import { TodoListItem } from './todo-list-item.jsx';


export  class Todo extends Component {

  constructor(props) {
       super(props);

       this.state = {
          data: 'your first comment',

       };

       this.updateState = this.updateState.bind(this);

    }

    updateState(e) {
       this.setState({data: e.target.value});
    }

   renderItems(){
      const props = _.omit(this.props,'todos');
      return _.map(this.props.todos, (todo, index) =><TodoListItem key={index} {...todo} {...props} />);
    }

  render = () => {
     //console.log(this.props.todos);
   return (
    <div>
         <h1>React Todo App</h1>
         <input type = "text" value = {this.state.data}
                onChange = {this.updateState} />
             <h4>{this.state.data}</h4>

            <table>
            <TodoListHeader/>
            <tbody>
              {this.renderItems()}
            </tbody>
            </table>


    </div>
   );
  }
}
