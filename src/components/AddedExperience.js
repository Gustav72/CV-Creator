import React from 'react'; 

const AddedExperience = (props) => {

    const { allExperience } = props;

    return (
        <ul>
            {allExperience.map((experience) => {
                return (
                    <div>
                        <li key={experience.company.id}>{experience.company.text}</li>
                        <li key={experience.position.id}>{experience.position.text}</li>
                        <li key={experience.dateFrom.id}>{experience.dateFrom.text}</li>
                        <li key={experience.dateTo.id}>{experience.dateTo.text}</li>
                        <li key={experience.tasks.id}>{experience.tasks.text}</li>
                    </div>
                )
            })}
        </ul>
    )
}

export default AddedExperience;