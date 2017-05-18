import { connect } from 'react-redux';
import TodoList from '../../components/TodoList';

export const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.todos
  };
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

const ListTodos = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default ListTodos;
