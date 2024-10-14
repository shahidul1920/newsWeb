import React from 'react'
import logo from '@/asset/imgs/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

export const Navbar = () => {

    const navItems = [
        {
            route: 'Home',
            path: '/'
        },
        {
            route: 'All News',
            path: '/allNews'
        },
        {
            route: 'About',
            path: '/about'
        },
        {
            route: 'Contact',
            path: '/contact'
        },
    ]

    return (
        <div className="navbar bg-base-100 px-[30px] border-b-[.3px] border-blue-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {
                            navItems.map((i) => (
                                <Link key={i} href={i.path}>
                                    <button>{i.route}</button>
                                </Link>
                            ))
                        }
                    </ul>
                </div>
                <div className="logo btn btn-ghost text-xl">
                    <Image src={logo} width={60} height={60} alt='logo, news' />
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4">
                    {
                        navItems.map((i) => (
                            <Link key={i} href={i.path}>
                                <button>{i.route}</button>
                            </Link>
                        ))
                    }
                </ul>
            </div>
            <div className="navbar-end gap-5">
                <FontAwesomeIcon className='w-[20px]' icon={faFacebook} />
                <FontAwesomeIcon className='w-[20px]' icon={faTwitter} />
                <FontAwesomeIcon className='w-[20px]' icon={faLinkedin} />
                <FontAwesomeIcon className='w-[20px]' icon={faInstagram} />
                
            </div>
        </div>
    )
}
