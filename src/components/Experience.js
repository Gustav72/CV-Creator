import React, {Component} from 'react';
import uniqid from 'uniqid'
import AddedExperience from './AddedExperience'

export default class Experience extends Component {

    constructor() {
        super();

        this.state = {
            experience: {
                id: uniqid(),
                company: '',
                position: '',
                dateFrom: '',
                dateTo: '',
                tasks: ''
            },
            allExperience: [],
        };
    }

    handleCompanyChange = event => {
        this.setState({
            experience: {
                company: event.target.value,
                id: this.state.experience.id
            }
        })
    }

    handlePositionChange = event => {
        this.setState({
            experience: {
                position: event.target.value,
                id: this.state.experience.id
            }
        })
    }

    handleDateFromChange = event => {
        this.setState({
            experience: {
                dateFrom: event.target.value,
                id: this.state.experience.id
            }
        })
    }
    handleDateToChange = event => {
        this.setState({
            experience: {
                dateTo: event.target.value,
                id: this.state.experience.id
            }
        })
    }
    handleTasksChange = event => {
        this.setState({
            experience: {
                tasks: event.target.value,
                id: this.state.experience.id
            }
        })
    }

    onSubmitExperience = event => {
        event.preventDefault();
        this.setState({
            allExperience: this.state.allExperience.concat(this.state.experience),
            experience: {
                id: uniqid(),
                company: '',
                position: '',
                dateFrom: '',
                dateTo: '',
                tasks: ''
            },
        })
    }

    render() {
        return (
            <div className="experience">
                <h3>Experience</h3>
                <AddedExperience allExperience={this.state.allExperience}/>
                <form onSubmit={this.onSubmitExperience}>
                    <div>
                        <div>
                            <label>Company:</label>
                            <input type="text" value={this.state.company} onChange={this.handleCompanyChange}></input>
                        </div>
                        <div>
                            <label>Position:</label>
                            <input type="text" value={this.state.position} onChange={this.handlePositionChange}></input>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label>From:</label>
                            <input className="date" type="date" value={this.state.dateFrom} onChange={this.handleDateFromChange}></input>
                        </div>
                        <div>
                            <label>To:</label>
                            <input className="date" type="date" value={this.state.dateTo} onChange={this.handleDateToChange}></input>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label>Tasks:</label>
                            <textarea type="text" value={this.state.tasks} onChange={this.handleTasksChange}></textarea>
                        </div>
                    </div>
                    <button type="submit">Save</button>
                </form>
            </div>
        )
    }
}