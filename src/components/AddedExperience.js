import React from 'react'; 

const AddedExperience = (props) => {

    const { allExperience } = props;

    return (
        <ul>
            {allExperience.map((experience) => {
                return (
                    <div key={experience.id}>
                        <li key={experience.id + '_company'}>{experience.company.text}</li>
                        <li key={experience.id + '_position'}>{experience.position.text}</li>
                        <li key={experience.id + '_dateFrom'}>{experience.dateFrom.text}</li>
                        <li key={experience.id + '_dateTo'}>{experience.dateTo.text}</li>
                        <li key={experience.id + '_tasks'}>{experience.tasks.text}</li>
                    </div>
                )
            })}
        </ul>
    )
}

export default AddedExperience;