import React from 'react'; //Imports react capabilities
import './App.css'; //Links the app.css file, which will be our main stylesheet file, to our code
import Header from './Components/Header'; //Imports Header component from Header.js file
import Body from './Components/Body'; //Imports Body component from Body.js file

//Arrow function to be called in index.js to be rendered to the dom
const App = () => {
  return (
    <div className="App">
      {/*We make a seperate file for each component and call the functions here*/}
      <Header /> {/*Calling the Header component*/}
      <Body /> {/*Calling the Body component*/}
    </div>
  );
}

export default App; //Exports to be able to be imported later
