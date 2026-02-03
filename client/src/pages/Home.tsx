import { ChevronRight, CheckCircle, Users, Zap } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PortfolioCarousel from '@/components/PortfolioCarousel';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 bg-gradient-to-br from-primary via-primary to-primary/95">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div>
                <h1 className="text-primary-foreground text-5xl md:text-6xl font-bold mb-4">
                  GS Glass Brasil
                </h1>
                <p className="text-xl md:text-2xl text-primary-foreground/90 font-light">
                  Soluções Profissionais em Vidro
                </p>
              </div>
              <p className="text-lg text-primary-foreground/80 leading-relaxed">
                Residencial • Comercial • Industrial
              </p>
              <p className="text-base text-primary-foreground/75 leading-relaxed max-w-md">
                Mais de 100 obras realizadas com excelência técnica, segurança absoluta e acabamento de alto padrão.
              </p>
              <div className="flex gap-4 pt-4">
                <a
                  href="https://wa.me/5511934275767"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent text-primary px-8 py-3 rounded font-semibold hover:bg-opacity-90 transition-all flex items-center gap-2"
                >
                  Solicitar Orçamento
                  <ChevronRight size={20} />
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="relative h-96 md:h-full rounded-lg overflow-hidden shadow-2xl hover:shadow-none transition-shadow duration-300">
              <img
                src="/images/hero-glass-facade.jpg"
                alt="Fachada de vidro premium"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Nós */}
      <section id="sobre" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative h-96 md:h-full rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="/images/bathroom-box-premium.jpg"
                alt="Box de banheiro premium"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <span className="text-accent font-semibold text-sm uppercase tracking-widest">
                  Excelência em Soluções de Vidro
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-primary mt-4">
                  Sobre Nós
                </h2>
              </div>

              <p className="text-lg text-foreground/80 leading-relaxed">
                A GS Glass é referência em soluções completas em vidro para projetos residenciais, comerciais e industriais. Nossa atuação se fundamenta em quatro pilares essenciais: qualidade superior, segurança absoluta, precisão técnica e acabamento de alto padrão.
              </p>

              <p className="text-lg text-foreground/80 leading-relaxed">
                Atendemos clientes que buscam não apenas funcionalidade, mas também sofisticação e durabilidade em cada detalhe de seus projetos.
              </p>

              {/* Features */}
              <div className="space-y-4 pt-4">
                <div className="flex gap-3 items-start">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-foreground">20+ Anos de Experiência</h4>
                    <p className="text-foreground/70">Consolidada no setor vidreiro</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-foreground">Equipe Especializada</h4>
                    <p className="text-foreground/70">Profissionais qualificados com atuação comprovada</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-foreground">Sistemas Avançados</h4>
                    <p className="text-foreground/70">Domínio em vidro temperado, laminado e soluções especiais</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfólio */}
      <section id="portfolio" className="py-20 md:py-32 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">
              Portfólio Visual
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mt-4 mb-6">
              Qualidade Comprovada
            </h2>
            <p className="text-lg text-foreground/80 max-w-3xl">
              Nosso portfólio reúne uma seleção de projetos executados ao longo de mais de <strong>100 obras realizadas</strong>, refletindo nosso compromisso contínuo com a qualidade técnica, o rigor na execução e o cuidado com o acabamento final.
            </p>
          </div>

          {/* Portfolio Carousel */}
          <PortfolioCarousel />

          <div className="mt-12 p-6 bg-white rounded-lg border border-gray-200">
            <p className="text-foreground/80">
              As imagens apresentadas representam apenas uma <strong>amostra dos trabalhos</strong> desenvolvidos pela GS Glass. Mediante solicitação, disponibilizamos <strong>outras referências, bem como registros adicionais em fotos e vídeos</strong>, para validação da nossa experiência e capacidade técnica.
            </p>
          </div>
        </div>
      </section>

      {/* Soluções */}
      <section id="solucoes" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Soluções Completas em Vidro
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Box de Banheiro Sob Medida',
                desc: 'Projetos personalizados com precisão milimétrica e acabamento superior'
              },
              {
                title: 'Espelhos de Alto Padrão',
                desc: 'Peças exclusivas que agregam sofisticação a ambientes residenciais e comerciais'
              },
              {
                title: 'Portas e Divisórias',
                desc: 'Sistemas completos em vidro para integração arquitetônica elegante'
              },
              {
                title: 'Vidros Temperados',
                desc: 'Máxima segurança e resistência com certificação técnica'
              },
              {
                title: 'Vidros Laminados',
                desc: 'Proteção avançada e controle acústico para projetos exigentes'
              },
              {
                title: 'Projetos Personalizados',
                desc: 'Soluções exclusivas desenvolvidas conforme especificações técnicas do cliente'
              },
            ].map((sol, idx) => (
              <div key={idx} className="p-6 border-l-4 border-accent bg-primary/5 rounded">
                <h3 className="text-xl font-bold text-primary mb-2">{sol.title}</h3>
                <p className="text-foreground/80">{sol.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 md:py-32 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">
              Diferenciais
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mt-4">
              O Padrão GS Glass
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users size={32} />,
                title: 'Atendimento Técnico Especializado',
                desc: 'Consultoria completa desde o projeto até a instalação final'
              },
              {
                icon: <CheckCircle size={32} />,
                title: 'Materiais Certificados',
                desc: 'Produtos homologados que atendem às normas técnicas mais rigorosas'
              },
              {
                icon: <Zap size={32} />,
                title: 'Parceiros Homologados',
                desc: 'Rede de fornecedores qualificados garantindo excelência em cada etapa'
              },
              {
                icon: <CheckCircle size={32} />,
                title: 'Instalação Profissional',
                desc: 'Equipe técnica experiente assegurando perfeição no acabamento'
              },
              {
                icon: <Zap size={32} />,
                title: 'Cumprimento de Prazos',
                desc: 'Compromisso rigoroso com cronogramas e entregas pontuais'
              },
              {
                icon: <CheckCircle size={32} />,
                title: 'Alto Padrão de Acabamento',
                desc: 'Atenção meticulosa aos detalhes em cada projeto executado'
              },
            ].map((item, idx) => (
              <div key={idx} className="p-8 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-accent mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-foreground/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Compromisso com a Excelência
            </h2>
            <p className="text-lg text-foreground/80 max-w-3xl">
              Cada projeto GS Glass é executado com precisão técnica absoluta, utilizando materiais premium e processos rigorosos de qualidade. Transformamos visões arquitetônicas em realidade com segurança, elegância e durabilidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                num: '01',
                title: 'Consultoria Inicial',
                desc: 'Análise técnica detalhada'
              },
              {
                num: '02',
                title: 'Projeto Personalizado',
                desc: 'Desenvolvimento sob medida'
              },
              {
                num: '03',
                title: 'Execução Impecável',
                desc: 'Instalação profissional'
              },
              {
                num: '04',
                title: 'Garantia Total',
                desc: 'Suporte continuado'
              },
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="text-6xl font-bold text-accent/20 mb-4">{step.num}</div>
                <h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3>
                <p className="text-foreground/70">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="contato" className="py-20 md:py-32 bg-primary">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground">
              Vamos Construir Juntos
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Entre em contato e descubra como a GS Glass pode transformar seu projeto com soluções premium em vidro.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto pt-8">
              <a
                href="https://wa.me/5511934275767"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-primary p-8 rounded-lg hover:shadow-lg transition-all"
              >
                <div className="text-3xl font-bold mb-2">11 93427-5767</div>
                <p className="text-sm">Atendimento direto e ágil para orçamentos e consultas técnicas</p>
              </a>
              <a
                href="mailto:orcamento.gsglass@gmail.com"
                className="bg-white text-primary p-8 rounded-lg hover:shadow-lg transition-all"
              >
                <div className="text-lg font-bold mb-2">orcamento.gsglass@gmail.com</div>
                <p className="text-sm">Contato profissional para projetos e parcerias estratégicas</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
