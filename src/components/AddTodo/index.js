import React from 'react';
import './style.css';

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

  handleKeypress(keyCode) {
    if (keyCode === 13) {
      this.props.onSubmit(this.state.value);
      this.setState({
        value: ''
      })
    }
  }

  render() {
    return <input
              className="AddTodo"
              type="text"
              placeholder="Add new todo item..."
              value={this.state.value}
              onChange={event => this.handleChange(event.target.value)}
              onKeyPress={event => this.handleKeypress(event.charCode)}
              />;
  }
}

export default AddTodo;
