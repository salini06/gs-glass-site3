import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Soluções', href: '#solucoes' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/98 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
      <nav className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-xl md:text-2xl font-bold text-primary">GS Glass Brasil</h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-foreground hover:text-accent transition-colors font-medium text-sm tracking-wide"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="https://wa.me/5511934275767"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block bg-accent text-primary px-6 py-2 rounded font-semibold hover:shadow-md transition-all text-sm"
        >
          Contato
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-primary"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://wa.me/5511934275767"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-6 py-2 rounded hover:bg-opacity-90 transition-all text-sm font-medium text-center"
            >
              Contato via WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
