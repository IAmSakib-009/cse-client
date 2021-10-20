import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import NavLogo from '../../assets/logo/petPlant.png'
import { Button, Container, Image, Nav, OverlayTrigger, Popover } from 'react-bootstrap';
import './navbar.css'
import { UserContext } from '../../App';
import { handleSignOut, initializeLoginFramework } from '../Login/LoginManager';

const Navbar = () => {
    const { loggedInUser, setLoggedInUser } = useContext(UserContext);

    initializeLoginFramework();
    const signOut = () => {
        handleSignOut()
            .then(res => {
                setLoggedInUser(res)
            })
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-navBar">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        <img className="navLogo" src={NavLogo} alt="logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link fw-bold active" aria-current="page">HOME</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to="/about" className="nav-link fw-bold active" aria-current="page">
                                    ABOUT
                                </Link>

                            </li>
                            <li className="nav-item dropdown">
                                <Link to="/" className="nav-link fw-bold active dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    SERVICES
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link to="/" className="dropdown-item">Cat Breeds &raquo;</Link>
                                        <ul class="dropdown-menu dropdown-submenu">
                                            <li><Link to="/Genre" className="dropdown-item">Genre</Link></li>
                                            <li><Link to="/Foods" className="dropdown-item">Foods</Link></li>
                                            <li><Link to="/Medicines" className="dropdown-item">Medicines</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/" className="dropdown-item">Dog Breeds &raquo;</Link>
                                        <ul class="dropdown-menu dropdown-submenu">
                                            <li><Link to="/Genre" className="dropdown-item">Genre</Link></li>
                                            <li><Link to="/Foods" className="dropdown-item">Foods</Link></li>
                                            <li><Link to="/Medicines" className="dropdown-item">Medicines</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/" className="dropdown-item">Rabbit Breeds &raquo;</Link>
                                        <ul class="dropdown-menu dropdown-submenu">
                                            <li><Link to="/Genre" className="dropdown-item">Genre</Link></li>
                                            <li><Link to="/Foods" className="dropdown-item">Foods</Link></li>
                                            <li><Link to="/Medicines" className="dropdown-item">Medicines</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to="/gallery" className="nav-link fw-bold active">GALLERY</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contacts" className="nav-link fw-bold active">CONTACTS</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/blogs" className="nav-link fw-bold active">BLOGS</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-light me-3" type="submit">Search</button>
                        </form>
                        {/* <div className="signOut">
                            <button type="button" className="btn btn-light">Logout</button>
                        </div> */}
                        {loggedInUser?.isSignedIn ?

                            <div className="signOut">
                                <button type="button" onClick={signOut} className="btn btn-light">Logout</button>
                            </div>
                            :
                            <div className="signOut">
                                <Link to="login" className="btn btn-light">Login</Link>
                            </div>

                        }

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;