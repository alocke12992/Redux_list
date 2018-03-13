import { combineReducers } from 'redux';
import todos from './todos';
import nextId from './nextId'; 
import currentFilter from './currentFilter';
import filterLink from './filterLink'; 
import 'materialize-css/dist/css/materialize.min.css';

const rootReducer = combineReducers ({
  todos, 
  nextId, 
  currentFilter,
  filterLink, 
})

export default rootReducer; 