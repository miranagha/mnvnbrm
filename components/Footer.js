import React from "react";
import Link from 'next/link'

import {FaFacebook, FaInstagram, FaTwitter, FaGoogle} from 'react-icons/lib/fa'

const Footer = () => (
    <footer className="container text-center col-xs-12">
        <hr width='100%' color='black' height='1px' background-color='rgb(88, 82, 82)' />
        <a rel="noopener noreferrer" className="social-media" href="https://goo.gl/wdXSFS" target="_blank"><FaFacebook /></a>
        <a className="social-media" href="https://www.instagram.com/manandvan24/?hl=en" target="_blank"><FaInstagram /></a>
        {/* <a className="social-media" href="" target="_blank"><FaTwitter /></a> */}
        <br />
  
        <p className='text-center copyRight'>Copyright @ 2018 Man and Van Birmingham | all rights reserved</p>
    </footer>
);

export default Footer;
