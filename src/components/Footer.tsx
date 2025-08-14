import { MessageSquare, Mail, Phone, MapPin, Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        {/* Main Footer */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-primary to-secondary p-2 rounded-lg">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-heading font-bold">
                  WhatsApp SaaS
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                A plataforma mais completa para automação de WhatsApp Business. 
                Transforme suas conversas em vendas.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-heading font-semibold text-white mb-6">Produto</h4>
              <ul className="space-y-4">
                <li><a href="#funcionalidades" className="text-gray-400 hover:text-white transition-colors">Funcionalidades</a></li>
                <li><a href="#precos" className="text-gray-400 hover:text-white transition-colors">Preços</a></li>
                <li><a href="#api" className="text-gray-400 hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Integrações</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Changelog</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-heading font-semibold text-white mb-6">Recursos</h4>
              <ul className="space-y-4">
                <li><a href="#documentacao" className="text-gray-400 hover:text-white transition-colors">Documentação</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Guias</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cases de Sucesso</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Webinars</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-heading font-semibold text-white mb-6">Suporte</h4>
              <ul className="space-y-4">
                <li><a href="#contato" className="text-gray-400 hover:text-white transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Status</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contato</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Chat Online</a></li>
              </ul>

              {/* Contact Info */}
              <div className="mt-8 space-y-3">
                <div className="flex items-center space-x-3 text-gray-400">
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">suporte@whatsappsaas.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">(11) 99999-9999</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">São Paulo, Brasil</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 WhatsApp SaaS. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                LGPD
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;