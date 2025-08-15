import { useState } from 'react';
import { 
  Book, 
  Code, 
  Zap, 
  Settings, 
  MessageSquare, 
  BarChart3,
  Search,
  ChevronRight,
  Copy,
  ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Documentation = () => {
  const [activeSection, setActiveSection] = useState('getting-started');

  const sidebarSections = [
    {
      id: 'getting-started',
      title: 'Primeiros Passos',
      icon: Book,
      items: [
        'Configuração Inicial',
        'Conectando WhatsApp',
        'Primeiro Chatbot',
        'Tutorial Completo'
      ]
    },
    {
      id: 'features',
      title: 'Funcionalidades',
      icon: Zap,
      items: [
        'Chatbot Inteligente',
        'Disparo em Massa',
        'Multiatendimento',
        'Extração de Contatos',
        'CRM Integrado'
      ]
    },
    {
      id: 'api',
      title: 'API Reference',
      icon: Code,
      items: [
        'Autenticação',
        'Endpoints',
        'Webhooks',
        'SDKs',
        'Rate Limits'
      ]
    },
    {
      id: 'integrations',
      title: 'Integrações',
      icon: Settings,
      items: [
        'WhatsApp Business',
        'OpenAI GPT',
        'Zapier',
        'Webhook Examples'
      ]
    },
    {
      id: 'analytics',
      title: 'Analytics',
      icon: BarChart3,
      items: [
        'Métricas Principais',
        'Relatórios',
        'Dashboards',
        'Exportação'
      ]
    }
  ];

  const quickStartSteps = [
    {
      step: 1,
      title: 'Crie sua conta',
      description: 'Cadastre-se gratuitamente e acesse o dashboard',
      code: null
    },
    {
      step: 2,
      title: 'Conecte seu WhatsApp',
      description: 'Escaneie o QR Code para conectar sua conta Business',
      code: null
    },
    {
      step: 3,
      title: 'Configure seu chatbot',
      description: 'Defina respostas automáticas e fluxos de conversação',
      code: `{
  "welcome_message": "Olá! Como posso ajudá-lo hoje?",
  "fallback_message": "Desculpe, não entendi. Pode reformular?",
  "ai_enabled": true
}`
    },
    {
      step: 4,
      title: 'Faça sua primeira campanha',
      description: 'Envie mensagens em massa para seus contatos',
      code: `POST /api/campaigns
{
  "name": "Bem-vindos",
  "message": "Olá {{name}}, bem-vindo!",
  "contacts": ["5511999999999"],
  "schedule": "2024-01-15T10:00:00Z"
}`
    }
  ];

  const apiExamples = [
    {
      title: 'Enviar Mensagem',
      method: 'POST',
      endpoint: '/api/messages/send',
      description: 'Envia uma mensagem para um contato específico',
      code: `curl -X POST https://api.whatsapp-saas.com/v1/messages/send \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "to": "5511999999999",
    "message": "Olá! Como está?",
    "type": "text"
  }'`
    },
    {
      title: 'Listar Conversas',
      method: 'GET',
      endpoint: '/api/conversations',
      description: 'Recupera todas as conversas ativas',
      code: `curl -X GET "https://api.whatsapp-saas.com/v1/conversations?limit=50" \\
  -H "Authorization: Bearer YOUR_API_KEY"`
    },
    {
      title: 'Webhook Configuração',
      method: 'POST',
      endpoint: '/api/webhooks',
      description: 'Configura um webhook para receber eventos',
      code: `{
  "url": "https://seu-site.com/webhook",
  "events": ["message.received", "message.sent"],
  "secret": "seu_secret_aqui"
}`
    }
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-heading font-bold text-gray-900">
                Documentação
              </h1>
              <p className="text-gray-600 mt-2">
                Tudo que você precisa saber para usar nossa plataforma
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar na documentação..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent w-64"
                />
              </div>
              <Button className="btn-primary">
                <ExternalLink className="h-4 w-4 mr-2" />
                API Explorer
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <aside className="w-80 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <nav className="space-y-6">
                {sidebarSections.map((section) => (
                  <div key={section.id}>
                    <button
                      onClick={() => setActiveSection(section.id)}
                      className={`flex items-center w-full text-left p-3 rounded-lg transition-colors ${
                        activeSection === section.id 
                          ? 'bg-primary text-white' 
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <section.icon className="h-5 w-5 mr-3" />
                      <span className="font-medium">{section.title}</span>
                      <ChevronRight className="h-4 w-4 ml-auto" />
                    </button>
                    
                    {activeSection === section.id && (
                      <div className="mt-2 ml-8 space-y-1">
                        {section.items.map((item, index) => (
                          <button
                            key={index}
                            className="block w-full text-left p-2 text-sm text-gray-600 hover:text-primary rounded"
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {activeSection === 'getting-started' && (
              <div className="space-y-8">
                <div className="bg-white rounded-xl shadow-sm p-8">
                  <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                    Guia de Início Rápido
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Siga estes passos para configurar sua conta e enviar sua primeira mensagem em menos de 10 minutos.
                  </p>

                  <div className="space-y-8">
                    {quickStartSteps.map((step) => (
                      <div key={step.step} className="flex gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                            {step.step}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {step.title}
                          </h3>
                          <p className="text-gray-600 mb-4">
                            {step.description}
                          </p>
                          {step.code && (
                            <div className="bg-gray-900 rounded-lg p-4 relative">
                              <button
                                onClick={() => copyToClipboard(step.code!)}
                                className="absolute top-3 right-3 text-gray-400 hover:text-white"
                              >
                                <Copy className="h-4 w-4" />
                              </button>
                              <pre className="text-green-400 text-sm overflow-x-auto">
                                <code>{step.code}</code>
                              </pre>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'api' && (
              <div className="space-y-8">
                <div className="bg-white rounded-xl shadow-sm p-8">
                  <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                    API Reference
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Nossa API REST permite integrar todas as funcionalidades da plataforma em seus sistemas.
                  </p>

                  <div className="space-y-8">
                    {apiExamples.map((example, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                        <div className="bg-gray-50 p-4 border-b border-gray-200">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <span className={`px-2 py-1 text-xs font-semibold rounded ${
                                example.method === 'GET' ? 'bg-green-100 text-green-800' :
                                example.method === 'POST' ? 'bg-blue-100 text-blue-800' :
                                'bg-orange-100 text-orange-800'
                              }`}>
                                {example.method}
                              </span>
                              <code className="text-sm font-mono text-gray-700">
                                {example.endpoint}
                              </code>
                            </div>
                            <button
                              onClick={() => copyToClipboard(example.code)}
                              className="text-gray-500 hover:text-gray-700"
                            >
                              <Copy className="h-4 w-4" />
                            </button>
                          </div>
                          <h3 className="font-semibold text-gray-900 mt-2">
                            {example.title}
                          </h3>
                          <p className="text-sm text-gray-600 mt-1">
                            {example.description}
                          </p>
                        </div>
                        <div className="bg-gray-900 p-4">
                          <pre className="text-green-400 text-sm overflow-x-auto">
                            <code>{example.code}</code>
                          </pre>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Placeholder for other sections */}
            {!['getting-started', 'api'].includes(activeSection) && (
              <div className="bg-white rounded-xl shadow-sm p-8">
                <div className="text-center py-12">
                  <MessageSquare className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {sidebarSections.find(s => s.id === activeSection)?.title}
                  </h3>
                  <p className="text-gray-600">
                    Esta seção da documentação está sendo desenvolvida. Em breve você terá acesso a todo o conteúdo.
                  </p>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Documentation;