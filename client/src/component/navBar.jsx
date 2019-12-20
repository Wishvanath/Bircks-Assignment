import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    // return main component
    return (
        <div className="nav_wrapper">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" className="navbar-brand">
                    <div className="logo_section">
                        <img src="img/logo.png" alt="" />
                    </div>
                </Link>

                {/* mobile toggler button */}
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                {/* mobile toggler inner section */}
                <div id="navbarNavDropdown" class="navbar-collapse collapse">
                    <ul class="navbar-nav mr-auto">
                        {/* define here more link */}
                    </ul>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            {/* <a class="nav-link" href="{{ url('/login') }}">Login</a> */}
                            <Link to ="/login" className="mr-3">Login</Link>                  
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;