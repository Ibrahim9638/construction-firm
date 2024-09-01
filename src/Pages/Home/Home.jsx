import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar/>
           <h2 className="text-2xl">Home Page</h2> 
           <Footer/>
        </div>
    );
};

export default Home;