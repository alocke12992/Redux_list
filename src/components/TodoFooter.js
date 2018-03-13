import React from 'react';
import { Footer } from 'react-materialize'
import FilterLink from './FilterLink'

const TodoFooter = () => (
  <Footer
    links={
      <ul>
        <li><FilterLink>All</FilterLink></li>
        <li><FilterLink>Completed</FilterLink></li>
        <li><FilterLink>Active</FilterLink></li>
      </ul>
    }
  >
    <h5 className="white-text">My Stuff</h5>
  </Footer>
    
)

export default TodoFooter; 