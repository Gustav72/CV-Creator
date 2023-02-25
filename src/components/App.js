import React, { Component } from 'react';
import GeneralInfo from './GeneralInfo';
import Experience from './Experience';
import Education from './Education';

class App extends Component {

  render() { 

    return (
          <div id='container'>
              <h1 className="no-print">React CV Creator</h1>
                <div id="components" className="no-print">
                  <GeneralInfo />
                  <Experience />
                  <Education />
                  <button id="button"  className="no-print" onClick={() => {window.print()}}>Print to PDF</button>
                </div>
          </div>
    );
  }
}
export default App;