import React from 'react';
import { connect } from 'react-redux';
import { incId } from '../actions/nextId';

class TodoForm extends React.Component
{
  state = { name: '' }

  handleChange = ( e ) =>
  {
    this.setState( { name: e.target.value } )
  }

  handleSubmit = ( e ) =>
  {
    e.preventDefault();
    const { name } = this.state;
    const { dispatch, id } = this.props;
    const todo = { name, id, complete: false }
    dispatch( { type: 'ADD_TODO', todo } )
    dispatch( 'INC_ID' )
    this.setState( { name: '' } )
  }

  render()
  {
    const { name } = this.state;

    return (
      <div className="row">
        <h3>Add A Todo</h3>
        <form
          onSubmit={ this.handleSubmit }
          className="col s6  offset-s3"
        >

          <input
            value={ name }
            onChange={ this.handleChange }
            required
          />
        </form>
      </div>
    )
  }
}

const mapStateToProps = ( state ) =>
{
  return { id: state.nextId }
}

export default connect( mapStateToProps )( TodoForm );