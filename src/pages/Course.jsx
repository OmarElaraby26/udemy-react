import React from 'react';

import CourseHeader from '../components/CourseHeader';
import CourseTabs from '../components/CourseTabs';
import CourseMain from '../components/CourseMain';
import Purchase from '../components/Purchase';


function Course() {
    return (
        <React.Fragment>
            <CourseHeader />
            <CourseTabs />
            <CourseMain />
        </React.Fragment>
    );
}

export default Course;
