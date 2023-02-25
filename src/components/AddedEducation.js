import React from 'react';


const AddedEducation = (props) => {

    const { allEducation, deleteEducation } = props;

    const handleDelete = (index) => {
        deleteEducation(index);
    }

    return (
        <div className='added-education-component'>
            {allEducation.map((education, index) => {
                return (
                    <div key={education.id + index}>
                        <div>
                            <div key={education.id + '_company' + index}>
                                {education.institution}
                            </div>
                            <div key={education.id + '_position' + index}>
                                {education.fieldOfFocus}
                            </div>
                        </div>
                            <div key={education.id + '_dateFrom'+ index}>
                                {education.dateFrom + ' to ' + education.dateTo}
                            </div>
                    <button className="no-print" onClick={() => handleDelete(index)}>Delete</button>
                    </div>
                )
            })}
        </div>

    )
}

export default AddedEducation;