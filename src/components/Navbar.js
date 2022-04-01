import React from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js"
import Logo from "../../src/logo.jpg"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="navbar nav-light bg-white">
                <div className="container-fluid">
                    <div><NavLink className="nav-link active me-4 text-secondary h3 m-0 p-0 d-flex align-items-center" to="/"><img src={Logo} className="logo" alt="" />Freetwings</NavLink></div>
                    <div className="">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row">
                            <li className="nav-item"><NavLink to="/careerpage" className="nav-link active me-4 text-dark">Our Products</NavLink></li>
                            <li className="nav-item"><NavLink to="/" className="nav-link active me-4 text-dark">Insights</NavLink></li>
                            <li className="nav-item"><NavLink to="/" className="nav-link active me-4 text-dark">Smart Yarn</NavLink></li>
                            <li className="nav-item"><NavLink to="/" className="nav-link active me-4 text-dark">About</NavLink></li>
                            <li className="nav-item"><NavLink to="/" className="nav-link active me-4 text-dark">Contact</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar