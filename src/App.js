import React from 'react';
import './App.css';

function App() {
  return (
    <div>
        //creating component with state isLightOn: true
        class App extends React.Component {
        constructor(props) {
        super(props);
        this.state = {
        isLightOn: true
    };
        //binding function to component
        this.handleClick = this.handleClick.bind(this);
    }
        //function sets state to opposite of current state
        handleClick() {
        this.setState({
        isLightOn: !this.state.isLightOn,
    });
    }
        //puts a html button with event onClick that invokes function handleClick and shows AAN or UIT depending on state
        render() {
        return (
        <button
        type="button"
        onClick={this.handleClick}
        >
    {this.state.isLightOn ? 'AAN' : 'UIT'}
        </button>
        );
    }
    }

    </div>
  );
}

export default App;
