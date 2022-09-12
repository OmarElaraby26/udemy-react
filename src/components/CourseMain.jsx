import React from 'react';

import Overview from '../components/Overview';
import Curriculum from '../components/Curriculum';
import Instructor from '../components/Instructor';
import ReviewContainer from '../components/ReviewContainer';

import '../css/components/courseMain.css';



function CourseMain() {
    return (
        <main className='course-main-container'>
            <Overview />
            <Curriculum />
            <Instructor />
            <ReviewContainer />
        </main>
    );
}

export default CourseMain;
