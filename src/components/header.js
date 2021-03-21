import React from "react";
import { Link } from 'gatsby';
import header from './header.module.css'






const Header = () => {
    return (
        <header className="header">
            <h2> Header </h2>
            <nav>
                <ul>
                    <li > <Link className={header.link} activeClassName={header.activeLink}to="/"> Home page index.js page  </Link> </li>
                    <li> <Link className={header.link}activeClassName={header.activeLink}to="/about"> About page  </Link> </li>
                    <li> <Link className={header.link}activeClassName={header.activeLink}to="/blog"> Blog page </Link> </li>
                    <li> <Link className={header.link}activeClassName={header.activeLink}to="/contact"> contact page </Link> </li>
                </ul>
            </nav>
        </header>

    )
}

export default Header