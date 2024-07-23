'use client'
import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
import '../style/Navbar.css';
import Link from 'next/link';

const Navbar = () => {
    // const router = useRouter();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={isScrolled ? 'scrolled' : ''}>
            <div className="navBrand">
                <Link href="/">
                    <svg width="22" height="29" viewBox="0 0 22 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.4473 4.39764C21.4473 2.24344 19.7055 0.5 17.5635 0.5H14.6256C12.47 0.5 10.7282 2.25257 10.7282 4.41133C10.7282 5.96764 9.46845 7.23187 7.91766 7.23187H3.88834C1.73725 7.23643 0 8.97987 0 11.1341C0 13.2883 1.73725 15.0317 3.88379 15.0317H7.91311C9.4639 15.0317 10.7236 16.2959 10.7236 17.8522V17.8842C10.7236 19.4405 9.4639 20.7047 7.91311 20.7047H3.88379C1.73725 20.7047 0 22.4482 0 24.6024C0 26.7566 1.73725 28.5 3.88379 28.5H6.82165C8.97729 28.5 10.7191 26.7474 10.7191 24.5887C10.7191 23.0324 11.9788 21.7681 13.5296 21.7681H17.5589C19.7055 21.7681 21.4427 20.0247 21.4427 17.8705C21.4427 15.7163 19.7055 13.9729 17.5589 13.9729H13.5296C11.9788 13.9729 10.7191 12.7086 10.7191 11.1523V11.1204C10.7191 9.56406 11.9788 8.29984 13.5296 8.29984H17.5589C19.7055 8.29984 21.4427 6.5564 21.4427 4.4022L21.4473 4.39764Z" fill="#90BAA8" />
                    </svg>
                    <h1>Spine<span>Edge</span></h1>
                </Link>
            </div>
            <div className={`navLinks ${isMenuOpen ? 'open' : ''}`}>
                <ul>
                    <li><Link href="/" className={'active'}>Home</Link></li>
                    <li><Link href="/about" >About</Link></li>
                    <li><Link href="/service" >Services</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                </ul>
                <div className="navContact">
                    <Link href="/contact">Get in touch</Link>
                </div>
            </div>
            <div className={`burger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );
};

export default Navbar;


// <ul>
// <li><Link href="/" className={router.pathname === '/' ? 'active' : ''}>Home</Link></li>
// <li><Link href="/about" className={router.pathname === '/about' ? 'active' : ''}>About</Link></li>
// <li><Link href="/service" className={router.pathname === '/service' ? 'active' : ''}>Services</Link></li>
// <li><Link href="/blog" className={router.pathname === '/blog' ? 'active' : ''}>Blog</Link></li>
// </ul>