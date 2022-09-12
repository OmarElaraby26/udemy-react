import React from 'react';

import '../css/components/nav.css';

function Nav() {
    return (
        <nav className="main-nav">
            <a href="#" className="logo">
                <img src="images/logo-udemy.svg" alt="Udemy" width="91" height="34" />
            </a>
            <nav className="categories">
                <button>
                    <span>Categories</span>
                </button>
            </nav>
            <div className="search">
                <form action="">
                    <input type="text" name="search_query" value="" placeholder="Search for anything" />
                    <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                </form>
            </div>
            <div className="udemy-business-teach udemy-business">
                <a href="#">
                    <span>Udemy Business</span>
                </a>
            </div>
            <div className="udemy-business-teach udemy-teach">
                <a href="#">
                    <span>Teach on Udemy</span>
                </a>
            </div>

            <div className="cart">
                <a href="#">
                    <i className="fa-solid fa-cart-shopping"></i>
                </a>
            </div>

            <div className="join" id="login">
                <a href="#"><span>Login</span></a>
            </div>
            <div className="join" id="sign-up">
                <a href="#"><span>Sign up</span></a>
            </div>
            <div className="language"><button className="button"><i className="fa-solid fa-globe"></i></button></div>
            <div className="bars"><i className="fa-solid fa-bars"></i></div>
        </nav>
    );
}

export default Nav;