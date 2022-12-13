import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/biggest.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import {
    BrowserRouter as Router, Link, Route, Routes
} from "react-router-dom";
import Home from "../pages/Home";
import TestsPage from "../pages/TestsPage";
import Sign from "../auth/Sign";

export const TestsBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
            <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
                <Container>
                    <Navbar.Brand href="/">
                        <img src={logo} alt="Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"/>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
            <span className="navbar-text">
              <HashLink to='#connect'>
                <button className="vvd"><span>Account</span></button>
              </HashLink>
            </span>
                        <span className="navbar-text">
              <Link to='/create'>
                <button className="vvd"><span>Create Test</span></button>
              </Link>
            </span>
                        <span className="navbar-text">
              <HashLink to='#connect'>
                <button className="vvd"><span>Scan Photo</span></button>
              </HashLink>
            </span>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
    )
}
