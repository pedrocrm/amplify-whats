import { 
  Bot, 
  Megaphone, 
  Users, 
  Download, 
  Database, 
  BarChart3,
  Code,
  Zap,
  Shield,
  Clock
} from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: 'Chatbot Inteligente',
    description: 'IA com OpenAI GPT para atendimento automático 24/7. Responde perguntas, qualifica leads e agenda reuniões automaticamente.',
    highlight: 'IA Avançada'
  },
  {
    icon: Megaphone,
    title: 'Disparo em Massa',
    description: 'Campanhas automatizadas para milhares de contatos. Segmentação avançada e personalização de mensagens.',
    highlight: 'Milhares por vez'
  },
  {
    icon: Users,
    title: 'Multiatendimento',
    description: 'Múltiplos operadores em uma única conta. Distribuição automática de conversas e transferência entre agentes.',
    highlight: 'Equipe integrada'
  },
  {
    icon: Download,
    title: 'Extração de Contatos',
    description: 'Capture contatos automaticamente por DDD, grupos do WhatsApp e listas. Validação em tempo real.',
    highlight: 'Automático'
  },
  {
    icon: Database,
    title: 'CRM Integrado',
    description: 'Gestão completa de leads, histórico de conversas, tags personalizadas e pipeline de vendas.',
    highlight: 'Tudo integrado'
  },
  {
    icon: BarChart3,
    title: 'Analytics Avançado',
    description: 'Relatórios detalhados de performance, métricas de conversão e insights de comportamento dos clientes.',
    highlight: 'Dados em tempo real'
  }
];

const additionalFeatures = [
  {
    icon: Code,
    title: 'API REST Completa',
    description: 'Integre com qualquer sistema através da nossa API robusta'
  },
  {
    icon: Zap,
    title: 'Webhooks',
    description: 'Receba eventos em tempo real em seus sistemas'
  },
  {
    icon: Shield,
    title: 'Segurança Enterprise',
    description: 'Criptografia end-to-end e compliance LGPD'
  },
  {
    icon: Clock,
    title: 'Agendamento',
    description: 'Programe mensagens e campanhas com precisão'
  }
];

const FeaturesSection = () => {
  return (
    <section id="funcionalidades" className="bg-white section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
            Funcionalidades que{' '}
            <span className="gradient-text">Revolucionam</span>{' '}
            seu WhatsApp Business
          </h2>
          <p className="text-xl text-gray-600">
            Todas as ferramentas que você precisa para transformar seu WhatsApp 
            em uma poderosa ferramenta de vendas e atendimento.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="feature-card group">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-primary to-secondary p-3 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-xl font-heading font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                    <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                      {feature.highlight}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-heading font-bold text-center text-gray-900 mb-8">
            E muito mais...
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-xl p-4 mb-4 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                  <feature.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h4 className="font-heading font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Pronto para experimentar todas essas funcionalidades?
          </p>
          <button className="btn-hero">
            Começar Teste Grátis de 14 Dias
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;