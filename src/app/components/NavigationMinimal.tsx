import { Link, useLocation } from 'react-router';

export function NavigationMinimal() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navLinks = [
    { label: 'About', href: '/about', isRoute: true },
    { label: 'Work', href: '#projects', isRoute: false },
    { label: 'Blog', href: '/blog', isRoute: true },
    { label: 'Resume', href: '#resume', isRoute: false },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fffcfb]">
      <div className="mx-auto max-w-[1200px] px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo / Name */}
          <Link
            to="/"
            className="font-['Lustria',serif] text-[15px] tracking-[0.15em] uppercase text-black hover:opacity-50 transition-opacity"
          >
            Farrah Yousefi
          </Link>

          {/* Nav links */}
          <div className="flex items-center gap-10">
            {navLinks.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className="font-['Lustria',serif] text-[13px] tracking-[0.12em] uppercase text-black/70 hover:text-black transition-colors"
                >
                  {link.label}
                </Link>
              ) : isHome ? (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-['Lustria',serif] text-[13px] tracking-[0.12em] uppercase text-black/70 hover:text-black transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={`/${link.href}`}
                  className="font-['Lustria',serif] text-[13px] tracking-[0.12em] uppercase text-black/70 hover:text-black transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        </div>
        <div className="h-[0.5px] bg-black/15" />
      </div>
    </nav>
  );
}
