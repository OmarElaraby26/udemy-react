import React from 'react';

import '../../css/components/course curriculum/headerAndList.css'

import { getLastPathName, getCourseData } from '../../helperFunctions.js';

function HeaderAndList(props) {
    const [state, setState] = React.useState({});

    React.useEffect(() => {
        (async () => {
            const courseId = getLastPathName();
            const data = await getCourseData(courseId);
            setState({ ...data[props.id], title: props.title });
        })();
    }, []);


    return (
        <section className='header-and-list'>
            <h2>{state.title}</h2>
            {state.paragraph && <p>{state.paragraph}</p>}
            {
                state.list &&
                <ul>
                    {state.list.map(point => <li><span>{point}</span></li>)}
                </ul>
            }

        </section>
    );
}

export default HeaderAndList;