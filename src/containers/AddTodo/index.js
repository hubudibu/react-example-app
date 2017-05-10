import { connect } from 'react-redux';
import { addTodo } from '../../actions';
import TodoInput from '../../components/TodoInput';

export const mapStateToProps = (state, ownProps) => {
  return {};
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: (text) => {
      dispatch(addTodo(text))
    }
  };
};

const AddTodo = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoInput);

export default AddTodo;
