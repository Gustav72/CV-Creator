import React, { Component } from 'react';
import uniqid from 'uniqid';
import GeneralInfo from './GeneralInfo';
import Experience from './Experience';
import Education from './Education'

class App extends Component {

  render() { 

    return (
      <div>
        <h1>CV Creator</h1>
        <GeneralInfo />
        <Experience />
        <Education />
        <button>Print to PDF</button>
      </div>
    );
  }
}
export default App;