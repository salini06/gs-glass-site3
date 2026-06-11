import { ChevronRight, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PortfolioGallery from '@/components/PortfolioGallery';
import { useState, useEffect } from 'react';


export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroImages = [
    'https://d2xsxph8kpxj0f.cloudfront.net/310519663323771497/Uhd6pDGkHbqnUZLoGMBmqL/hero-carousel-3-bathroom-glass-KaJutZ92ChvbHTjrCoTWA9.webp',
    'https://d2xsxph8kpxj0f.cloudfront.net/310519663323771497/Uhd6pDGkHbqnUZLoGMBmqL/hero-carousel-4-glass-doors-3Bv3DLNtfhYuTRUoSeHXXE.webp',
    'https://d2xsxph8kpxj0f.cloudfront.net/310519663323771497/Uhd6pDGkHbqnUZLoGMBmqL/hero-carousel-5-glass-office-HhH6UrBEVeGAgTKm2ZmyFG.webp'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section with Carousel - SEO Otimizado */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Carousel Background */}
        <div className="absolute inset-0 w-full h-full">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={`Serviço de vidraçaria ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-32">
          <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h1 className="text-white text-5xl md:text-6xl font-bold mb-4 leading-tight">
              Box de Vidro, Sacadas e Esquadrias Premium em São Paulo
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light mb-6">
              Soluções Profissionais com 20+ Anos de Experiência | Orçamento Gratuito
            </p>

            <div className="flex gap-4 pt-4">
              <a
                href="https://wa.me/5511934275767"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-primary px-8 py-3 rounded font-semibold hover:bg-opacity-90 transition-all flex items-center gap-2"
              >
                Solicitar Orçamento Gratuito no WhatsApp
                <ChevronRight size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide
                  ? 'bg-white w-8'
                  : 'bg-white/50 w-2 hover:bg-white/75'
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Sobre Nós - SEO Otimizado */}
      <section id="sobre" className="py-20 md:py-32 bg-white animate-in fade-in slide-in-from-bottom-8 duration-1000" style={{paddingBottom: '65px'}}>
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
                    <h3 className="font-semibold text-primary">20+ Anos de Experiência</h3>
                    <p className="text-foreground/70">Consolidada no setor vidreiro com expertise comprovada</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-primary">Equipe Especializada</h3>
                    <p className="text-foreground/70">Profissionais qualificados com atuação comprovada em projetos complexos</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-primary">Sistemas Avançados</h3>
                    <p className="text-foreground/70">Domínio em vidro temperado, laminado e soluções especiais</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-primary">100+ Obras Realizadas</h3>
                    <p className="text-foreground/70">Projetos em residências, comerciais e industriais de alto padrão</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfólio - SEO Otimizado */}
      <section id="portfolio" className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white animate-in fade-in slide-in-from-bottom-8 duration-1000" style={{paddingBottom: '14px', paddingTop: '59px'}}>
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



      {/* Diferenciais - SEO Otimizado */}
      <section id="diferenciais" className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white animate-in fade-in slide-in-from-bottom-8 duration-1000" style={{paddingTop: '62px', paddingBottom: '80px'}}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              Diferenciais GS Glass
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left Side - Box Verde */}
            <div className="bg-primary text-primary-foreground p-8 rounded-lg" style={{paddingBottom: '38px', minHeight: '600px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
              <h3 className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">
                Experiência do Cliente
              </h3>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Mais controlo, segurança e transparência
              </h2>
              <p className="text-primary-foreground/90 mb-8 leading-relaxed">
                Acompanhamento claro, personalização livre e garantias pensadas para dar tranquilidade antes, durante e depois da obra.
              </p>
              <div className="border-t border-primary-foreground/20 pt-6">
                <p className="text-sm text-primary-foreground/80 leading-relaxed">
                  Processo organizado para reduzir dúvidas, evitar surpresas e manter o projeto alinhado do orçamento à entrega final.
                </p>
              </div>
            </div>

            {/* Right Side - Grid 2x3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Item 01 */}
              <div className="border border-gray-200 p-6 rounded-lg">
                <span className="text-accent font-bold text-2xl mb-2 block">01</span>
                <h3 className="text-xl font-bold text-primary mb-2">WhatsApp automático</h3>
                <p className="text-foreground/70 text-sm">
                  Robô de atualização informa a evolução de cada etapa do projeto.
                </p>
              </div>

              {/* Item 02 */}
              <div className="border border-gray-200 p-6 rounded-lg">
                <span className="text-accent font-bold text-2xl mb-2 block">02</span>
                <h3 className="text-xl font-bold text-primary mb-2">Transparência total</h3>
                <p className="text-foreground/70 text-sm">
                  Valores, prazos e materiais definidos com clareza antes da execução.
                </p>
              </div>

              {/* Item 03 */}
              <div className="border border-gray-200 p-6 rounded-lg">
                <span className="text-accent font-bold text-2xl mb-2 block">03</span>
                <h3 className="text-xl font-bold text-primary mb-2">Personalização livre</h3>
                <p className="text-foreground/70 text-sm">
                  Medidas, acabamentos, sistemas e estética ajustados ao projeto.
                </p>
              </div>

              {/* Item 04 */}
              <div className="border border-gray-200 p-6 rounded-lg">
                <span className="text-accent font-bold text-2xl mb-2 block">04</span>
                <h3 className="text-xl font-bold text-primary mb-2">Garantia de 5 anos</h3>
                <p className="text-foreground/70 text-sm">
                  Cobertura contra quebra do vidro, conforme condições contratadas.
                </p>
              </div>

              {/* Item 05 */}
              <div className="border border-gray-200 p-6 rounded-lg">
                <span className="text-accent font-bold text-2xl mb-2 block">05</span>
                <h3 className="text-xl font-bold text-primary mb-2">Plano pós-garantia</h3>
                <p className="text-foreground/70 text-sm">
                  Opção de acompanhamento após o prazo inicial de garantia de 1 ano.
                </p>
              </div>

              {/* Item 06 */}
              <div className="border border-gray-200 p-6 rounded-lg">
                <span className="text-accent font-bold text-2xl mb-2 block">06</span>
                <h3 className="text-xl font-bold text-primary mb-2">Atendimento ampliado</h3>
                <p className="text-foreground/70 text-sm">
                  Suporte em qualquer horário e gestão técnica documentada do projeto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Processo de Trabalho - SEO Otimizado */}
      <section className="py-20 md:py-32 bg-white animate-in fade-in slide-in-from-bottom-8 duration-1000" style={{paddingTop: '8px', paddingBottom: '24px'}}>
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
      <section className="py-20 md:py-32 bg-white animate-in fade-in slide-in-from-bottom-8 duration-1000" style={{paddingTop: '54px'}}>
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

          {/* Featured Articles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: 'Guia Completo: Como Escolher o Melhor Box de Vidro',
                category: 'Box de Vidro',
                readTime: '8 min',
                excerpt: 'Descubra os tipos de vidro, tamanhos, acabamentos e dicas de manutenção para escolher o box perfeito.',
                link: '/blog/guia-box-vidro'
              },
              {
                title: 'Box de Vidro Temperado vs. Laminado: Qual é Melhor?',
                category: 'Vidro Temperado',
                readTime: '10 min',
                excerpt: 'Comparação completa entre vidro temperado e laminado: diferenças, vantagens e desvantagens.',
                link: '/blog/vidro-temperado-vs-laminado'
              },
              {
                title: 'Fechamento de Sacada em Osasco: Ganhe Espaço e Conforto',
                category: 'Sacada',
                readTime: '9 min',
                excerpt: 'Tudo sobre fechamento de sacadas com vidro. Opções, preços, instalação e benefícios.',
                link: '/blog/fechamento-sacada-osasco'
              }
            ].map((article, index) => (
              <a
                key={index}
                href={article.link}
                className="group bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-accent font-semibold text-xs uppercase bg-accent/10 px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-foreground/60 text-xs">{article.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-foreground/70 text-sm mb-6 line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all">
                  Ler Artigo
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>

          {/* Blog CTA */}
          <div className="text-center">
            <a
              href="/blog"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded font-semibold hover:shadow-lg transition-all"
            >
              Explorar Todos os Artigos
              <ChevronRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Final - SEO Otimizado */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary via-primary to-primary/95">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Vamos Construir Juntos
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Entre em contato e descubra como a GS Glass pode transformar seu projeto com soluções premium em vidro. Atendimento especializado em São Paulo, Granja Viana, Osasco, Alphaville e região.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a
              href="https://wa.me/5511934275767"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary px-8 py-4 rounded font-semibold hover:bg-opacity-90 transition-all flex items-center gap-2"
            >
              Solicitar Orçamento via WhatsApp
              <ChevronRight size={20} />
            </a>
            <a
              href="mailto:guilhermesalini@gsglassbrasil.com.br?subject=Solicita%C3%A7%C3%A3o%20de%20Or%C3%A7amento%20-%20GS%20Glass&body=Ol%C3%A1%2C%0A%0AGostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20meu%20projeto%20de%20vidra%C3%A7aria.%0A%0AAtenciosamente"
              className="bg-white text-primary px-8 py-4 rounded font-semibold hover:bg-opacity-90 transition-all flex items-center gap-2"
            >
              Enviar E-mail Profissional
              <ChevronRight size={20} />
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <a href="https://wa.me/5511934275767" target="_blank" rel="noopener noreferrer" className="bg-white text-primary p-8 rounded-lg hover:shadow-lg transition-all cursor-pointer">
              <div className="text-lg font-bold mb-2">📱 WhatsApp</div>
              <div className="text-primary hover:underline font-semibold">
                11 93427-5767
              </div>
              <p className="text-sm mt-2">Atendimento direto e ágil para orçamentos e consultas técnicas</p>
            </a>
            <a href="mailto:guilhermesalini@gsglassbrasil.com.br" className="bg-white text-primary p-8 rounded-lg hover:shadow-lg transition-all cursor-pointer">
              <div className="text-lg font-bold mb-2">📧 E-mail</div>
              <div className="text-primary hover:underline font-semibold">
                guilhermesalini@gsglassbrasil.com.br
              </div>
              <p className="text-sm mt-2">Contato profissional para projetos e parcerias estratégicas</p>
            </a>
          </div>
        </div>
      </section>

      {/* Blog CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary/95 to-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Dúvidas Sobre Vidraçaria?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Confira nosso blog com artigos completos sobre tipos de vidro, manutenção, instalação, preços e muito mais. Conteúdo técnico e prático para ajudar você a tomar a melhor decisão.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a
                href="/blog"
                className="bg-white text-primary px-8 py-4 rounded font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                Acessar Blog
                <ChevronRight size={20} />
              </a>
              <a
                href="https://wa.me/5511934275767"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-primary px-8 py-4 rounded font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                Falar com Especialista
                <ChevronRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
