import React from 'react'; 

const AddedExperience = (props) => {

    const { allExperience } = props;

    return (
        <ul>
            {allExperience.map((experience) => {
                return (
                    <div>
                        <li key={experience.id}>{experience.company}</li>
                        <li key={experience.id}>{experience.position}</li>
                        <li key={experience.id}>{experience.dateFrom}</li>
                        <li key={experience.id}>{experience.dateTo}</li>
                        <li key={experience.id}>{experience.tasks}</li>
                    </div>
                )
            })}
        </ul>
    )
}

export default AddedExperience;