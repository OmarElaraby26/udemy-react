import React, { Component } from 'react';

import '../css/header.css';

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="header--img"><img src="images/header/47444240-88ea-420c-bd60-606da3382f79.jpg"
                    alt="header background" /></div>
                <div className="header--text">
                    <h1>24-Hour Flash Sale</h1>
                    <p>Learn valuable, practical skills for less. Log in to see deals on courses. Sale ends tonight!</p>
                </div>
            </header>
        );
    }
}