import React from 'react';
import { Book, Code, Zap, MessageSquare, Search } from 'lucide-react';

const Documentation = () => {
  const sections = [
    {
      id: 'getting-started',
      title: 'Primeiros Passos',
      icon: Book,
      description: 'Como começar a usar a plataforma'
    },
    {
      id: 'features',
      title: 'Funcionalidades',
      icon: Zap,
      description: 'Explore todas as funcionalidades disponíveis'
    },
    {
      id: 'api',
      title: 'API Reference',
      icon: Code,
      description: 'Documentação completa da API REST'
    }
  ];

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
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Quick Start */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
            Guia de Início Rápido
          </h2>
          <p className="text-gray-600 mb-6">
            Siga estes passos para configurar sua conta e enviar sua primeira mensagem em menos de 10 minutos.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">
                1
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Crie sua conta</h3>
              <p className="text-sm text-gray-600">Cadastre-se gratuitamente</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">
                2
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Conecte WhatsApp</h3>
              <p className="text-sm text-gray-600">Escaneie o QR Code</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">
                3
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Configure Chatbot</h3>
              <p className="text-sm text-gray-600">Defina respostas automáticas</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">
                4
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Primeira Campanha</h3>
              <p className="text-sm text-gray-600">Envie mensagens em massa</p>
            </div>
          </div>
        </div>

        {/* Documentation Sections */}
        <div className="grid md:grid-cols-3 gap-6">
          {sections.map((section) => (
            <div key={section.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="bg-primary/10 p-3 rounded-xl w-fit mb-4">
                <section.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
                {section.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {section.description}
              </p>
              <button className="text-primary font-medium hover:text-primary/80 transition-colors">
                Explorar →
              </button>
            </div>
          ))}
        </div>

        {/* API Example */}
        <div className="bg-white rounded-xl shadow-sm p-8 mt-8">
          <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
            Exemplo de API
          </h2>
          <div className="bg-gray-900 rounded-lg p-4">
            <pre className="text-green-400 text-sm overflow-x-auto">
              <code>{`curl -X POST https://api.whatsapp-saas.com/v1/messages/send \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "to": "5511999999999",
    "message": "Olá! Como está?",
    "type": "text"
  }'`}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;