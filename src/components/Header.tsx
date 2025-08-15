import { useState } from 'react';
import { Menu, X, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-primary to-secondary p-2 rounded-lg">
              <MessageSquare className="h-6 w-6 text-white" />
            </div>
            <a href="/" className="text-xl font-heading font-bold text-gray-900 hover:text-primary transition-colors">
              WhatsApp SaaS
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#funcionalidades" className="text-gray-600 hover:text-primary transition-colors">
              Funcionalidades
            </a>
            <a href="#arquitetura" className="text-gray-600 hover:text-primary transition-colors">
              Arquitetura
            </a>
            <a href="#precos" className="text-gray-600 hover:text-primary transition-colors">
              Preços
            </a>
            <a href="/docs" className="text-gray-600 hover:text-primary transition-colors">
              Documentação
            </a>
            <a href="/dashboard" className="text-gray-600 hover:text-primary transition-colors">
              Dashboard
            </a>
            <a href="#contato" className="text-gray-600 hover:text-primary transition-colors">
              Contato
            </a>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="/dashboard" className="text-gray-600 hover:text-primary transition-colors">
              Login
            </a>
            <Button className="btn-primary">
              Teste Grátis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-600 hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <nav className="py-4 space-y-4">
              <a href="#funcionalidades" className="block px-4 py-2 text-gray-600 hover:text-primary transition-colors">
                Funcionalidades
              </a>
              <a href="#arquitetura" className="block px-4 py-2 text-gray-600 hover:text-primary transition-colors">
                Arquitetura
              </a>
              <a href="#precos" className="block px-4 py-2 text-gray-600 hover:text-primary transition-colors">
                Preços
              </a>
              <a href="/docs" className="block px-4 py-2 text-gray-600 hover:text-primary transition-colors">
                Documentação
              </a>
              <a href="/dashboard" className="block px-4 py-2 text-gray-600 hover:text-primary transition-colors">
                Dashboard
              </a>
              <a href="#contato" className="block px-4 py-2 text-gray-600 hover:text-primary transition-colors">
                Contato
              </a>
              <div className="px-4 pt-4 space-y-2">
                <a href="/dashboard" className="block w-full text-left px-4 py-2 text-gray-600 hover:text-primary transition-colors">
                  Login
                </a>
                <Button className="btn-primary w-full">
                  Teste Grátis
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;