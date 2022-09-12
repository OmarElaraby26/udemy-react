import React from 'react';

import Overview from '../components/Overview';
import Curriculum from '../components/Curriculum';

import '../css/components/courseMain.css';


function CourseMain() {
    return (
        <main className='course-main-container'>
            <Overview />
            <Curriculum />
        </main>
    );
}

export default CourseMain;
