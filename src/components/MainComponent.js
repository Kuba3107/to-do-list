import React from 'react';
import InputAndButton from './InputAndButton';
import List from './List';
import '../css/MainComponent.css';
class MainComponent extends React.Component {
  state = {
    value: '',
    tasks: [],
  };
  inputChange = (e) => {
    this.setState({ value: e.target.value });
  };

  addToStateArray = () => {
    if (this.state.value !== '')
      this.setState({
        tasks: this.state.tasks.concat(this.state.value),
        value: '',
      });
    document.querySelector('input').focus();
  };

  deleteElement = (e) => {
    this.setState({
      tasks: this.state.tasks.filter(
        (item, index) => item !== e.target.parentElement.dataset.key
      ),
    });
  };
  render() {
    return (
      <div className="maincomponent">
        <InputAndButton
          textOnButton={'Dodaj'}
          inputValue={this.state.value}
          inputChange={this.inputChange}
          addToStateArray={this.addToStateArray}
        />
        <List
          tasksStateArray={this.state.tasks}
          textOnButton={'Delete'}
          deleteElement={this.deleteElement}
        />
      </div>
    );
  }
}

export default MainComponent;
