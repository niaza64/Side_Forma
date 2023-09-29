import React from 'react';
import Company_logo from './Company_logo.png';

type Props = {
  links?: string[];
};

const defaultLinks = ['Home', 'Our Services', 'About', 'Contact'];

const Header = ({ links = defaultLinks }: Props): JSX.Element => {
  return (
    <header className="bg-green-500 text-white p-4 flex items-center">
      <img src={Company_logo} alt="Company Logo" className="h-10 w-30 mr-4" />
      <nav className='ml-32'>
        <ul className="flex space-x-4">
          {links.map((link, index) => (
            <li key={index} className="hover:underline">
              <a href={`/${link.toLowerCase()}`}>{link}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
