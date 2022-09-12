import React from 'react';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import CourseCard from './CourseCard';

import '../../../css/components/main/courses.css';

class CoursesContainer extends React.Component {
    // const [courseName, setCourseName] = React.useState(props.courseName);
    // const [state, setState] = React.useState({ intro: { header: '', paragraph: '', buttonValue: '' }, cards: [] });
    // React.useEffect(() => {
    //     (async () => {
    //         setState(await getCourses(courseName));
    //     })();
    // }, []);

    // React.useEffect(() => {
    //     (async () => {
    //         setState(await getCourses(courseName));
    //     })();
    // }, [courseName]);

    constructor(props) {
        super(props);
        this.state = { intro: { header: '', paragraph: '', buttonValue: '' }, cards: [] };
        this.cardRef = React.createRef();
    }

    async doUpdate(courseName) {
        this.setState(await this.getCourses(courseName));
    }


    getCourses = async (courseName) => {
        if (!courseName) courseName = '';
        courseName = courseName.trim();
        courseName = courseName.toLowerCase();
        courseName = courseName.replace(' ', '-');

        const res = await fetch(`http://localhost:3000/homepage/`);
        const data = await res.json();
        return data[courseName] || { intro: { header: '', paragraph: '', buttonValue: '' }, cards: [] };
    }

