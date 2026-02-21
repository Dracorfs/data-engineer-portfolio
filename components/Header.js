import { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { id: 1, name: "About", link: "#aboutme" },
    { id: 2, name: "Projects", link: "#projects" },
    { id: 3, name: "Contact", link: "#contact" }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-border-color shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="section-container flex items-center justify-between py-4">
        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <XIcon className="w-6 h-6 text-primary" aria-hidden="true" />
          ) : (
            <MenuIcon className="w-6 h-6 text-primary" aria-hidden="true" />
          )}
        </button>

        {/* Desktop Navigation */}
        <div
          className={`absolute top-full left-0 w-full bg-white border-b border-border-color md:static md:w-auto md:border-none md:bg-transparent ${
            isMenuOpen ? 'block' : 'hidden md:block'
          }`}
          id="navbar-default"
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 p-4 md:p-0">
            {navLinks.map(link => (
              <li key={link.id}>
                <a
                  href={link.link}
                  onClick={closeMenu}
                  className="block py-2 px-3 md:px-0 text-text-secondary hover:text-primary font-medium transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}