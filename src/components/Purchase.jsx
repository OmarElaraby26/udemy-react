import React from 'react';

import '../css/components/purchase.css';

import { getLastPathName, getCourseData } from '../helperFunctions.js';


function Purchase() {
    const [price, setPrice] = React.useState("");

    React.useEffect(() => {
        (async () => {
            const courseId = getLastPathName();
            const data = await getCourseData(courseId);
            setPrice("E£" + data['price']);
        })();
    }, []);

    return (
        <div className='purchase-container'>
            <div className='purchase-content-container'>
                <div className='purchase-price'>{price}</div>
                <div className='purchase-buttons-container'>
                    <button>Add to chart</button>
                    <button>Buy Now</button>
                </div>
                <div style={{ marginBottom: '10px' }}>30-Day Money-Back Guarantee </div>
                <div className='purchase-course-include'>
                    <b>This course includes:</b>
                    <div><span><i className="fa-solid fa-trophy"></i> 21 hours on-demand video</span></div>
                    <div><span><i className="fa-solid fa-trophy"></i> 3 articles</span></div>
                    <div><span><i className="fa-solid fa-trophy"></i> 4 downloadable resources</span></div>
                    <div><span><i className="fa-solid fa-trophy"></i> Full lifetime access</span></div>
                    <div><span><i className="fa-solid fa-trophy"></i> Access on mobile and TV</span></div>
                    <div><span><i className="fa-solid fa-trophy"></i> Certificate of completion</span></div>
                </div>
                <div className='purchase-footer'>
                    <a href="#">Share</a>
                    <a href="#">Gift this course</a>
                    <a href="#">Apply Coupon</a>
                </div>
            </div>
        </div >
    );
}

export default Purchase;
