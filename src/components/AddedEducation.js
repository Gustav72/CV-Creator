import React from 'react'; 

const AddedEducation = (props) => {

    const { allEducation } = props;

    return (
        <ul>
            {allEducation.map((education) => {
                return (
                    <div key={education.id}>
                        <li key={education.id + '_institution'}>{education.institution}</li>
                        <li key={education.id + '_fieldOfFocus'}>{education.fieldOfFocus}</li>
                        <li key={education.id + '_dateFrom'}>{education.dateFrom}</li>
                        <li key={education.id + '_dateTo'}>{education.dateTo}</li>
                    </div>
                )
            })}
        </ul>
    )
}

export default AddedEducation;