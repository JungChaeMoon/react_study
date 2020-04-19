import React, {Component} from 'react';
import './App.css'
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Say from "./Say";
import EventPractice from "./EventPractice";
import ValidationSample from "./ValidationSample";
import ScrollBox from "./ScrollBox";
import IterationSample from "./IterationSample";
import LifeCycleSample from "./LifeCycleSample";
import ErrorBoundary from "./ErrorBoundary";

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}


class App extends Component {
  state = {
    color: '#000000'
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    })
  }

  render(){
    console.log('render');

    const style= {
      color: this.props.color
    };

    return (
        <div>
            {this.props.missing.value}
            <h1 style={style} ref={ref => {this.myRef = ref}}>{this.state.number}</h1>
            <p>color: {this.state.color}</p>

            <button onClick={this.handleClick}>랜덤색상</button>
            <ErrorBoundary>

                <LifeCycleSample color={this.state.color}/>

            </ErrorBoundary>
        </div>
    );
  }
}


export default App;
