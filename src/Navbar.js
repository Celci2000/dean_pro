import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const options = [
    { title: 'Hostel Admission', link: '/' },
    { title: 'Council Election 2023-25', link: '/about' },
    { title: 'CET LMS ', link: '/services' },
    { title: 'CET LMS', link: '/products' },
    { title: 'ICCC2023', link: '/contact' },
    { title: 'IMPACTS 2023', link: '/blog' },
    { title: 'Library', link: '/gallery' },
    { title: 'NIRF', link: '/faq' },
    { title: 'Tenders', link: '/team' },
    { title: 'Alumni', link: '/testimonials' },
    { title: 'Contact Us', link: '/support' }
  ];

  return (
    <nav className="bg-gray-800">
      <ul className="flex items-center justify-between py-4 px-6">
        {options.map((option, index) => (
          <li key={index}>
            <Link
              to={option.link}
              className="text-white hover:text-gray-300 text-sm font-medium px-2 py-1 rounded-md"
            >
              {option.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

