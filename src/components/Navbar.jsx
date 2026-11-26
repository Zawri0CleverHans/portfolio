import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { profile } from '../data/portfolioData';

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Credentials', href: '#credentials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[#E7E4DC] bg-[#FAF9F6]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="font-editorial text-xl font-medium tracking-tight text-[#18181B] transition-colors hover:text-[#6B1D1D]"
        >
          {profile.name}
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#57534E] transition-colors hover:text-[#18181B]"
            >
              {item.label}
            </a>
          ))}
          <a
            href={profile.resumePath}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-full border border-[#D6D1C7] bg-white px-3.5 py-1.5 text-sm font-medium text-[#18181B] shadow-2xs transition-all hover:border-[#6B1D1D] hover:text-[#6B1D1D]"
          >
            Resume
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          className="inline-flex items-center justify-center rounded-lg border border-[#E7E4DC] bg-white p-2 text-[#18181B] md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[#E7E4DC] bg-[#FAF9F6] px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-[#44403C] hover:text-[#6B1D1D]"
              >
                {item.label}
              </a>
            ))}
            <a
              href={profile.resumePath}
              target="_blank"
              rel="noreferrer"
              className="mt-1 inline-flex w-fit items-center gap-1 rounded-full border border-[#D6D1C7] bg-white px-4 py-1.5 text-sm font-medium text-[#18181B]"
            >
              Resume PDF
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
