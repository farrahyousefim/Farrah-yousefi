import flowerMark from '@/assets/flower-mark.png';

export function Footer() {
  const links = [
    { label: 'Email', href: 'mailto:Farrah.yousefim@gmail.com' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/farrah-yousefi-5762b3a7/' },
    { label: 'Resume', href: '#resume' },
  ];

  return (
    <footer className="bg-[#fffcfb] border-t border-black/10">
      <div className="mx-auto max-w-[1200px] px-8 py-16">
        <div className="flex items-center justify-between">
          {/* Flower mark */}
          <div className="w-[32px] h-[32px] rounded-full bg-[#943d2f] flex items-center justify-center">
            <img src={flowerMark} alt="" className="w-[18px] h-[18px] object-contain brightness-0 invert" />
          </div>

          {/* Links */}
          <div className="flex items-center gap-10">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-['Lustria',serif] text-[13px] tracking-[0.12em] uppercase text-black/50 hover:text-black transition-colors"
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
