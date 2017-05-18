import { connect } from 'react-redux';
import TodoList from '../../components/TodoList';
import {
  firebaseConnect,
  dataToJS
} from 'react-redux-firebase';
import { compose } from 'redux';

export default compose(
  firebaseConnect(['/todos']),
  connect(
    ({firebase}) => ({ todos: dataToJS(firebase, '/todos') })
  )
)(TodoList)
