import React from 'react';
import { Link } from 'react-router-dom';
import useBlog from '../../hook/useBlog';

const Blogs = () => {
    const [blogs, setBlogs] = useBlog();
    return (
        <section className="blog-area blog-bg pt-115 pb-90">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="section-title text-center mb-70">
                            <h6>Latest News</h6>
                            <h2>Latest Popular Articles</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        blogs.map(blog =>


                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog-post mb-30">
                                    <div className="blog-thumb">

                                    </div>
                                    <div className="blog-content">
                                        <div className="blog-meta">
                                            <ul>
                                                <li><i className="far fa-clock" /> OCTOBER 9, 2022</li>
                                                <li><a href="#"><i className="far fa-comments" /> 03</a></li>
                                            </ul>
                                        </div>
                                        <h4><Link to="/blog">{blog?.title}</Link></h4>
                                        <p>{blog?.desc.slice(0, 200)}....</p>
                                        <div className="blog-read-more text-center">
                                            <Link to="/blog">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                    }

                </div>
            </div>
        </section>
    );
};

export default Blogs;