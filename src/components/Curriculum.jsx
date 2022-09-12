import React from 'react';

import HeaderAndList from './course curriculum/HeaderAndList';

import '../css/components/curriculum.css';

function Curriculum() {
    return (
        <section id="curriculum">
            <HeaderAndList title="Requirements" id="requirements" />
            <HeaderAndList title="Description" id="descriptions" />
            <HeaderAndList title="Who this course is for:" id="audience" />
        </section>
    );
}

export default Curriculum;
