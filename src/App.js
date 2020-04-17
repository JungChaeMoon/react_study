import React from 'react';
import './App.css'
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Say from "./Say";
import EventPractice from "./EventPractice";
import ValidationSample from "./ValidationSample";
import ScrollBox from "./ScrollBox";

const App = () => {

  const scrollBox = React.createRef();

  return(
      <div>
        <ScrollBox ref = {scrollBox}/>
      </div>
  )
};

export default App;
