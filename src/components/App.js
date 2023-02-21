import React, { Component } from 'react';
import GeneralInfo from './GeneralInfo';
import Experience from './Experience';
import Education from './Education';

class App extends Component {


  render() { 

    return (
      <div id='container'>
        <h1>React CV Creator</h1>
          <GeneralInfo />
          <button id="add-general-info">Save</button>
          <Experience />
          <Education />
          <button id="add-education">Save</button>
          <button type='submit' id="button">Print to PDF</button>
      </div>
    );
  }
}
export default App;