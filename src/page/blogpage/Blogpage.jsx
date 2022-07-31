import React from 'react';
import useBlog from '../../hook/useBlog';

const Blogpage = () => {
    const [blogs, setBlogs] = useBlog();

    return (
        <>
            <div className="container">
                <div className="single-blog-post mb-30 pt-115">

                    {
                        blogs.map((blog, ind) =>
                            <div className="blog-content " key={ind}>

                                <h4><a href="">{blog?.title}</a></h4>
                                <p>{blog?.desc}</p>

                            </div>)
                    }

                </div>
            </div>

        </>
    );
};

export default Blogpage;