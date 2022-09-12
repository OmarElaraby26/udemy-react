import React from 'react';

import '../css/components/courseTabs.css';

function CourseTabs() {
    return (
        <div className='course-tabs--container'>
            <button className='course-tabs--button' href="#overview">
                <span>Overview</span>
            </button>
            <button className='course-tabs--button' href="#curriculum">
                <span>Curriculum</span>
            </button>
            <button className='course-tabs--button' href="#instructor">
                <span>Instructor</span>
            </button>
            <button className='course-tabs--button' href="#review">
                <span>Reviews</span>
            </button>
        </div>
    );
}

export default CourseTabs;
