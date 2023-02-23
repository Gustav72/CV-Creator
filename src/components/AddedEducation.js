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
                        <button onClick={() => handleDelete(index)}>Delete</button>
                    </div>
                )
            })}
        </div>

        // <ul>
        //     {allEducation.map((education) => {
        //         return (
        //             <div key={education.id}>
        //                 <li key={education.id + '_institution'}>{education.institution}</li>
        //                 <li key={education.id + '_fieldOfFocus'}>{education.fieldOfFocus}</li>
        //                 <li key={education.id + '_dateFrom'}>{education.dateFrom}</li>
        //                 <li key={education.id + '_dateTo'}>{education.dateTo}</li>
        //             </div>
        //         )
        //     })}
        // </ul>
    )
}

export default AddedEducation;