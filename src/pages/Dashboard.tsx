import { useState } from 'react';
import { 
  BarChart3, 
  Users, 
  MessageSquare, 
  TrendingUp,
  Bell,
  Settings,
  Search,
  Plus,
  Filter,
  Download
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    {
      title: 'Conversas Ativas',
      value: '1,234',
      change: '+12%',
      changeType: 'positive',
      icon: MessageSquare
    },
    {
      title: 'Taxa de Conversão',
      value: '23.5%',
      change: '+2.1%',
      changeType: 'positive',
      icon: TrendingUp
    },
    {
      title: 'Contatos Total',
      value: '45,678',
      change: '+186',
      changeType: 'positive',
      icon: Users
    },
    {
      title: 'Campanhas Ativas',
      value: '12',
      change: '+3',
      changeType: 'positive',
      icon: BarChart3
    }
  ];

  const recentConversations = [
    {
      id: 1,
      name: 'Maria Silva',
      message: 'Gostaria de saber mais sobre os planos...',
      time: '5 min atrás',
      status: 'novo',
      priority: 'alta'
    },
    {
      id: 2,
      name: 'João Santos',
      message: 'Quando posso agendar uma demo?',
      time: '12 min atrás',
      status: 'em_andamento',
      priority: 'media'
    },
    {
      id: 3,
      name: 'Ana Costa',
      message: 'Preciso de ajuda com a integração...',
      time: '1h atrás',
      status: 'aguardando',
      priority: 'baixa'
    }
  ];

  const campaigns = [
    {
      id: 1,
      name: 'Black Friday 2024',
      status: 'ativa',
      sent: 5420,
      opened: 3124,
      clicked: 892,
      openRate: '57.6%'
    },
    {
      id: 2,
      name: 'Abandono Carrinho',
      status: 'pausada',
      sent: 2341,
      opened: 1456,
      clicked: 234,
      openRate: '62.2%'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-heading font-bold text-gray-900">
                Dashboard
              </h1>
              <p className="text-gray-600">
                Bem-vindo de volta! Aqui está o resumo da sua conta.
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Exportar
              </Button>
              <Button size="sm" className="btn-primary">
                <Plus className="h-4 w-4 mr-2" />
                Nova Campanha
              </Button>
              <button className="p-2 text-gray-600 hover:text-gray-900">
                <Bell className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-900">
                <Settings className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
          <nav className="p-6">
            <div className="space-y-2">
              <button 
                onClick={() => setActiveTab('overview')}
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                  activeTab === 'overview' ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                📊 Visão Geral
              </button>
              <button 
                onClick={() => setActiveTab('conversations')}
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                  activeTab === 'conversations' ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                💬 Conversas
              </button>
              <button 
                onClick={() => setActiveTab('campaigns')}
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                  activeTab === 'campaigns' ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                📢 Campanhas
              </button>
              <button 
                onClick={() => setActiveTab('contacts')}
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                  activeTab === 'contacts' ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                👥 Contatos
              </button>
              <button 
                onClick={() => setActiveTab('chatbot')}
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                  activeTab === 'chatbot' ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                🤖 Chatbot
              </button>
              <button 
                onClick={() => setActiveTab('analytics')}
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                  activeTab === 'analytics' ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                📈 Analytics
              </button>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Stats Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <stat.icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className={`text-sm font-medium ${
                        stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {stat.change}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      {stat.value}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {stat.title}
                    </p>
                  </div>
                ))}
              </div>

              {/* Recent Conversations */}
              <div className="bg-white rounded-xl shadow-sm">
                <div className="border-b border-gray-200 p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Conversas Recentes
                    </h3>
                    <Button variant="outline" size="sm">
                      Ver Todas
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {recentConversations.map((conversation) => (
                      <div key={conversation.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                            <span className="text-primary font-semibold">
                              {conversation.name.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">
                              {conversation.name}
                            </h4>
                            <p className="text-sm text-gray-600 truncate max-w-xs">
                              {conversation.message}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-500">{conversation.time}</p>
                          <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                            conversation.status === 'novo' ? 'bg-red-100 text-red-800' :
                            conversation.status === 'em_andamento' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {conversation.status.replace('_', ' ')}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'campaigns' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-heading font-bold text-gray-900">
                  Campanhas
                </h2>
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Buscar campanhas..."
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filtros
                  </Button>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left py-3 px-6 font-semibold text-gray-900">Campanha</th>
                      <th className="text-left py-3 px-6 font-semibold text-gray-900">Status</th>
                      <th className="text-left py-3 px-6 font-semibold text-gray-900">Enviadas</th>
                      <th className="text-left py-3 px-6 font-semibold text-gray-900">Abertas</th>
                      <th className="text-left py-3 px-6 font-semibold text-gray-900">Taxa Abertura</th>
                      <th className="text-left py-3 px-6 font-semibold text-gray-900">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {campaigns.map((campaign) => (
                      <tr key={campaign.id} className="border-t border-gray-200 hover:bg-gray-50">
                        <td className="py-4 px-6">
                          <div className="font-medium text-gray-900">{campaign.name}</div>
                        </td>
                        <td className="py-4 px-6">
                          <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                            campaign.status === 'ativa' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                          }`}>
                            {campaign.status}
                          </span>
                        </td>
                        <td className="py-4 px-6 text-gray-600">{campaign.sent.toLocaleString()}</td>
                        <td className="py-4 px-6 text-gray-600">{campaign.opened.toLocaleString()}</td>
                        <td className="py-4 px-6 text-gray-600">{campaign.openRate}</td>
                        <td className="py-4 px-6">
                          <Button variant="outline" size="sm">
                            Ver Detalhes
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Placeholder for other tabs */}
          {activeTab !== 'overview' && activeTab !== 'campaigns' && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
              </h3>
              <p className="text-gray-600">
                Esta seção está em desenvolvimento. Em breve você terá acesso a todas as funcionalidades.
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;