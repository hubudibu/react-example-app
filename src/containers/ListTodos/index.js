import { connect } from 'react-redux';
import TodoList from '../../components/TodoList';

export const mapStateToProps = (state, ownProps) => {
  return {
    todos: state
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
