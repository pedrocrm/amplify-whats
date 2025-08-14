import { Play, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-image.jpg';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
                Automação Completa de{' '}
                <span className="gradient-text">WhatsApp</span>{' '}
                para Empresas
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Chatbots inteligentes, disparos em massa, multiatendimento e CRM integrado. 
                Transforme seu WhatsApp em uma máquina de vendas automatizada.
              </p>
              
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-primary rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-semibold">A</div>
                  <div className="w-8 h-8 bg-secondary rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-semibold">B</div>
                  <div className="w-8 h-8 bg-accent rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-semibold">C</div>
                </div>
                <span>+5.000 empresas já automatizam com nossa plataforma</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-hero group">
                Começar Grátis
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" className="btn-outline group">
                <Play className="mr-2 h-5 w-5" />
                Ver Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-heading font-bold text-gray-900">99.9%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-heading font-bold text-gray-900">2.5M+</div>
                <div className="text-sm text-gray-600">Mensagens/mês</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-heading font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Suporte</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="WhatsApp SaaS Dashboard demonstrando automação de chatbot"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-primary text-white p-3 rounded-xl shadow-lg animate-bounce">
              <div className="text-sm font-semibold">+1.200</div>
              <div className="text-xs opacity-90">Leads hoje</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-accent text-white p-3 rounded-xl shadow-lg animate-pulse">
              <div className="text-sm font-semibold">98.5%</div>
              <div className="text-xs opacity-90">Taxa de entrega</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;