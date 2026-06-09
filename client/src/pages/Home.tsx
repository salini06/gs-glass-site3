import { ChevronRight, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PortfolioGallery from '@/components/PortfolioGallery';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section - Com Imagem de Fundo e Animações */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{
        backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663323771497/Uhd6pDGkHbqnUZLoGMBmqL/hero-glass-installation-work-gRqmbv2nyxWBfXLzFTUd8S.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        {/* Overlay escuro com gradiente */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
        
        {/* Conteúdo com animações */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8 animate-fadeIn">
            {/* Título principal com animação */}
            <div className="space-y-4">
              <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight" style={{
                animation: 'slideUp 0.8s ease-out'
              }}>
                Box de Vidro, Sacadas e Esquadrias Premium em São Paulo
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 font-light" style={{
                animation: 'slideUp 0.8s ease-out 0.2s both'
              }}>
                Soluções Profissionais com 20+ Anos de Experiência
              </p>
            </div>

            {/* Descrição com animação */}
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto" style={{
              animation: 'slideUp 0.8s ease-out 0.4s both'
            }}>
              A GS Glass Brasil é especialista em soluções completas de vidraçaria para residências, comerciais e industriais em São Paulo. Mais de 100 projetos realizados com excelência técnica, segurança absoluta e acabamento de alto padrão.
            </p>

            {/* CTAs com animação */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6" style={{
              animation: 'slideUp 0.8s ease-out 0.6s both'
            }}>
              <a
                href="https://wa.me/5511934275767"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-primary px-8 py-4 rounded font-semibold hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 hover:scale-105 transform"
              >
                Solicitar Orçamento Gratuito
                <ChevronRight size={20} />
              </a>
              <a
                href="#portfolio"
                className="border-2 border-accent text-accent px-8 py-4 rounded font-semibold hover:bg-accent hover:text-primary transition-all flex items-center justify-center gap-2 hover:scale-105 transform"
              >
                Ver Portfólio
                <ChevronRight size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Indicador de scroll com animação */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10" style={{
          animation: 'bounce 2s infinite'
        }}>
          <div className="text-white text-center">
            <p className="text-sm mb-2">Deslize para explorar</p>
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>

        {/* Estilos de animação */}
        <style>{`
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }

          .animate-fadeIn {
            animation: fadeIn 0.6s ease-out;
          }
        `}</style>
      </section>

      {/* Sobre Nós - SEO Otimizado */}
      <section id="sobre" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative h-96 md:h-full rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663323771497/Uhd6pDGkHbqnUZLoGMBmqL/bathroom-box-premium-new-mqqqBYj7VorjysL4rBSPov.webp"
                alt="Box de banheiro premium sob medida com vidro temperado - GS Glass"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <span className="text-accent font-semibold text-sm uppercase tracking-widest">
                  Referência em Vidraçaria Premium
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-primary mt-4">
                  Por Que Escolher a GS Glass?
                </h2>
              </div>

              <p className="text-lg text-foreground/80 leading-relaxed">
                A GS Glass Brasil é referência consolidada em soluções profissionais de vidraçaria para projetos residenciais, comerciais e industriais em São Paulo e região metropolitana. Com mais de 20 anos de experiência, 100+ obras realizadas e equipe especializada, somos parceiros confiáveis de arquitetos, construtoras e proprietários que buscam qualidade técnica, segurança absoluta e sofisticação em cada projeto.
              </p>

              <p className="text-lg text-foreground/80 leading-relaxed">
                Nossa atuação se fundamenta em quatro pilares essenciais: qualidade superior com materiais certificados, segurança absoluta seguindo rigorosamente as normas técnicas brasileiras NBR 7199 e NBR 7208, precisão técnica com equipe especializada em vidro temperado e laminado, e acabamento de alto padrão em cada detalhe. Atendemos clientes que buscam não apenas funcionalidade, mas também sofisticação, durabilidade e segurança em cada projeto.
              </p>

              {/* Features */}
              <div className="space-y-4 pt-4">
                <div className="flex gap-3 items-start">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-foreground">20+ Anos de Experiência</h3>
                    <p className="text-foreground/70">Consolidada no setor vidreiro com expertise comprovada</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-foreground">Equipe Especializada</h3>
                    <p className="text-foreground/70">Profissionais qualificados com atuação comprovada em projetos complexos</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-foreground">Sistemas Avançados</h3>
                    <p className="text-foreground/70">Domínio em vidro temperado, laminado e soluções especiais</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-foreground">100+ Obras Realizadas</h3>
                    <p className="text-foreground/70">Projetos em residências, comerciais e industriais de alto padrão</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfólio - SEO Otimizado */}
      <section id="portfolio" className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">
              Portfólio Visual
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mt-4 mb-6">
              Qualidade Comprovada: 100+ Obras Realizadas
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Nosso portfólio reúne uma seleção de projetos executados ao longo de mais de 100 obras realizadas, refletindo nosso compromisso contínuo com a qualidade técnica, o rigor na execução e o cuidado com o acabamento final. Cada projeto é uma demonstração de nossa excelência técnica e compromisso com a qualidade.
            </p>
          </div>

          <PortfolioGallery />

          <div className="text-center mt-12">
            <p className="text-foreground/70 mb-6">
              As imagens apresentadas representam apenas uma amostra dos trabalhos desenvolvidos pela GS Glass. Mediante solicitação, disponibilizamos outras referências, bem como registros adicionais em fotos e vídeos, para validação da nossa experiência e capacidade técnica.
            </p>
          </div>
        </div>
      </section>

      {/* Soluções - SEO Otimizado */}
      <section id="solucoes" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">
              Soluções Completas
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mt-4">
              Soluções Profissionais em Vidro
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Box de Banheiro */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary mb-3">Box de Banheiro Sob Medida</h3>
              <p className="text-foreground/70 mb-4">
                Projetos personalizados de box de vidro temperado com precisão milimétrica e acabamento de alto padrão. Utilizamos vidro temperado certificado (NBR 7199), perfis de alumínio anodizado e sistemas de fechamento sofisticados. Disponímos de opções em vidro transparente, fumê, jateado e espelhado. Ideal para banheiros residenciais e comerciais que buscam durabilidade, segurança e design moderno.
              </p>
              <ul className="text-sm text-foreground/60 space-y-2">
                <li>✓ Vidro temperado certificado</li>
                <li>✓ Acabamento impecável</li>
                <li>✓ Medidas personalizadas</li>
              </ul>
            </div>

            {/* Espelhos Premium */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary mb-3">Espelhos Decorativos Premium</h3>
              <p className="text-foreground/70 mb-4">
                Espelhos decorativos sob medida que agregam sofisticação e funcionalidade a ambientes residenciais e comerciais. Oferecemos espelhos premium com molduras elegantes, acabamento de alto padrão e opções de iluminação integrada com LED. Perfeitos para banheiros luxuosos, salas de estar, closets e espaços comerciais que buscam design diferenciado e durabilidade.
              </p>
              <ul className="text-sm text-foreground/60 space-y-2">
                <li>✓ Designs exclusivos</li>
                <li>✓ Molduras elegantes</li>
                <li>✓ Iluminação opcional</li>
              </ul>
            </div>

            {/* Portas e Divisórias */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary mb-3">Portas e Divisórias</h3>
              <p className="text-foreground/70 mb-4">
                Sistemas completos em vidro para integração arquitetônica elegante. Portas de vidro, divisórias internas e soluções de integração de ambientes. Perfeito para residências modernas e espaços comerciais que buscam sofisticação.
              </p>
              <ul className="text-sm text-foreground/60 space-y-2">
                <li>✓ Integração de ambientes</li>
                <li>✓ Design moderno</li>
                <li>✓ Sistemas de fechamento suave</li>
              </ul>
            </div>

            {/* Vidros Temperados */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary mb-3">Vidros Temperados Certificados</h3>
              <p className="text-foreground/70 mb-4">
                Vidros temperados com máxima segurança, resistência e certificação técnica completa. Utilizados em sacadas, fachadas, guarda-corpos, divisórias e aplicações estruturais. Todos os produtos seguem rigorosamente as normas técnicas brasileiras NBR 7199 e certificações internacionais. Oferecem resistência a impactos, segurança em caso de quebra e durabilidade garantida.
              </p>
              <ul className="text-sm text-foreground/60 space-y-2">
                <li>✓ Certificação NBR 7199</li>
                <li>✓ Alta resistência</li>
                <li>✓ Segurança garantida</li>
              </ul>
            </div>

            {/* Vidros Laminados */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary mb-3">Vidros Laminados com Isolamento</h3>
              <p className="text-foreground/70 mb-4">
                Vidros laminados com proteção avançada e controle acústico para projetos exigentes. Utilizados em fachadas, coberturas e aplicações que requerem isolamento acústico superior. Certificação NBR 7208, proteção UV e desempenho técnico comprovado.
              </p>
              <ul className="text-sm text-foreground/60 space-y-2">
                <li>✓ Isolamento acústico</li>
                <li>✓ Proteção UV</li>
                <li>✓ Certificação NBR 7208</li>
              </ul>
            </div>

            {/* Projetos Personalizados */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary mb-3">Projetos Personalizados</h3>
              <p className="text-foreground/70 mb-4">
                Soluções exclusivas desenvolvidas conforme especificações técnicas do cliente. Desde projetos residenciais até fachadas corporativas complexas. Consultoria técnica completa desde o projeto até a instalação final.
              </p>
              <ul className="text-sm text-foreground/60 space-y-2">
                <li>✓ Consultoria técnica</li>
                <li>✓ Projetos customizados</li>
                <li>✓ Execução profissional</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais - SEO Otimizado */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary to-primary/95">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              O Padrão GS Glass
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Compromisso com a Excelência em Cada Projeto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Atendimento Técnico Especializado',
                description: 'Consultoria completa desde o projeto até a instalação final. Profissionais qualificados para orientar sobre as melhores soluções.'
              },
              {
                title: 'Materiais Certificados',
                description: 'Produtos homologados que atendem às normas técnicas mais rigorosas. NBR 7199, NBR 7208 e certificações internacionais.'
              },
              {
                title: 'Parceiros Homologados',
                description: 'Rede de fornecedores qualificados garantindo excelência em cada etapa. Qualidade garantida em toda a cadeia produtiva.'
              },
              {
                title: 'Instalação Profissional',
                description: 'Equipe técnica experiente assegurando perfeição no acabamento. Precisão milimétrica em cada instalação.'
              },
              {
                title: 'Cumprimento de Prazos',
                description: 'Compromisso rigoroso com cronogramas e entregas pontuais. Planejamento eficiente para sua tranquilidade.'
              },
              {
                title: 'Alto Padrão de Acabamento',
                description: 'Atenção meticulosa aos detalhes em cada projeto executado. Excelência visual e funcional garantidas.'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:bg-white/20 transition-colors">
                <h3 className="text-xl font-bold text-primary-foreground mb-3">{item.title}</h3>
                <p className="text-primary-foreground/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo de Trabalho - SEO Otimizado */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">
              Como Funciona
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mt-4">
              Processo de Trabalho
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                number: '01',
                title: 'Consultoria Inicial',
                description: 'Consultoria técnica gratuita e análise detalhada do seu projeto de vidraçaria. Nossos especialistas entendem suas necessidades, avaliam o espaço e apresentam as melhores soluções em vidro temperado, laminado ou personalizado. Sem compromisso, com orientação profissional.'
              },
              {
                number: '02',
                title: 'Projeto Personalizado',
                description: 'Desenvolvimento de projeto personalizado sob medida conforme suas especificações técnicas e preferências de design. Apresentamos proposta detalhada com orçamento transparente, cronograma de execução e garantia de qualidade. Consultoria completa até a aprovação final.'
              },
              {
                number: '03',
                title: 'Execução Impecável',
                description: 'Instalação profissional com precisão técnica absoluta e equipe especializada. Acompanhamento rigoroso de qualidade em cada etapa da execução. Utilizamos equipamentos modernos, técnicas avançadas e materiais certificados para garantir acabamento impecável e segurança total.'
              },
              {
                number: '04',
                title: 'Garantia Total',
                description: 'Garantia de qualidade completa após a instalação com suporte técnico permanente. Oferecemos atendimento pós-venda especializado, manutenção orientada e suporte para qualquer dúvida ou necessidade. Sua satisfação é nossa prioridade.'
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-accent mb-4">{step.number}</div>
                <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                <p className="text-foreground/70">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">
              Blog: Guias e Dicas
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mt-4">
              Guias Completos Sobre Vidraçaria e Soluções em Vidro
            </h2>
            <p className="text-xl text-foreground/70 mt-6 max-w-3xl mx-auto">
              Confira nosso blog com conteúdo técnico, educativo e prático sobre tipos de vidro (temperado, laminado, jateado), manutenção profissional, instalação correta, comparações de soluções e muito mais. Artigos especializados para ajudá-lo a tomar as melhores decisões para seu projeto residencial ou comercial.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
