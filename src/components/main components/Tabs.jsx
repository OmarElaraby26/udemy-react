import React from 'react';
import CoursesContainer from './tab components/CoursesContainer';

import '../../css/components/main/header.css';


function Tabs() {
    const CoursesContainerRef = React.createRef()
    const buttons = ['Python', 'Excel', 'Web Development', 'JavaScript', 'Data Science', 'AWS Certification', 'Drawing'];
    const [currentButton, setCurrentButton] = React.useState(buttons[0]);

    const buttonClickHandler = async (event) => {
        const courseName = event.target.innerText.trim();
        setCurrentButton(courseName);
        await CoursesContainerRef.current.doUpdate(courseName);
    }

    React.useEffect(() => {
        CoursesContainerRef.current.doUpdate(currentButton);
    }, [currentButton]);

    return (
        <div className="tabs">
            <nav className="tabs--nav">
                {buttons.map(btn => <button onClick={buttonClickHandler} key={btn} className="btn" style={{ fontWeight: btn == currentButton ? 'bold' : "normal", color: btn == currentButton ? '#000' : "#6a6f73" }} ><span>{btn}</span></button>)}
            </nav>
            <CoursesContainer ref={CoursesContainerRef} courseName={currentButton} />
        </div>
    );
}


export default Tabs;