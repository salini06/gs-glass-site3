import { ChevronRight, Calendar, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'wouter';

const blogPosts = [
  {
    id: 'guia-box-vidro',
    title: 'Guia Completo: Como Escolher o Melhor Box de Vidro para Seu Banheiro',
    excerpt: 'Descubra os tipos de vidro, tamanhos, acabamentos e dicas de manutenção para escolher o box perfeito para seu banheiro.',
    date: '2026-06-08',
    author: 'GS Glass',
    category: 'Box de Vidro',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663323771497/Uhd6pDGkHbqnUZLoGMBmqL/bathroom-box-premium-new-mqqqBYj7VorjysL4rBSPov.webp',
    readTime: '8 min'
  },
  {
    id: 'vidro-temperado-vs-laminado',
    title: 'Box de Vidro Temperado vs. Laminado: Qual é Melhor?',
    excerpt: 'Comparação completa entre vidro temperado e laminado: diferenças, vantagens, desvantagens e preços.',
    date: '2026-06-07',
    author: 'GS Glass',
    category: 'Vidro Temperado',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663323771497/Uhd6pDGkHbqnUZLoGMBmqL/residencial-03-esquadrias-premium.jpg',
    readTime: '10 min'
  },
  {
    id: 'fechamento-sacada-osasco',
    title: 'Fechamento de Sacada em Osasco: Ganhe Espaço e Conforto',
    excerpt: 'Tudo sobre fechamento de sacadas com vidro em Osasco. Opções, preços, instalação e benefícios.',
    date: '2026-06-06',
    author: 'GS Glass',
    category: 'Sacada',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663323771497/Uhd6pDGkHbqnUZLoGMBmqL/residencial-01-sacada-premium.jpg',
    readTime: '9 min'
  },
  {
    id: 'manutencao-box-vidro',
    title: 'Manutenção de Box de Vidro: Dicas para Manter Sempre Limpo e Brilhante',
    excerpt: 'Guia prático de limpeza e manutenção de box de vidro. Produtos recomendados, técnicas e frequência.',
    date: '2026-06-05',
    author: 'GS Glass',
    category: 'Manutenção',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663323771497/Uhd6pDGkHbqnUZLoGMBmqL/residencial-02-box-banheiro-premium.jpg',
    readTime: '6 min'
  },
  {
    id: 'preço-box-vidro-2026',
    title: 'Quanto Custa um Box de Vidro? Tabela de Preços 2026',
    excerpt: 'Tabela completa de preços para box de vidro. Fatores que influenciam o preço e como fazer orçamento.',
    date: '2026-06-04',
    author: 'GS Glass',
    category: 'Preços',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663323771497/Uhd6pDGkHbqnUZLoGMBmqL/residencial-04-guarda-corpo-premium.jpg',
    readTime: '7 min'
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 bg-gradient-to-br from-primary via-primary to-primary/95">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-primary-foreground text-5xl md:text-6xl font-bold mb-6">
              Blog GS Glass
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 font-light mb-4">
              Dicas, Guias e Informações sobre Vidraçaria
            </p>
            <p className="text-lg text-primary-foreground/80">
              Artigos profissionais sobre tipos de vidro, manutenção, instalação e soluções para residências, comerciais e industriais.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Posts */}
            <div className="lg:col-span-2">
              <div className="space-y-12">
                {blogPosts.map((post) => (
                  <article key={post.id} className="border-b border-gray-200 pb-12 hover:shadow-lg transition-shadow rounded-lg p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Image */}
                      <div className="md:w-1/3 flex-shrink-0">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* Content */}
                      <div className="md:w-2/3">
                        <div className="flex gap-4 mb-3 text-sm text-foreground/60">
                          <span className="flex items-center gap-1">
                            <Calendar size={16} />
                            {new Date(post.date).toLocaleDateString('pt-BR')}
                          </span>
                          <span>{post.readTime}</span>
                          <span className="text-accent font-semibold">{post.category}</span>
                        </div>

                        <h2 className="text-2xl font-bold text-primary mb-3 hover:text-accent transition-colors">
                          <Link href={`/blog/${post.id}`}>
                            <a>{post.title}</a>
                          </Link>
                        </h2>

                        <p className="text-foreground/70 mb-4 leading-relaxed">
                          {post.excerpt}
                        </p>

                        <Link href={`/blog/${post.id}`}>
                          <a className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all">
                            Ler Artigo Completo
                            <ChevronRight size={18} />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* CTA */}
              <div className="bg-gradient-to-br from-primary to-primary/95 text-primary-foreground p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4">Precisa de Ajuda?</h3>
                <p className="mb-6 text-primary-foreground/80">
                  Não encontrou o que procurava? Entre em contato com nossos especialistas.
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

              {/* Categories */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-primary mb-6">Categorias</h3>
                <div className="space-y-3">
                  {['Box de Vidro', 'Sacada', 'Esquadrias', 'Espelhos', 'Vidro Temperado', 'Manutenção'].map((category) => (
                    <a
                      key={category}
                      href="#"
                      className="block text-foreground/70 hover:text-accent transition-colors"
                    >
                      {category}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
