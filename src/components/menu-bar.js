import React from 'react'
import { Link } from 'react-router-dom'

export default function Menubar() {
    const onClickRoot = () => {
        location.href='/'
    }
    return (
        <nav className="site-header" style={{backgroundColor: ""}}>
            <div className="container d-flex flex-column flex-md-row justify-content-between">
                <Link to="#" onClick={onClickRoot} className="py-2 d-none d-md-inline-block">Home</Link>
                <Link to="/folder/new" className="py-2 d-none d-md-inline-block">Add Folder</Link>
                <Link to="/keyword/new" className="py-2 d-none d-md-inline-block">Add Password</Link>
            </div>
        </nav>
    )
}
