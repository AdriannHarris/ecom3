import React from 'react';
import './Footer.css';
import {AiFillFacebook} from "react-icons/ai";
import {AiOutlineTwitter} from "react-icons/ai";
import {BsGoogle} from "react-icons/bs";
import {AiFillYoutube} from "react-icons/ai";
import {AiFillLinkedin} from "react-icons/ai";


const Footer = () => {
    return (
        
        <footer class="footer-bottom">
        <ul class="socials">
          <li><a href="https://facebook.com/" aria-label="Read more about Facebook">Facebook<i class={<AiFillFacebook />}></i></a></li>
          <li><a href="https://twitter.com/" aria-label="Read more aboutTwitter">Twitter<i class={<AiOutlineTwitter />}></i></a></li>
          <li><a href="https://googleplus.com/" aria-label="Read more about Google Plus">Google+<i class={<BsGoogle />}></i></a></li>
          <li><a href="https://youtube.com/" aria-label="Read more about Youtube">Youtube<i class={<AiFillYoutube />}></i></a></li>
          <li><a href="https://linkedin.com/" aria-label="Read more about Linkedin">LinkedIn<i class={<AiFillLinkedin />}></i></a></li>
        </ul>
    </footer>
    
)};
export default Footer;