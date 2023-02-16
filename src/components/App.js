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
      <div>
        <h1>React CV Creator</h1>
        <form onSubmit = {this.handleSubmit}>
          <GeneralInfo />
          <Experience />
          <Education />
          <button type='submit'>Print to PDF</button>
        </form>
      </div>
    );
  }
}
export default App;