import React, { Component } from 'react';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import CourseCard from './CourseCard';

import '../../../css/main/courses.css';

export default class CoursesContainer extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.currentCourse;
    }

    changeState = (newCourse) => {
        this.setState({ ...newCourse });
    }

    render() {
        return (
            <div className="courses-container">
                <section className="courses-section">
                    <div className="courses-intro">
                        <h2>{this.state.intro.header}</h2>
                        <p>{this.state.intro.paragraph}</p>
                        <button className="btn">{this.state.intro.buttonValue}</button>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <OwlCarousel
                                ref={this.OwlCarouselRef}
                                items={5} margin={15} rewind={false} rewindNav={false} nav={true} dots={false} slideBy={'page'}
                                responsive={{
                                    0: {
                                        items: 1
                                    },
                                    600: {
                                        items: 2
                                    },
                                    1000: {
                                        items: 5
                                    }
                                }}
                                className="owl-carousel owl-theme courses-cards-container">
                                {this.state.cards.map(card => <CourseCard key={card.id} card={card} />)}
                            </OwlCarousel>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
