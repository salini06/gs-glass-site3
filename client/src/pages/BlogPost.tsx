import { ChevronLeft, Calendar, User, Share2, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useRoute, Link } from 'wouter';

const blogArticles: Record<string, any> = {
  'guia-box-vidro': {
    title: 'Guia Completo: Como Escolher o Melhor Box de Vidro para Seu Banheiro',
    metaDescription: 'Descubra os tipos de vidro, tamanhos, acabamentos e dicas de manutenção para escolher o box perfeito para seu banheiro.',
    date: '2026-06-08',
    author: 'GS Glass Brasil',
    category: 'Box de Vidro',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663323771497/Uhd6pDGkHbqnUZLoGMBmqL/bathroom-box-premium-new-mqqqBYj7VorjysL4rBSPov.webp',
    readTime: '8 min',
    relatedPosts: ['vidro-temperado-vs-laminado', 'manutencao-box-vidro'],
    content: `
      <h1>Guia Completo: Como Escolher o Melhor Box de Vidro para Seu Banheiro</h1>
      
      <p>O box de vidro é um elemento essencial em banheiros modernos. Além de funcional, ele adiciona sofisticação e elegância ao ambiente. Mas com tantas opções disponíveis, como escolher o melhor box para seu banheiro? Neste guia completo, vamos explorar todos os aspectos para ajudá-lo a tomar a melhor decisão.</p>

      <h2>1. Tipos de Vidro para Box</h2>
      
      <p>Existem três tipos principais de vidro utilizados em boxes:</p>

      <h3>Vidro Temperado</h3>
      <p>O vidro temperado é o mais popular para boxes de banheiro. Ele passa por um processo de aquecimento e resfriamento rápido que o torna muito mais resistente do que o vidro comum. Principais características:</p>
      <ul>
        <li>Resistência 5x maior que vidro comum</li>
        <li>Segurança: quebra em pequenos pedaços sem arestas cortantes</li>
        <li>Certificação NBR 7199</li>
        <li>Preço moderado</li>
      </ul>

      <h3>Vidro Laminado</h3>
      <p>O vidro laminado é composto por duas ou mais camadas de vidro unidas por uma película de polivinil. Oferece maior segurança e isolamento acústico:</p>
      <ul>
        <li>Máxima segurança (não se quebra facilmente)</li>
        <li>Isolamento acústico superior</li>
        <li>Proteção UV</li>
        <li>Preço mais elevado</li>
      </ul>

      <h3>Vidro Comum (Não Temperado)</h3>
      <p>Menos recomendado para banheiros, pois oferece menor segurança e durabilidade. Não é certificado para essa aplicação.</p>

      <h2>2. Acabamentos e Designs</h2>
      
      <p>Além do tipo de vidro, você pode escolher diferentes acabamentos que afetam a aparência e funcionalidade:</p>

      <h3>Vidro Transparente</h3>
      <p>O acabamento clássico que oferece visibilidade total. Ideal para banheiros pequenos, pois amplia visualmente o espaço. Requer limpeza frequente para manter a transparência.</p>

      <h3>Vidro Fumê</h3>
      <p>Oferece privacidade parcial com um tom acinzentado elegante. Menos exigente em limpeza e adiciona sofisticação. Perfeito para banheiros em suítes.</p>

      <h3>Vidro Jateado</h3>
      <p>Proporciona privacidade total com textura fosca. Muito elegante e sofisticado. Requer limpeza regular para evitar acúmulo de sujeira.</p>

      <h3>Vidro Espelhado</h3>
      <p>Combina funcionalidade de espelho com privacidade. Ideal para banheiros pequenos que ganham profundidade visual.</p>

      <h2>3. Tamanhos e Medidas</h2>
      
      <p>Os boxes de vidro vêm em tamanhos padrão ou podem ser personalizados:</p>

      <h3>Tamanhos Padrão</h3>
      <ul>
        <li>70cm x 70cm (pequeno)</li>
        <li>80cm x 80cm (médio)</li>
        <li>90cm x 90cm (grande)</li>
        <li>100cm x 100cm (extra grande)</li>
      </ul>

      <h3>Boxes Personalizados</h3>
      <p>Se seu banheiro tem dimensões especiais, a GS Glass oferece boxes sob medida com precisão milimétrica. Isso garante um encaixe perfeito e acabamento impecável.</p>

      <h2>4. Sistemas de Fechamento</h2>
      
      <p>O sistema de fechamento afeta tanto a funcionalidade quanto a estética:</p>

      <h3>Portas Pivotantes</h3>
      <p>Giram sobre um eixo central. Elegantes e modernas, ocupam mais espaço ao abrir.</p>

      <h3>Portas Deslizantes</h3>
      <p>Deslizam sobre trilhos. Ideais para banheiros pequenos, pois economizam espaço.</p>

      <h3>Portas Frameless</h3>
      <p>Sem molduras, oferecem visual minimalista e sofisticado. Requerem vidro mais espesso para estabilidade.</p>

      <h2>5. Manutenção e Limpeza</h2>
      
      <p>A manutenção adequada prolonga a vida útil do seu box:</p>

      <h3>Limpeza Regular</h3>
      <ul>
        <li>Limpe 2-3 vezes por semana com água morna e sabão neutro</li>
        <li>Use pano macio ou esponja não abrasiva</li>
        <li>Seque com toalha para evitar manchas de água</li>
      </ul>

      <h3>Produtos Recomendados</h3>
      <ul>
        <li>Álcool isopropílico (remove manchas de água)</li>
        <li>Vinagre branco diluído (desinfeta naturalmente)</li>
        <li>Limpa vidros comercial (para limpeza profunda)</li>
      </ul>

      <h3>Evite</h3>
      <ul>
        <li>Produtos abrasivos ou corrosivos</li>
        <li>Palha de aço ou esponjas ásperas</li>
        <li>Água muito quente</li>
      </ul>

      <h2>6. Preços e Orçamento</h2>
      
      <p>O preço de um box de vidro varia conforme:</p>
      <ul>
        <li>Tipo de vidro (temperado é mais barato que laminado)</li>
        <li>Tamanho (boxes maiores custam mais)</li>
        <li>Acabamento (jateado e espelhado têm custo adicional)</li>
        <li>Sistema de fechamento (frameless é mais caro)</li>
        <li>Instalação (profissional vs. DIY)</li>
      </ul>

      <p>Para um box padrão 80x80 com vidro temperado transparente, o preço varia entre R$ 800 a R$ 1.500. Boxes personalizados podem custar de R$ 1.500 a R$ 3.000+.</p>

      <h2>7. Dicas Finais para Escolher</h2>
      
      <ul>
        <li><strong>Meça bem:</strong> Tome medidas precisas do seu banheiro antes de encomendar</li>
        <li><strong>Considere o espaço:</strong> Banheiros pequenos se beneficiam de vidro transparente e portas deslizantes</li>
        <li><strong>Pense na privacidade:</strong> Se preferir privacidade, escolha vidro fumê ou jateado</li>
        <li><strong>Qualidade é importante:</strong> Invista em vidro temperado certificado (NBR 7199)</li>
        <li><strong>Instalação profissional:</strong> Contrate profissionais qualificados para garantir segurança e acabamento perfeito</li>
      </ul>

      <h2>Conclusão</h2>
      
      <p>Escolher o melhor box de vidro para seu banheiro envolve considerar tipo de vidro, acabamento, tamanho, sistema de fechamento e manutenção. A GS Glass oferece soluções personalizadas com vidro temperado certificado e acabamento de alto padrão. Entre em contato conosco para uma consultoria gratuita e orçamento sem compromisso.</p>

      <div class="cta-box">
        <h3>Quer um Box de Vidro Personalizado?</h3>
        <p>A GS Glass oferece boxes sob medida com qualidade premium. Solicite seu orçamento gratuito agora mesmo!</p>
        <a href="https://wa.me/5511934275767" target="_blank" rel="noopener noreferrer" class="cta-button">Solicitar Orçamento via WhatsApp</a>
      </div>
    `
  }
};

