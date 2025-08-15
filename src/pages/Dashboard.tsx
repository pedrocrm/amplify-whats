import React from 'react';
import { BarChart3, Users, MessageSquare, TrendingUp, Settings } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    {
      title: 'Conversas Ativas',
      value: '1,234',
      change: '+12%',
      icon: MessageSquare
    },
    {
      title: 'Taxa de Conversão',
      value: '23.5%',
      change: '+2.1%',
      icon: TrendingUp
    },
    {
      title: 'Contatos Total',
      value: '45,678',
      change: '+186',
      icon: Users
    },
    {
      title: 'Campanhas Ativas',
      value: '12',
      change: '+3',
      icon: BarChart3
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
              <button className="p-2 text-gray-600 hover:text-gray-900 rounded-lg">
                <Settings className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="p-6">
        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <stat.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-green-600">
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

        {/* Content Area */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-xl font-heading font-semibold text-gray-900 mb-4">
            Visão Geral
          </h2>
          <p className="text-gray-600">
            Esta é uma versão simplificada do dashboard. Todas as funcionalidades 
            estão sendo desenvolvidas e estarão disponíveis em breve.
          </p>
          
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Conversas Recentes</h3>
              <p className="text-gray-600 text-sm">
                Sistema de chat em desenvolvimento
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Campanhas Ativas</h3>
              <p className="text-gray-600 text-sm">
                Sistema de campanhas em desenvolvimento
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;