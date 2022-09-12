import React from 'react';
import CategoryContainer from './main components/Category';
import Tabs from './main components/Tabs';

import '../css/components/main/header.css';


function Main() {
    return (
        <main>
            <div className="main-header">
                <h1>A broad selection of courses</h1>
                <p>
                    Choose from 185,000 online video courses with new additions
                    published every month
                </p>
            </div>

            <Tabs />

            <CategoryContainer />
        </main >
    );
}

export default Main;