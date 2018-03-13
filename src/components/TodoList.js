import React from 'react';
import { connect } from 'react-redux'
import { Input } from 'react-materialize'

const TodoList = ({ todos }) => (
  <ul>
    {todos.map((t, i) => {
      return (
        <li key={i}>
          <Input name='group1' type='checkbox' value='green' label={t} className='filled-in' defaultChecked='checked' />
        </li>
      )
    })
    }
  </ul>
)

const mapStateToProps = (state) => {
  return { todos: state.todos }
}

export default connect(mapStateToProps)(TodoList)