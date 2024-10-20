import React, { useState } from 'react';
import logo from '../assets/logo.jpg';
import menu_icon from '../assets/menu_icon.png';
import cart_icon from '../assets/cart_icon.png';
import dropdown_icon from '../assets/dropdown_icon.png';
import search_icon from '../assets/search_icon.png';
import { Link, NavLink } from 'react-router-dom';

function Navbar({ onSearch }) {
    const [visible, setVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchVisible, setSearchVisible] = useState(false); // State for search visibility

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        onSearch(e.target.value); // Call the onSearch function passed as a prop
    };

    return (
        <div className='flex items-center justify-between py-5 px-6 bg-white shadow-md'>
            <Link to='/'>
                <img src={logo} className='w-36' alt="Company Logo" />
            </Link>
            <ul className='hidden sm:flex gap-8 text-gray-700'>
                <NavLink to='/' className='relative group' activeClassName='font-semibold text-gray-900'>
                    <p className='flex flex-col items-center gap-1 transition duration-300 ease-in-out'>
                        HOME
                        <span className='h-1 w-0 bg-gray-700 transition-all duration-300 ease-in-out group-hover:w-1/2'></span>
                    </p>
                </NavLink>
                <NavLink to='collection' className='relative group' activeClassName='font-semibold text-gray-900'>
                    <p className='flex flex-col items-center gap-1 transition duration-300 ease-in-out'>
                        COLLECTION
                        <span className='h-1 w-0 bg-gray-700 transition-all duration-300 ease-in-out group-hover:w-1/2'></span>
                    </p>
                </NavLink>
                <NavLink to='about' className='relative group' activeClassName='font-semibold text-gray-900'>
                    <p className='flex flex-col items-center gap-1 transition duration-300 ease-in-out'>
                        ABOUT
                        <span className='h-1 w-0 bg-gray-700 transition-all duration-300 ease-in-out group-hover:w-1/2'></span>
                    </p>
                </NavLink>
                <NavLink to='contact' className='relative group' activeClassName='font-semibold text-gray-900'>
                    <p className='flex flex-col items-center gap-1 transition duration-300 ease-in-out'>
                        CONTACT
                        <span className='h-1 w-0 bg-gray-700 transition-all duration-300 ease-in-out group-hover:w-1/2'></span>
                    </p>
                </NavLink>
            </ul>

            {/* Search Input for large screens */}
            <div className='relative hidden sm:block'>
                <input
                    type='text'
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder='Search...'
                    className='border border-gray-300 rounded-md py-1 px-3 focus:outline-none focus:ring-2 focus:ring-gray-500'
                />
            </div>

            {/* Search Icon for small screens */}
            <div className='relative sm:hidden flex items-center'>
                <img
                    onClick={() => setSearchVisible(!searchVisible)} // Toggle search input
                    src={search_icon}
                    className='w-5 cursor-pointer'
                    alt='Search Icon'
                />
                {searchVisible && (
                    <input
                        type='text'
                        value={searchTerm}
                        onChange={handleSearchChange}
                        placeholder='Search...'
                        className='border border-gray-300 rounded-md py-1 px-3 focus:outline-none focus:ring-2 focus:ring-gray-500 ml-2' // Added margin-left for spacing
                    />
                )}
            </div>

            <Link to='/cart' className='relative ml-4'> {/* Added margin-left for spacing */}
                <img src={cart_icon} className='w-5 min-w-5' alt='Cart Icon' />
                <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>5</p>
            </Link>
            <img onClick={() => setVisible(true)} src={menu_icon} className='w-5 cursor-pointer sm:hidden' alt='Menu Icon' />
            <div className={`fixed top-0 right-0 h-full bg-white transition-all duration-300 ${visible ? 'w-64' : 'w-0 overflow-hidden'}`}>
                <div className='flex flex-col text-gray-600 h-full'>
                    <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                        <img src={dropdown_icon} className='h-4 rotate-180' alt='Dropdown Icon' />
                        <p className='font-medium'>Back</p>
                    </div>
                    <NavLink to='/' onClick={() => setVisible(false)} className='p-3 border-b border-gray-300 hover:bg-gray-100'>HOME</NavLink>
                    <NavLink to='collection' onClick={() => setVisible(false)} className='p-3 border-b border-gray-300 hover:bg-gray-100'>COLLECTION</NavLink>
                    <NavLink to='about' onClick={() => setVisible(false)} className='p-3 border-b border-gray-300 hover:bg-gray-100'>ABOUT</NavLink>
                    <NavLink to='contact' onClick={() => setVisible(false)} className='p-3 hover:bg-gray-100'>CONTACT</NavLink>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
