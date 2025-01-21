import React, { useState } from 'react'
import { NavLink, Link } from "react-router-dom";

export const Sidebar = () => {
    const [isToggle, setIsToggle] = useState(false);
    // Sidebar Toggle
    const [isComponentShow, setIsComponentShow] = useState(false);


    return (
        <ul className={"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" + (isToggle ? ' toggled' : '')} id="accordionSidebar" >
            {/* Sidebar - Brand */}
            <Link className="sidebar-brand d-flex align-items-center justify-content-center" to={"/"}>
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink" />
                </div>
                <div className="sidebar-brand-text mx-3">Developer Ben<sup>97</sup></div>
            </Link>
            {/* Divider */}
            <hr className="sidebar-divider my-0" />
            {/* Nav Item - Dashboard */}
            <li className="nav-item active">
                <Link className="nav-link" to={"/"}>
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span>Dashboard</span></Link>
            </li>
            {/* Divider */}
            <hr className="sidebar-divider" />
            {/* Heading */}
            <div className="sidebar-heading">
                Interface
            </div>
            {/* Nav Item - Pages Collapse Menu */}
            <li className="nav-item">
                <a className={"nav-link" + (isComponentShow ? ' collapsed show' : ' collapsed')}
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded={isComponentShow ? "true" : 'false'}
                    aria-controls="collapseTwo"
                    onClick={() => setIsComponentShow(!isComponentShow)}
                >
                    <i className="fas fa-fw fa-cog" />
                    <span>Tài chính </span>
                </a>
                <div id="collapseTwo" className={isComponentShow ? "collapse show" : 'collapse'} aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <a className="collapse-item" href="buttons.html">Buttons</a>
                        
                        <a className="collapse-item" href="cards.html">Cards</a>
                    </div>
                </div>
            </li>
            {/* Divider */}
            <hr className="sidebar-divider" />
            {/* Heading */}
            <div className="sidebar-heading">
                Addons
            </div>
            
            {/* Nav Item - Charts */}
            <li className="nav-item">
                <NavLink to="/quy-tai-chinh" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} > Quỹ tài chính  </NavLink>
            </li>
            
            
            {/* Divider */}
            <hr className="sidebar-divider d-none d-md-block" />
            {/* Sidebar Toggler (Sidebar) */}

            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle" onClick={() => setIsToggle(!isToggle)}>
                    {isToggle ? <i className="fas fa-angle-left" /> : <i className="fas fa-angle-right" />}
                </button>
            </div>
        </ul >
    )
}
