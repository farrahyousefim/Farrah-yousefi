import logo from '@/assets/Farrah-web-logo.png';

export function Footer() {
  const links = [
    { label: 'Email', href: 'mailto:Farrah.yousefim@gmail.com' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/farrah-yousefi-5762b3a7/' },
    { label: 'Resume', href: '#resume' },
  ];

  return (
    <footer className="bg-[#fffcfb] border-t border-black/10">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8 py-10 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <img src={logo} alt="Farrah Yousefi" className="w-[32px] h-[32px] object-contain" />

          {/* Links */}
          <div className="flex items-center gap-6 md:gap-10">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-['Lustria',serif] text-[12px] md:text-[13px] tracking-[0.12em] uppercase text-black/50 hover:text-black transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
