import { useState } from 'react';
import { Link, useLocation } from 'react-router';

export function NavigationMinimal() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '/about', isRoute: true },
    { label: 'Work', href: '#projects', isRoute: false },
    { label: 'Blog', href: '/blog', isRoute: true },
    { label: 'Resume', href: '#resume', isRoute: false },
  ];

  const renderLink = (link: typeof navLinks[number], className: string, onClick?: () => void) => {
    if (link.isRoute) {
      return (
        <Link
          key={link.label}
          to={link.href}
          className={className}
          onClick={onClick}
        >
          {link.label}
        </Link>
      );
    }

    if (isHome) {
      return (
        <a
          key={link.label}
          href={link.href}
          className={className}
          onClick={onClick}
        >
          {link.label}
        </a>
      );
    }

    return (
      <Link
        key={link.label}
        to={`/${link.href}`}
        className={className}
        onClick={onClick}
      >
        {link.label}
      </Link>
    );
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fffcfb]">
        <div className="mx-auto max-w-[1200px] px-6 md:px-8">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo / Name */}
            <Link
              to="/"
              className="font-['Lustria',serif] text-[15px] tracking-[0.15em] uppercase text-black hover:opacity-50 transition-opacity"
            >
              Farrah Yousefi
            </Link>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) =>
                renderLink(
                  link,
                  "font-['Lustria',serif] text-[13px] tracking-[0.12em] uppercase text-black/70 hover:text-black transition-colors"
                )
              )}
            </div>

            {/* Mobile hamburger button */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px]"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              <span
                className={`block w-5 h-[1.5px] bg-black transition-all duration-300 origin-center ${
                  menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''
                }`}
              />
              <span
                className={`block w-5 h-[1.5px] bg-black transition-all duration-300 ${
                  menuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`block w-5 h-[1.5px] bg-black transition-all duration-300 origin-center ${
                  menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''
                }`}
              />
            </button>
          </div>
          <div className="h-[0.5px] bg-black/15" />
        </div>
      </nav>

      {/* Mobile full-screen overlay menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#fffcfb] flex flex-col items-center justify-center transition-all duration-300 md:hidden ${
          menuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center gap-10">
          {navLinks.map((link) =>
            renderLink(
              link,
              "font-['Lustria',serif] text-[22px] tracking-[0.15em] uppercase text-black/70 hover:text-black transition-colors",
              () => setMenuOpen(false)
            )
          )}
        </div>
      </div>
    </>
  );
}
