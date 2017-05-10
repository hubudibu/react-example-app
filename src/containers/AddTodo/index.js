import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions';
import TodoInput from '../../components/TodoInput';


class AddTodo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  handleChange(text) {
    this.setState({
      value: text
    });
  }

  handleSubmit() {
    this.props.onAddTodo(this.state.value);
  }

  render() {
    return <TodoInput
              onChange={value => this.handleChange(value)}
              value={this.state.value}
              onSubmit={() => this.handleSubmit()}
              />;
  }
}


const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onAddTodo: (text) => {
      dispatch(addTodo(text))
    }
  };
};

const AddTodoWrapped = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTodo);


export default AddTodoWrapped;
