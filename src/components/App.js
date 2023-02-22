import React, { Component } from 'react';
import GeneralInfo from './GeneralInfo';
import Experience from './Experience';
import Education from './Education';

class App extends Component {


  render() { 

    return (
      <div id='container'>
        <h1>React CV Creator</h1>
          <div id="components">
            <GeneralInfo />
            <button id="add-general-info">Save</button>
            <Experience />
            <Education />
            <button id="button">Print to PDF</button>
          </div>
      </div>
    );
  }
}
export default App;