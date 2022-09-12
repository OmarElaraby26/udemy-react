import React from 'react';

import '../css/components/overview.css';

import { getLastPathName, getCourseData } from '../helperFunctions.js';

function Overview() {
    const [points, setPoints] = React.useState([]);

    React.useEffect(() => {
        (async () => {
            const courseId = getLastPathName();
            const data = await getCourseData(courseId);
            console.log('yyyyy:  ', data);
            console.log('xxxx:  ', data['whatYouWillLearn']);
            setPoints(data['whatYouWillLearn']);
        })();
    }, []);


    return (
        <section className='overview' id="overview">
            <h2 className='overview--header'>What you'll learn</h2>
            <div className='overview--list'>
                {points.map(point => {
                    return (<div className='overview--list--item'>
                        <div><i className="fa-solid fa-check"></i></div>
                        <div>{point}</div>
                    </div >)
                })}
            </div>
        </section>
    );

}

export default Overview;