const allPosts = [
  { id: 'guia-box-vidro', title: 'Guia Completo: Como Escolher o Melhor Box de Vidro' },
  { id: 'vidro-temperado-vs-laminado', title: 'Box de Vidro Temperado vs. Laminado' },
  { id: 'fechamento-sacada-osasco', title: 'Fechamento de Sacada em Osasco' },
  { id: 'manutencao-box-vidro', title: 'Manutenção de Box de Vidro' },
  { id: 'preço-box-vidro-2026', title: 'Quanto Custa um Box de Vidro?' }
];

export default function BlogPost() {
  const [match, params] = useRoute('/blog/:id');
  
  if (!match) return null;
  
  const article = blogArticles[params?.id];
  
  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">Artigo não encontrado</h1>
          <Link href="/blog">
            <a className="text-accent font-semibold hover:underline">Voltar ao Blog</a>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedArticles = article.relatedPosts 
    ? allPosts.filter(p => article.relatedPosts.includes(p.id))
    : [];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pt-48 md:pb-20 bg-gradient-to-br from-primary via-primary to-primary/95">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-primary-foreground/70 mb-8 text-sm">
            <Link href="/">
              <a className="hover:text-primary-foreground transition-colors">Home</a>
            </Link>
            <span>/</span>
            <Link href="/blog">
              <a className="hover:text-primary-foreground transition-colors">Blog</a>
            </Link>
            <span>/</span>
            <span className="text-primary-foreground font-semibold">{article.category}</span>
          </div>

          {/* Back Button */}
          <Link href="/blog">
            <a className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors">
              <ChevronLeft size={20} />
              Voltar ao Blog
            </a>
          </Link>
          
          <h1 className="text-primary-foreground text-4xl md:text-5xl font-bold mb-6">
            {article.title}
          </h1>
          
          <div className="flex flex-wrap gap-6 text-primary-foreground/80">
            <span className="flex items-center gap-2">
              <Calendar size={18} />
              {new Date(article.date).toLocaleDateString('pt-BR')}
            </span>
            <span className="flex items-center gap-2">
              <User size={18} />
              {article.author}
            </span>
            <span className="text-accent font-semibold bg-accent/20 px-3 py-1 rounded">
              {article.category}
            </span>
            <span>{article.readTime}</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-96 object-cover rounded-lg mb-12 shadow-lg"
              />
              
              <article 
                className="prose prose-lg max-w-none prose-headings:text-primary prose-a:text-accent prose-strong:text-primary prose-p:leading-relaxed prose-p:text-foreground/80 prose-headings:mt-8 prose-headings:mb-4 prose-ul:my-6 prose-li:my-2 prose-blockquote:border-l-4 prose-blockquote:border-accent prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-foreground/70"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* CTA Box */}
              <div className="my-16 p-8 md:p-12 bg-gradient-to-r from-accent/10 to-accent/5 border-l-4 border-accent rounded-lg">
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">Quer um Box de Vidro Personalizado?</h3>
                <p className="text-lg text-foreground/80 mb-6">
                  A GS Glass oferece boxes sob medida com qualidade premium. Solicite seu orçamento gratuito agora mesmo!
                </p>
                <a
                  href="https://wa.me/5511934275767"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-accent text-primary px-8 py-3 rounded font-semibold hover:shadow-lg transition-all"
                >
                  Solicitar Orçamento via WhatsApp
                </a>
              </div>

              {/* Related Articles */}
              {relatedArticles.length > 0 && (
                <div className="mt-16 pt-12 border-t border-gray-200">
                  <h3 className="text-2xl font-bold text-primary mb-8">Artigos Relacionados</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {relatedArticles.map((post) => (
                      <Link key={post.id} href={`/blog/${post.id}`}>
                        <a className="group bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all">
                          <h4 className="font-semibold text-primary group-hover:text-accent transition-colors mb-3 line-clamp-2">
                            {post.title}
                          </h4>
                          <div className="flex items-center gap-2 text-accent font-semibold">
                            Ler artigo
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                          </div>
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Share */}
              <div className="bg-gray-50 p-6 rounded-lg sticky top-32">
                <h3 className="font-bold text-primary mb-4 flex items-center gap-2">
                  <Share2 size={20} />
                  Compartilhar
                </h3>
                <div className="space-y-3">
                  <a href="#" className="block text-accent hover:underline font-semibold">
                    → Facebook
                  </a>
                  <a href="#" className="block text-accent hover:underline font-semibold">
                    → LinkedIn
                  </a>
                  <a href="#" className="block text-accent hover:underline font-semibold">
                    → WhatsApp
                  </a>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-primary to-primary/95 text-primary-foreground p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Precisa de Ajuda?</h3>
                <p className="mb-6 text-primary-foreground/80">
                  Converse com nossos especialistas sobre sua necessidade.
                </p>
                <a
                  href="https://wa.me/5511934275767"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white text-primary px-6 py-3 rounded font-semibold text-center hover:bg-opacity-90 transition-all"
                >
                  Solicitar Consultoria
                </a>
              </div>

              {/* Table of Contents */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-primary mb-4">Índice</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="text-accent hover:underline">1. Tipos de Vidro para Box</a></li>
                  <li><a href="#" className="text-accent hover:underline">2. Acabamentos e Designs</a></li>
                  <li><a href="#" className="text-accent hover:underline">3. Tamanhos e Medidas</a></li>
                  <li><a href="#" className="text-accent hover:underline">4. Sistemas de Fechamento</a></li>
                  <li><a href="#" className="text-accent hover:underline">5. Manutenção e Limpeza</a></li>
                </ul>
              </div>

              {/* Newsletter */}
              <div className="bg-accent/10 border border-accent p-6 rounded-lg">
                <h3 className="font-bold text-primary mb-3">Newsletter</h3>
                <p className="text-sm text-foreground/70 mb-4">
                  Receba dicas exclusivas sobre vidraçaria.
                </p>
                <form className="space-y-2">
                  <input
                    type="email"
                    placeholder="Seu e-mail"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-accent text-sm"
                  />
                  <button
                    type="submit"
                    className="w-full bg-accent text-white px-3 py-2 rounded font-semibold hover:bg-opacity-90 transition-all text-sm"
                  >
                    Inscrever
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
