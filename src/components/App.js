import React, { Component } from 'react';

import GeneralInfo from './GeneralInfo';
import Experience from './Experience';
import Education from './Education';

class App extends Component {

  handleSubmit = event => {
    event.preventDefault();
  }

  render() { 

    return (
      <div id='container'>
        <h1>React CV Creator</h1>
        <form onSubmit = {this.handleSubmit}>
          <GeneralInfo />
          <button id="add-general-info">Save</button>
          <Experience />
          <button id="add-experience">Save</button>
          <Education />
          <button id="add-education">Save</button>
          <button type='submit' id="button">Print to PDF</button>
        </form>
      </div>
    );
  }
}
export default App;