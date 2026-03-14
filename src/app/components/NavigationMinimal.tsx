export function NavigationMinimal() {
  const navLinks = [
    { label: 'About me', href: '#about' },
    { label: 'Work', href: '#projects' },
    { label: 'Blog', href: '#blog' },
    { label: 'Resume', href: '#resume' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center h-16 gap-8 relative">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-black text-base font-['Lustria',serif] hover:opacity-60 transition-opacity"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="h-[1px] bg-black opacity-20" />
      </div>
    </nav>
  );
}
