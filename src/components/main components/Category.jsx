import React from 'react';

import CategoryCard from './CategoryCard';

import '../../css/components/main/categories.css'


function CategoryContainer() {
    const state = {
        cards: [
            { title: 'Design', image: 'images/categories/lohp-category-design-2x-v2.jpg' },
            { title: 'Development', image: 'images/categories/lohp-category-design-2x-v2.jpg' },
            { title: 'Marketing', image: 'images/categories/lohp-category-design-2x-v2.jpg' },
            { title: 'IT and Software', image: 'images/categories/lohp-category-design-2x-v2.jpg' },
            { title: 'Personal Development', image: 'images/categories/lohp-category-design-2x-v2.jpg' },
            { title: 'Photography', image: 'images/categories/lohp-category-design-2x-v2.jpg' },
            { title: 'Music', image: 'images/categories/lohp-category-design-2x-v2.jpg' },
        ]
    }

    return (
        <div className="categories-container container">
            <h2>Top categories</h2>
            <section className="categories-section">
                <div className="row">
                    {state.cards.map(card => <CategoryCard key={card.title} card={card} />)}
                </div>
            </section>
        </div>
    );
}

export default CategoryContainer;
