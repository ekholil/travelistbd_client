import React from 'react';
import {AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai'
const Footer = () => {
    return (
        <div className="bg-dark py-3">
            <div className="container">
                <div className="row d-flex align-items-center">
                <div className="col-md-6">
                    <h2 className="text-success">TravlisTBD</h2>
                    <div className="d-flex fs-3 text-success">
                    <AiFillFacebook /> <AiFillInstagram /> <AiFillLinkedin /> <AiFillYoutube />
                    </div>
                </div>
                <div className="col-md-3 d-flex flex-column">
                    <h3 className="text-white mb-3">For Tourists</h3>
                    <a href="#" className="no-underline my-2 block text-white" href="#">Book An Spot</a>
                    <a href="#" className="no-underline my-2 block text-white" href="#">Watch Video</a>
                    <a href="#" className="no-underline my-2 block text-white" href="#">Favourites</a>
                    <a href="#" className="no-underline my-2 block text-white" href="#">FAQ</a>
                    <a href="#" className="no-underline my-2 block text-white" href="#">Find A Spot</a>
                </div>
                <div className="col-md-3 d-flex flex-column">
                    <a href="#" className="no-underline my-2 block text-white" href="#">About Us</a>
                    <a href="#" className="no-underline my-2 block text-white" href="#">Terms and Condition</a>
                    <a href="#" className="no-underline my-2 block text-white" href="#">Privacy Policy</a>
                    <a href="#" className="no-underline my-2 block text-white" href="#">Contact Us</a>
                    
                </div>
                </div>
            </div>
            <p className="text-center text-white mt-4">TravelistBD 2021 ©. All Rights Reserved</p>
        </div>
    );
};

export default Footer;