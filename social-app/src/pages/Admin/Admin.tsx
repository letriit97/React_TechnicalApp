import React, { Fragment } from 'react'
import { Sidebar } from './Sidebar/Sidebar'
import { Navtop } from './Navtop/Navtop'
import { Outlet } from 'react-router'

export const Admin = () => {
    return (
        <Fragment>
            <Sidebar />
            {/* Content Wrapper */}
            <div id="content-wrapper" className="d-flex flex-column">
                {/* Main Content */}
                <div id="content">
                    {/* Topbar */}
                    <Navtop />
                    {/* End of Topbar */}
                    {/* Begin Page Content */}
                    <Outlet />
                </div>
                {/* End of Main Content */}
                {/* Footer */}
                <footer className="sticky-footer bg-white">
                    <div className="container my-auto">
                        <div className="copyright text-center my-auto">
                            <span>Copyright © Your Website 2021</span>
                        </div>
                    </div>
                </footer>
                {/* End of Footer */}
            </div>
            {/* End of Content Wrapper */}
        </Fragment>
    )
}
