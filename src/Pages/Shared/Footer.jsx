import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const footer = () => {
    return (
        <div className='bg-pink-500'>
            <footer className="footer text-white p-10 md:flex justify-between md:max-w-7xl mx-auto">
                <aside>
                    <p className='flex gap-2'>
                        <CiLocationOn className='mt-1 text-xl'></CiLocationOn> H#000 (0th Floor), Road #00, <br />
                        New DOHS, Mohakhali, Dhaka, Bangladesh

                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About</a>
                    <a className="link link-hover">Project</a>
                    <a className="link link-hover">Our Team</a>
                    <a className="link link-hover">Terms Conditions</a>
                    <a className="link link-hover">Submit Listing</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Quick Links</h6>
                    <a className="link link-hover">Quick Links</a>
                    <a className="link link-hover">Rentals</a>
                    <a className="link link-hover">Sales</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Our blog</a>
                </nav>
                <nav className='w-1/4'>
                    <h6 className="footer-title">About us</h6>
                    <p>Where beauty meets confidence — Jerin 's Parlour
                        <br />is your go-to destination for radiant skin,
                        <br />flawless style, and personalized care.</p>
                    <div className='flex text-2xl gap-2'>
                        <FaFacebook></FaFacebook>
                        <FaInstagram></FaInstagram>
                        <FaLinkedin></FaLinkedin>
                        <FaYoutube></FaYoutube>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default footer;