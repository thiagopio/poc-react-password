import React from 'react'
import { Link } from 'react-router-dom'

const MenuBar = () => {
    return (
        <nav className="site-header sticky-top py-1" style={{backgroundColor: ""}}>
            <div className="container d-flex flex-column flex-md-row justify-content-between">
                <Link to="/" className="py-2 d-none d-md-inline-block">Home</Link>                
                <Link to="/keywords/new" className="py-2 d-none d-md-inline-block">Add Password</Link>                
            </div>
        </nav>
    )
}

export default MenuBar