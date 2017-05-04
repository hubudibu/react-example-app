import { connect } from 'react-redux';
import { toggleTodo } from '../../actions';
import TodoList from '../../components/TodoList';

const mapStateToProps = (state, ownProps) => {
  return {
    todos: state
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  };
};

const ListTodos = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default ListTodos;
