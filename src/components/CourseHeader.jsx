import React from 'react';

import CourseHeaderContent from './CourseHeaderContent';
import Purchase from './Purchase';

import { getLastPathName, getCourseData } from '../helperFunctions.js';

import '../css/components/courseHeader.css'

function CourseHeader(props) {
    const [thumbnail, setThumbnail] = React.useState("");
    const [video, setVideo] = React.useState("");
    React.useEffect(() => {
        (async () => {
            const courseId = getLastPathName();
            const data = await getCourseData(courseId);
            setThumbnail(data['Image']);
            setVideo(data['video']);
        })();
    }, []);

    return (
        <div className="course-header">
            <CourseHeaderContent />
            <div className='course-side-bar'>
                <div className='course-preview'>
                    <video controls controlsList="nodownload" poster={thumbnail}>
                        <source src={video} />
                    </video>
                </div>
                <Purchase />
            </div>
        </div>
    );
}

export default CourseHeader;