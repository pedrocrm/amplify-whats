import { Check, Star, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: 'Starter',
    price: 'R$ 97',
    period: '/mês',
    description: 'Ideal para pequenas empresas que estão começando',
    popular: false,
    features: [
      '1 WhatsApp conectado',
      'Até 1.000 contatos',
      'Chatbot básico',
      '500 disparos/mês',
      'Suporte por email',
      'Relatórios básicos'
    ],
    limitations: [
      'Sem extração de contatos',
      'Sem API'
    ]
  },
  {
    name: 'Professional',
    price: 'R$ 197',
    period: '/mês',
    description: 'Para empresas em crescimento que precisam de mais recursos',
    popular: true,
    features: [
      '3 WhatsApp conectados',
      'Até 10.000 contatos',
      'Chatbot com IA (GPT)',
      '5.000 disparos/mês',
      'Multiatendimento',
      'Extração de contatos',
      'CRM completo',
      'API básica',
      'Suporte prioritário',
      'Analytics avançado'
    ],
    limitations: []
  },
  {
    name: 'Enterprise',
    price: 'R$ 497',
    period: '/mês',
    description: 'Solução completa para grandes empresas',
    popular: false,
    features: [
      'WhatsApp ilimitados',
      'Contatos ilimitados',
      'Chatbot IA avançado',
      'Disparos ilimitados',
      'Multiatendimento completo',
      'Extração avançada',
      'CRM personalizado',
      'API completa + Webhooks',
      'Suporte 24/7',
      'Relatórios customizados',
      'White-label',
      'Gerente dedicado'
    ],
    limitations: []
  }
];

const PricingSection = () => {
  return (
    <section id="precos" className="bg-gray-50 section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
            Planos que Crescem com{' '}
            <span className="gradient-text">Seu Negócio</span>
          </h2>
          <p className="text-xl text-gray-600">
            Escolha o plano ideal para sua empresa. Todos os planos incluem 14 dias grátis 
            e podem ser cancelados a qualquer momento.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center mt-8 bg-white rounded-xl p-1 max-w-xs mx-auto">
            <button className="flex-1 py-2 px-4 text-sm font-medium bg-primary text-white rounded-lg">
              Mensal
            </button>
            <button className="flex-1 py-2 px-4 text-sm font-medium text-gray-600">
              Anual <span className="text-green-600">(-20%)</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                plan.popular 
                  ? 'border-primary shadow-lg' 
                  : 'border-gray-200'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="h-4 w-4" />
                    <span>Mais Popular</span>
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-heading font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 ml-1">
                      {plan.period}
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                  
                  {plan.limitations.map((limitation, limitationIndex) => (
                    <div key={limitationIndex} className="flex items-start space-x-3 opacity-60">
                      <div className="h-5 w-5 flex-shrink-0 mt-0.5 flex items-center justify-center">
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      </div>
                      <span className="text-gray-600 line-through">{limitation}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  className={`w-full ${
                    plan.popular 
                      ? 'btn-hero' 
                      : plan.name === 'Enterprise' 
                        ? 'btn-secondary' 
                        : 'btn-outline'
                  }`}
                >
                  {plan.name === 'Enterprise' ? 'Falar com Vendas' : 'Começar Grátis'}
                  {plan.popular && <Zap className="ml-2 h-4 w-4" />}
                </Button>

                {plan.name !== 'Enterprise' && (
                  <p className="text-center text-sm text-gray-500 mt-3">
                    14 dias grátis • Sem cartão de crédito
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* FAQ or Additional Info */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            Precisa de um plano customizado ou tem dúvidas sobre os recursos?
          </p>
          <Button variant="outline" className="btn-outline">
            Falar com Especialista
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;