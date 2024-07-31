"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import "../style/Navbar.css";
import Link from "next/link";

const Navbar = ({ className }) => {
  const pathname = usePathname();
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

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={isScrolled ? "scrolled" : ""}>
      <div className={`container ${className.className}`}>
        <div className="navBrand">
          <Link href="/">
            <svg
              className="black-svg"
              width="20"
              height="28"
              viewBox="0 0 20 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.9475 3.89764C19.9475 1.74344 18.3275 0 16.3353 0H13.6028C11.598 0 9.97796 1.75257 9.97796 3.91133C9.97796 5.46764 8.80632 6.73187 7.36398 6.73187H3.61643C1.61576 6.73643 0 8.47987 0 10.6341C0 12.7883 1.61576 14.5317 3.6122 14.5317H7.35975C8.80209 14.5317 9.97373 15.7959 9.97373 17.3522V17.3842C9.97373 18.9405 8.80209 20.2047 7.35975 20.2047H3.6122C1.61576 20.2047 0 21.9482 0 24.1024C0 26.2566 1.61576 28 3.6122 28H6.34461C8.34951 28 9.9695 26.2474 9.9695 24.0887C9.9695 22.5324 11.1411 21.2681 12.5835 21.2681H16.331C18.3275 21.2681 19.9432 19.5247 19.9432 17.3705C19.9432 15.2163 18.3275 13.4729 16.331 13.4729H12.5835C11.1411 13.4729 9.9695 12.2086 9.9695 10.6523V10.6204C9.9695 9.06406 11.1411 7.79984 12.5835 7.79984H16.331C18.3275 7.79984 19.9432 6.0564 19.9432 3.9022L19.9475 3.89764Z"
                fill="#0C0C0C"
              />
            </svg>

            <svg
              className="green-svg"
              width="22"
              height="29"
              viewBox="0 0 22 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.4473 4.39764C21.4473 2.24344 19.7055 0.5 17.5635 0.5H14.6256C12.47 0.5 10.7282 2.25257 10.7282 4.41133C10.7282 5.96764 9.46845 7.23187 7.91766 7.23187H3.88834C1.73725 7.23643 0 8.97987 0 11.1341C0 13.2883 1.73725 15.0317 3.88379 15.0317H7.91311C9.4639 15.0317 10.7236 16.2959 10.7236 17.8522V17.8842C10.7236 19.4405 9.4639 20.7047 7.91311 20.7047H3.88379C1.73725 20.7047 0 22.4482 0 24.6024C0 26.7566 1.73725 28.5 3.88379 28.5H6.82165C8.97729 28.5 10.7191 26.7474 10.7191 24.5887C10.7191 23.0324 11.9788 21.7681 13.5296 21.7681H17.5589C19.7055 21.7681 21.4427 20.0247 21.4427 17.8705C21.4427 15.7163 19.7055 13.9729 17.5589 13.9729H13.5296C11.9788 13.9729 10.7191 12.7086 10.7191 11.1523V11.1204C10.7191 9.56406 11.9788 8.29984 13.5296 8.29984H17.5589C19.7055 8.29984 21.4427 6.5564 21.4427 4.4022L21.4473 4.39764Z"
                fill="#90BAA8"
              />
            </svg>
            <h1>
              Spine<span>Edge</span>
            </h1>
          </Link>
        </div>
        <div className={`navLinks ${isMenuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link href="/" className={pathname === "/" ? "active" : ""}>
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={pathname === "/about" ? "active" : ""}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/service"
                className={pathname === "/service" ? "active" : ""}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={pathname === "/blog" ? "active" : ""}
              >
                Blog
              </Link>
            </li>
          </ul>
          <div className="navContact">
            <Link href="/contact">Get in touch</Link>
          </div>
        </div>
        <div
          className={`burger ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
