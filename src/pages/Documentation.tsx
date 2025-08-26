import React, { useState } from 'react';
import { Book, Code, Zap, MessageSquare, Search, Download, ExternalLink } from 'lucide-react';

const Documentation = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const sections = [
    {
      id: 'getting-started',
      title: 'Primeiros Passos',
      icon: Book,
      description: 'Como começar a usar a plataforma',
      keywords: 'inicio configuração setup tutorial'
    },
    {
      id: 'features',
      title: 'Funcionalidades',
      icon: Zap,
      description: 'Explore todas as funcionalidades disponíveis',
      keywords: 'recursos features chatbot automação mensagens'
    },
    {
      id: 'api',
      title: 'API Reference',
      icon: Code,
      description: 'Documentação completa da API REST',
      keywords: 'api rest endpoints autenticação webhook'
    }
  ];

  // Filter sections based on search term
  const filteredSections = sections.filter(section => 
    searchTerm === '' || 
    section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    section.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    section.keywords.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent w-64"
                />
              </div>
              
              <button 
                onClick={() => window.print()}
                className="flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                title="Imprimir documentação"
              >
                <Download className="h-4 w-4" />
                <span className="hidden sm:inline">Exportar</span>
              </button>
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
        <div className="mb-8">
          {searchTerm && (
            <div className="mb-4 text-gray-600">
              {filteredSections.length > 0 
                ? `Encontrados ${filteredSections.length} resultado(s) para "${searchTerm}"`
                : `Nenhum resultado encontrado para "${searchTerm}"`
              }
            </div>
          )}
          
          <div className="grid md:grid-cols-3 gap-6">
            {filteredSections.map((section) => (
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
                <button className="flex items-center space-x-1 text-primary font-medium hover:text-primary/80 transition-colors">
                  <span>Explorar</span>
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
          
          {filteredSections.length === 0 && searchTerm && (
            <div className="text-center py-12 bg-white rounded-xl shadow-sm">
              <MessageSquare className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Nenhum resultado encontrado</h3>
              <p className="text-gray-600 mb-4">
                Tente usar termos diferentes ou navegue pelas seções abaixo.
              </p>
              <button 
                onClick={() => setSearchTerm('')}
                className="text-primary font-medium hover:text-primary/80"
              >
                Limpar busca
              </button>
            </div>
          )}
        </div>

        {/* API Example */}
        <div className="bg-white rounded-xl shadow-sm p-8 mt-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-heading font-bold text-gray-900">
              Exemplo de API
            </h2>
            <button 
              onClick={() => {
                const code = `curl -X POST https://api.whatsapp-saas.com/v1/messages/send \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "to": "5511999999999",
    "message": "Olá! Como está?",
    "type": "text"
  }'`;
                navigator.clipboard.writeText(code);
              }}
              className="flex items-center space-x-2 px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-md text-sm text-gray-700 transition-colors"
              title="Copiar código"
            >
              <Download className="h-4 w-4" />
              <span>Copiar</span>
            </button>
          </div>
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
          <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-2">💡 Dica</h4>
            <p className="text-blue-800 text-sm">
              Substitua <code className="bg-blue-100 px-1 rounded">YOUR_API_KEY</code> pela sua chave de API que você pode encontrar no painel de controle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;