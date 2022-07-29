import React from 'react';
import About from '../about/About';
import Banner from '../banner/Banner';
import Blogs from '../blogs/Blogs';
import Category from '../category/Category';
import Gallery from '../gallery/Gallery';
import NewsLetter from '../newsletter/NewsLetter';
import Services from '../services/Services';
import Testimonials from '../testimonials/Testimonials';

const Home = () => {
    return (
        <main>
            <Banner />
            <Category />
            <About />
            <Services />
            <Testimonials />
            {/* <Gallery /> */}
            <Blogs />
            <NewsLetter />
        </main>


    );
};

export default Home;