    render() {
        return (
            <div className="courses-container" >
                <section className="courses-section">
                    <div className="courses-intro">
                        <h2>{this.state.intro.header}</h2>
                        <p>{this.state.intro.paragraph}</p>
                        <button className="btn">{this.state.intro.buttonValue}</button>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <OwlCarousel
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
                                {this.state.cards.map(card => <CourseCard ref={this.cardRef} key={card.id} card={card} />)}
                            </OwlCarousel>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}


export default CoursesContainer;


const DB = {
    "courses": {
        "python": {
            "cards": [
                {
                    "id": 1,
                    "link": "https://www.udemy.com/course/pythonforbeginners/",
                    "title": "Learn Python: The Complete Python Programming Course",
                    "author": "Avinash Jain,The Codex",
                    "image": "https://img-c.udemycdn.com/course/240x135/394676_ce3d_5.jpg",
                    "price": "679.99",
                    "rating": 4.4,
                    "reviews_number": "2,948"
                },
                {
                    "id": 2,
                    "link": "https://www.udemy.com/course/learning-python-for-data-analysis-and-visualization/",
                    "title": "Learning Python for Data Analysis and Visualization",
                    "author": "Jose Portilla",
                    "image": "https://img-c.udemycdn.com/course/240x135/396876_cc92_7.jpg",
                    "price": "1,599.99",
                    "rating": 3.4,
                    "reviews_number": "17,999"
                },
                {
                    "id": 3,
                    "link": "https://www.udemy.com/course/python-for-beginners-learn-programming-from-scratch/",
                    "title": "Python for Beginners - Learn Programming from scratch",
                    "author": "Edwin Diaz, Coding FAcutly Solutaions",
                    "image": "https://img-c.udemycdn.com/course/240x135/405878_e5a0_3.jpg",
                    "price": "679.99",
                    "rating": 4.4,
                    "reviews_number": "1,781"
                },
                {
                    "id": 4,
                    "link": "https://www.udemy.com/course/learn-python/",
                    "title": "Learn Python: Python for Beginners",
                    "author": "Abrar Hussain",
                    "image": "https://img-c.udemycdn.com/course/240x135/426570_1b91_3.jpg",
                    "price": "319.99",
                    "rating": 4.3,
                    "reviews_number": "2,773"
                },
                {
                    "id": 5,
                    "link": "https://www.udemy.com/course/python-beyond-the-basics-object-oriented-programming/",
                    "title": "Python Beyond the Basics - Object-Oriented Programming",
                    "author": "Infinite Skills",
                    "image": "https://img-c.udemycdn.com/course/480x270/449532_2aa9_7.jpg",
                    "price": "519.99",
                    "rating": 4.4,
                    "reviews_number": "2,930"
                },
                {
                    "id": 6,
                    "link": "https://www.udemy.com/course/selenium-webdriver-and-python/",
                    "title": "Python From Scratch & Selenium WebDriver QA Automation 2022",
                    "author": "Admas Kinfu",
                    "image": "https://img-c.udemycdn.com/course/480x270/482754_7146_6.jpg",
                    "price": "1,299.99",
                    "rating": 4.7,
                    "reviews_number": "1,813"
                },
                {
                    "id": 7,
                    "link": "https://www.udemy.com/course/teach-your-kids-to-code/",
                    "title": "Teach Your Kids to Code: Learn to Program Python at Any Age!",
                    "author": "Bryson Payne",
                    "image": "https://img-c.udemycdn.com/course/480x270/519554_da68_6.jpg",
                    "price": "319.99",
                    "rating": 4.5,
                    "reviews_number": "8,809"
                },
                {
                    "id": 8,
                    "link": "https://www.udemy.com/course/python-for-data-structures-algorithms-and-interviews/",
                    "title": "Python for Data Structures, Algorithms, and Interviews!",
                    "author": "Jose Portilla",
                    "image": "https://img-c.udemycdn.com/course/480x270/535622_3bc0.jpg",
                    "price": "1,299.99",
                    "rating": 4.5,
                    "reviews_number": "10.701"
                },
                {
                    "id": 9,
                    "link": "https://www.udemy.com/course/automate/",
                    "title": "Automate the Boring Stuff with Python Programming",
                    "author": "Al Sweigart",
                    "image": "https://img-c.udemycdn.com/course/480x270/543600_64d1_4.jpg",
                    "price": "519.99",
                    "rating": 4.7,
                    "reviews_number": "101,703"
                },
                {
                    "id": 10,
                    "link": "https://www.udemy.com/course/complete-python-bootcamp/",
                    "title": "2022 Complete Python Bootcamp From Zero to Hero in Python",
                    "author": "Jose Portilla",
                    "image": "https://img-c.udemycdn.com/course/480x270/567828_67d0.jpg",
                    "price": "729.99",
                    "rating": 4.6,
                    "reviews_number": "427,994"
                }
            ],
            "intro": {
                "header": "Expand your career opportunities with Python",
                "paragraph": "Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to both beginners and advanced developers alike.",
                "buttonValue": "Explore Python"
            }
        },
        "excel": {
            "cards": [
                {
                    "id": 10,
                    "link": "https://www.udemy.com/course/microsoft-excel-2013-course-beginners-intermediate-training/",
                    "title": "Microsoft Excel 2013 Course Beginners/ Intermediate Training",
                    "author": "Infinite Skills",
                    "image": "https://img-c.udemycdn.com/course/240x135/31535_e351_7.jpg",
                    "price": "519.99",
                    "rating": 4.6,
                    "people": "1,621",
                    "category": "excel"
                },
                {
                    "id": 11,
                    "link": "https://www.udemy.com/course/advanced-microsoft-excel-2013-online-excel-course/",
                    "title": "Microsoft Excel 2013  Advanced. Online Excel Training Course",
                    "author": "Infinite Skills",
                    "image": "https://img-c.udemycdn.com/course/240x135/39292_b3f3_9.jpg",
                    "price": "519.99",
                    "rating": 4.5,
                    "category": "excel",
                    "people": "3,503"
                }
            ],
            "intro": {
                "header": "Analyze and visualize data with Excel",
                "paragraph": "Take a Microsoft Excel course from Udemy, and learn how to use this industry-standard software. Real-world experts will show you the basics like how to organize data into sheets, rows and columns, and advanced techniques like creating complex dynamic formulas. Both small businesses and large companies use Excel to turn their raw data into actionable insights.",
                "buttonValue": "Explore Excel"
            }
        },
        "web-development": {
            "cards": [
                {
                    "id": 20,
                    "link": "https://www.udemy.com/course/microsoft-excel-2013-course-beginners-intermediate-training/",
                    "title": "Node Js ",
                    "author": "Infinite Skills",
                    "image": "https://img-c.udemycdn.com/course/240x135/31535_e351_7.jpg",
                    "price": "519.99",
                    "rating": 4.6,
                    "people": "1,621"
                },
                {
                    "id": 21,
                    "link": "https://www.udemy.com/course/thecompletewebdeveloper/",
                    "title": "The Complete 2020 Fullstack Web Developer Course",
                    "author": "Kalob Taulien",
                    "image": "https://media.onlinecoursebay.com/2019/03/15000014/19332_6b49_15-750x405.jpg",
                    "price": "1,299.99",
                    "rating": 4.5,
                    "people": "6,160"
                }
            ],
            "intro": {
                "header": "Build websites and applications with Web Development",
                "paragraph": "The world of web development is as wide as the internet itself. Much of our social and vocational lives play out on the internet, which prompts new industries aimed at creating, managing, and debugging the websites and applications that we increasingly rely on.",
                "buttonValue": "Explore Web Development"
            }
        }
    }
};