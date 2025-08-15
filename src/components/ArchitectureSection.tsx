import { 
  Database, 
  Zap, 
  Shield, 
  Cloud, 
  Smartphone, 
  Code, 
  GitBranch,
  Server,
  Globe,
  Lock
} from 'lucide-react';

const architectureComponents = [
  {
    category: "Frontend",
    icon: Smartphone,
    color: "from-blue-500 to-blue-600",
    items: [
      { name: "React 18.3.1", description: "Framework moderno e performático" },
      { name: "TypeScript", description: "Tipagem estática para maior segurança" },
      { name: "Tailwind CSS", description: "Design system escalável" },
      { name: "Vite", description: "Build tool ultra-rápido" }
    ]
  },
  {
    category: "Backend",
    icon: Server,
    color: "from-green-500 to-green-600",
    items: [
      { name: "Supabase", description: "Backend-as-a-Service completo" },
      { name: "PostgreSQL", description: "Banco de dados robusto" },
      { name: "Edge Functions", description: "Lógica serverless" },
      { name: "Real-time", description: "WebSockets para tempo real" }
    ]
  },
  {
    category: "Integrações",
    icon: Zap,
    color: "from-purple-500 to-purple-600",
    items: [
      { name: "OpenAI GPT", description: "IA para chatbot inteligente" },
      { name: "WhatsApp API", description: "Integração oficial" },
      { name: "Webhooks", description: "Eventos em tempo real" },
      { name: "REST API", description: "APIs robustas e documentadas" }
    ]
  },
  {
    category: "Segurança",
    icon: Shield,
    color: "from-red-500 to-red-600",
    items: [
      { name: "JWT Auth", description: "Autenticação segura" },
      { name: "RLS", description: "Row Level Security" },
      { name: "CORS", description: "Proteção cross-origin" },
      { name: "Rate Limiting", description: "Proteção contra ataques" }
    ]
  }
];

const techStack = [
  { name: "React", logo: "⚛️", category: "Frontend" },
  { name: "TypeScript", logo: "📘", category: "Language" },
  { name: "Supabase", logo: "🔋", category: "Backend" },
  { name: "PostgreSQL", logo: "🐘", category: "Database" },
  { name: "Tailwind", logo: "🎨", category: "Styling" },
  { name: "OpenAI", logo: "🤖", category: "AI" }
];

const ArchitectureSection = () => {
  return (
    <section id="arquitetura" className="bg-gray-50 section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
            Arquitetura{' '}
            <span className="gradient-text">Moderna e Escalável</span>
          </h2>
          <p className="text-xl text-gray-600">
            Nossa plataforma é construída com as melhores tecnologias e práticas do mercado, 
            garantindo performance, segurança e escalabilidade.
          </p>
        </div>

        {/* Architecture Overview */}
        <div className="bg-white rounded-2xl p-8 mb-12 shadow-sm">
          <h3 className="text-2xl font-heading font-bold text-center text-gray-900 mb-8">
            Visão Geral da Arquitetura
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {architectureComponents.map((component, index) => (
              <div key={index} className="text-center">
                <div className={`bg-gradient-to-r ${component.color} p-4 rounded-xl mb-4 inline-block`}>
                  <component.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-heading font-bold text-gray-900 mb-3">
                  {component.category}
                </h4>
                <div className="space-y-2">
                  {component.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="text-left">
                      <div className="font-semibold text-sm text-gray-800">
                        {item.name}
                      </div>
                      <div className="text-xs text-gray-600">
                        {item.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="bg-white rounded-2xl p-8 mb-12 shadow-sm">
          <h3 className="text-2xl font-heading font-bold text-center text-gray-900 mb-8">
            Stack Tecnológico
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {techStack.map((tech, index) => (
              <div key={index} className="text-center p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="text-3xl mb-2">{tech.logo}</div>
                <div className="font-semibold text-gray-900 text-sm">{tech.name}</div>
                <div className="text-xs text-gray-600">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="bg-primary/10 p-3 rounded-xl w-fit mb-4">
              <Cloud className="h-6 w-6 text-primary" />
            </div>
            <h4 className="font-heading font-bold text-gray-900 mb-2">
              Escalabilidade
            </h4>
            <p className="text-gray-600">
              Arquitetura serverless que escala automaticamente conforme a demanda, 
              suportando milhões de mensagens sem perda de performance.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="bg-secondary/10 p-3 rounded-xl w-fit mb-4">
              <Lock className="h-6 w-6 text-secondary" />
            </div>
            <h4 className="font-heading font-bold text-gray-900 mb-2">
              Segurança
            </h4>
            <p className="text-gray-600">
              Múltiplas camadas de segurança incluindo autenticação JWT, 
              RLS no banco de dados e criptografia end-to-end.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="bg-accent/10 p-3 rounded-xl w-fit mb-4">
              <Globe className="h-6 w-6 text-accent" />
            </div>
            <h4 className="font-heading font-bold text-gray-900 mb-2">
              Performance
            </h4>
            <p className="text-gray-600">
              CDN global, cache inteligente e otimizações avançadas garantem 
              carregamento ultra-rápido em qualquer lugar do mundo.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Quer conhecer mais detalhes técnicos da nossa arquitetura?
          </p>
          <button className="btn-secondary">
            Ver Documentação Técnica
          </button>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;