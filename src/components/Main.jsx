import React, { Component } from 'react';
import CategoryContainer from './main components/Category';
import Tabs from './main components/Tabs';

import '../css/main/header.css';


export default class Main extends Component {
    render() {
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
            </main>
        );
    }
}