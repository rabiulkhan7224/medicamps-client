import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router";


const Footer = () => {
    return (
        <footer className="bg-primarycolor text-text">
          <div className="container mx-auto py-10 px-4">
            <div className="flex flex-wrap justify-between">
              {/* Logo and Description */}
              <div className="w-full md:w-1/3 mb-6">
                <h1 className="text-3xl font-bold">Medi Camps</h1>
                <p className="mt-4">
                  Connecting communities through health awareness and care. Join us in making a difference for a healthier tomorrow.
                </p>
              </div>
    
              {/* Quick Links */}
              <div className="w-full md:w-1/3 mb-6">
                <h2 className="text-xl font-semibold">Quick Links</h2>
                <ul className="mt-4 space-y-2">
                  <li>
                    <Link to="/about" className="hover:text-accentcolor">About Us</Link>
                  </li>
                  <li>
                    <Link to="/available" className="hover:text-accentcolor">Our Camps</Link>
                  </li>
                  
                  
                </ul>
              </div>
    
              {/* Contact Info */}
              <div className="w-full md:w-1/3 mb-6">
                <h2 className="text-xl font-semibold">Contact Us</h2>
                <p className="mt-4">Community Center, Dhaka, Bangladesh</p>
                <p>Email: <a href="mailto:mdrabiulkhanbabo@gmail.com" className="hover:text-accentcolor">mdrabiulkhanbabo@gmail.com</a></p>
                <p>Phone: <a href="tel:+8801779893574" className="hover:text-accentcolor">+8801779893574</a></p>
              </div>
            </div>
    
            <div className="mt-10 border-t border-neutral-focus pt-6">
              <div className="flex justify-between items-center">
                {/* Social Icons */}
                <div className="flex space-x-4">
                  <a href="https://www.facebook.com/mdrabiul.khan.351?mibextid=ZbWKwL" target="_blank" rel="noreferrer">
                    <FaFacebook className="hover:text-accentcolor cursor-pointer" size={20} />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noreferrer">
                    <FaTwitter className="hover:text-accentcolor cursor-pointer" size={20} />
                  </a>
                  <a href="https://www.instagram.com/mdrabiul.khan.351?igsh=enBxbDN4eWhnc242" target="_blank" rel="noreferrer">
                    <FaInstagram className="hover:text-accentcolor cursor-pointer" size={20} />
                  </a>
                  <a href="https://linkedin.com/in/md-rabiul-hasan7224" target="_blank" rel="noreferrer">
                    <FaLinkedinIn className="hover:text-accentcolor cursor-pointer" size={20} />
                  </a>
                  <a href="https://github.com/rabiulkhan7224" target="_blank" rel="noreferrer">
                    <FaGithub className="hover:text-accentcolor cursor-pointer" size={20} />
                  </a>
                </div>
    
                {/* Copyright */}
                <p className="text-sm">
                  &copy; {new Date().getFullYear()} Medi Camps. All rights reserved.
                </p>
              </div>
            </div>
          </div>
          </footer>
    );
};

export default Footer;