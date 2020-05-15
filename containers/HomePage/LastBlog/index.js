import React from 'react';
import BlogWrapper from '../../Blog/BlogWrapper';

const index = () => {
    return (
        <div id="blog" className="last-blog section">
            <div className='last-blog__wrapper section-wrapper'>
                <div className='last-blog-content content-1300'>
                    <h2 className='last-blog-content__title'>آخرین مقالات</h2>
                    <BlogWrapper />
                </div>
            </div>
        </div>
    )
};


export default index;