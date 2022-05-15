import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="dashBoard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content bg-gradient-to-r from-primary to-secondary">
                {/* <!-- Page content here --> */}
                <div className='flex items-center justify-around	'>
                    <h2 className='text-purple-500 text-2xl  p-3 text-left lg:text-right'>welcome your Dash Board</h2>

                    {/* dashboad sidebar button */}
                    <label for="dashBoard-sidebar" class="btn btn-primary drawer-button lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="dashBoard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-200 text-base-content ">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>Appointment</Link></li>
                    <li><Link to='/dashboard/review'>My review</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;