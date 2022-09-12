import React from 'react';

import '../css/components/courseHeaderContent.css'

import { getLastPathName, getCourseData } from '../helperFunctions.js';

function CourseHeaderContent(props) {
    const [state, setState] = React.useState({
        "id": 0,
        "authors": "",
        "Description": "",
        "Image": "",
        "title": "",
        "description": "",
        "link": "#",
        "img": "",
        "rating": 0,
        "enrollments": 0,
        "totalReviews": 0,
        "price": 0,
        "oldPrice": 0,
        "lastUpdated": "",
        "lang": "",
        "CC": "",
        "instructors": []
    });

    React.useEffect(() => {
        (async () => {
            const courseId = getLastPathName();
            const data = await getCourseData(courseId);
            console.log('data: ', data);
            setState(data);
        })();
    }, []);



    return (
        <div className='course-content--container'>
            <h1 className='course-content--title'>{state.title}</h1>
            <div className='course-content--description'>{state.description}</div>
            <div className='course-content--rating'>
                <span>{state.rating} {[...Array(Math.max(1, Math.round(state.rating)))].map(_ => <i className="fa-solid fa-star"></i>)}</span>
                {"  "}
                <span><a href="#">({state.totalReviews} ratings)</a></span>
                {"  "}
                <span>{state.enrollments} students</span>
            </div>
            <div className='course-content--instructor-links'>
                <span>Created by: </span>
                {state.instructors.map((instructor, index) => <a key={instructor.name} href={`/#instructor-${index + 1}`}>{instructor.name + (index + 1 < state.instructors.length ? ", " : "")}</a>)}
            </div>
            <div className='course-content--meta'>
                <span><i class="fa-solid fa-circle-exclamation"></i> Last updated {state.lastUpdated}</span>
                <span><i className="fa-solid fa-globe"></i> {state.lang}</span>
                <span><i class="fa-regular fa-closed-captioning"></i> {state.CC}</span>
            </div>
        </div >
    );
}

export default CourseHeaderContent;

// function join(arr, divider) {
//     let res = [];
//     for (let i = 0; i < arr.length; ++i) {
//         res.push(arr[i]);
//         if (i + 1 < arr.length) arr.push(divider);
//     }
//     return res;
// }

