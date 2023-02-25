import React, { Component } from 'react';
import uniqid from 'uniqid';
import AddedExperience from './AddedExperience';

export default class Experience extends Component {

    constructor(props) {
    super(props);

    this.state = {
      experience: {
        id: uniqid(),
        company: {
          text: '',
        },
        position: {
          text: '',
        },
        dateFrom: {
          text: '',
        },
        dateTo: {
          text: '',
        },
        tasks: {
          text: '',
        },
      },
      allExperience: [],
    };
  }

  handleCompanyChange = (event) => {
    this.setState((prevState) => ({
      experience: {
        ...prevState.experience,
        company: {
          text: event.target.value,
        },
      },
    }));
  };

  handlePositionChange = (event) => {
    this.setState((prevState) => ({
      experience: {
        ...prevState.experience,
        position: {
          text: event.target.value,
        },
      },
    }));
  };

  handleDateFromChange = (event) => {
    this.setState((prevState) => ({
      experience: {
        ...prevState.experience,
        dateFrom: {
          text: event.target.value,
        },
      },
    }));
  };

  handleDateToChange = (event) => {
    this.setState((prevState) => ({
      experience: {
        ...prevState.experience,
        dateTo: {
          text: event.target.value,
        },
      },
    }));
  };

  handleTasksChange = (event) => {
    this.setState((prevState) => ({
      experience: {
        ...prevState.experience,
        tasks: {
          text: event.target.value,
        },
      },
    }));
  };



  onSubmitExperience = (event) => {
    event.preventDefault();
    this.setState((prevState) => ({
      allExperience: [...prevState.allExperience, prevState.experience],
      experience: {
        id: '',
        company: {
          text: '',
        },
        position: {
          text: '',
        },
        dateFrom: {
          text: '',
        },
        dateTo: {
          text: '',
        },
        tasks: {
          text: '',
        },
      },
    }));
  };

  deleteExperience = (index) => {
    this.setState((prevState) => ({
      allExperience: prevState.allExperience.filter((experience, i) => i !== index),
    }));
  };

    render() {
        return (
            <div className="experience" id="">
                <h3>Experience</h3>
                <div id="added-experience">
                    <AddedExperience allExperience={this.state.allExperience} deleteExperience={this.deleteExperience}/>
                </div>
                <form onSubmit={this.onSubmitExperience} className="no-print">
                    <div>
                        <div>
                            <label>Company:</label>
                            <input type="text" value={this.state.experience.company.text} onChange={this.handleCompanyChange}></input>
                        </div>
                        <div>
                            <label>Position:</label>
                            <input type="text" value={this.state.experience.position.text} onChange={this.handlePositionChange}></input>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label>From:</label>
                            <input className="date" type="date" value={this.state.experience.dateFrom.text} onChange={this.handleDateFromChange}></input>
                        </div>
                        <div>
                            <label>To:</label>
                            <input className="date" type="date" value={this.state.experience.dateTo.text} onChange={this.handleDateToChange}></input>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label>Tasks:</label>
                            <textarea type="text" value={this.state.experience.tasks.text} onChange={this.handleTasksChange}></textarea>
                        </div>
                    </div>
                    <button className="no-print" id="add-experience" type="submit">Save</button>
                </form>
            </div>
        )
    }
}