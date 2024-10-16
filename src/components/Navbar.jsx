import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    const links = [
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Services",
            path: "/services"
        },
        {
            title: "Contacts",
            path: "/contacts"
        },
        {
            title: "Blogs",
            path: "/blogs"
        },
    ]
    return (
        <nav className="bg-red-400 px-6 py-4 flex justify-between items-center">
            <h3 className="text-3xl">Logo <span className="text-cyan-300">Next</span> </h3>
            <ul className="flex justify-between items-center space-x-4">
                {
                    links?.map((link) => <Link key={link.path} href={link.path}>{link.title}</Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;