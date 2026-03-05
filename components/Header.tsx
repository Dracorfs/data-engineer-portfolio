import { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

interface NavLink {
  id: number;
  name: string;
  link: string;
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = (): void => {
    setIsMenuOpen(false);
  };

  const navLinks: NavLink[] = [
    { id: 1, name: "About", link: "#aboutme" },
    { id: 2, name: "Projects", link: "#projects" },
    { id: 3, name: "Contact", link: "#contact" }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between py-4">
        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <XIcon className="w-6 h-6" aria-hidden="true" />
          ) : (
            <MenuIcon className="w-6 h-6" aria-hidden="true" />
          )}
        </button>

        {/* Desktop Navigation */}
        <div
          className={`absolute top-full left-0 w-full bg-slate-900 border-b border-white/10 md:static md:w-auto md:border-none md:bg-transparent ${isMenuOpen ? 'block' : 'hidden md:block'
            }`}
          id="navbar-default"
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 p-4 md:p-0">
            {navLinks.map((link: NavLink) => (
              <li key={link.id}>
                <a
                  href={link.link}
                  onClick={closeMenu}
                  className="block py-2 px-3 md:px-0 text-gray-400 hover:text-white font-medium transition-colors duration-200"
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
};

export default Header;
