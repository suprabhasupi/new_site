import React, { Component, PropTypes } from 'react';
import { render} from 'react-dom';


export  class TodoListHeader extends Component {



  render = () => {

   return (
<div>
            <thead>
                <tr>
                  <th>Task</th>
                  <th>Action </th>
                </tr>
            </thead>
            </div>


   );
  }
}
