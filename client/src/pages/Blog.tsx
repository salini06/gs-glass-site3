import { ChevronRight, Calendar, User, Search, Filter } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'wouter';
import { useState, useMemo } from 'react';

const allBlogPosts = [
  {
    id: 'vidro-laminado-vs-temperado-completo',
    title: 'Vidro Laminado vs. Temperado: Qual Escolher? Guia Completo com Segurança, Preço e Aplicações',
    excerpt: 'Comparação completa entre vidro laminado e temperado. Aprenda sobre segurança, cores, preços, aplicações e cuidados essenciais na logística.',
    date: '2026-06-14',
    author: 'GS Glass',
    category: 'Vidro Temperado',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663323771497/Uhd6pDGkHbqnUZLoGMBmqL/blog-esquadrias-aluminio-L7UypcbbStsLkmQDmwtmhT.webp',
    readTime: '12 min'
  },
  {
    id: 'guia-box-vidro',
    title: 'Guia Completo: Como Escolher o Melhor Box de Vidro para Seu Banheiro',
    excerpt: 'Descubra os tipos de vidro, tamanhos, acabamentos e dicas de manutenção para escolher o box perfeito para seu banheiro.',
    date: '2026-06-08',
    author: 'GS Glass',
    category: 'Box de Vidro',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663323771497/Uhd6pDGkHbqnUZLoGMBmqL/blog-box-vidro-profissional-eDcKJTrRtDnqSb7H8qeyYr.webp',
    readTime: '8 min'
  },
  {
    id: 'vidro-temperado-vs-laminado',
    title: 'Box de Vidro Temperado vs. Laminado: Qual é Melhor?',
    excerpt: 'Comparação completa entre vidro temperado e laminado: diferenças, vantagens, desvantagens e preços.',
    date: '2026-06-07',
    author: 'GS Glass',
    category: 'Vidro Temperado',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663323771497/Uhd6pDGkHbqnUZLoGMBmqL/blog-esquadrias-aluminio-L7UypcbbStsLkmQDmwtmhT.webp',
    readTime: '10 min'
  },
  {
    id: 'fechamento-sacada-osasco',
    title: 'Fechamento de Sacada em Osasco: Ganhe Espaço e Conforto',
    excerpt: 'Tudo sobre fechamento de sacadas com vidro em Osasco. Opções, preços, instalação e benefícios.',
    date: '2026-06-06',
    author: 'GS Glass',
    category: 'Sacada',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663323771497/Uhd6pDGkHbqnUZLoGMBmqL/blog-pele-vidro-ZDLyVN5s8GiSutRoGEou75.webp',
    readTime: '9 min'
  },
  {
    id: 'manutencao-box-vidro',
    title: 'Manutenção de Box de Vidro: Dicas para Manter Sempre Limpo e Brilhante',
    excerpt: 'Guia prático de limpeza e manutenção de box de vidro. Produtos recomendados, técnicas e frequência.',
    date: '2026-06-05',
    author: 'GS Glass',
    category: 'Manutenção',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663323771497/Uhd6pDGkHbqnUZLoGMBmqL/blog-espelhos-premium-U87csnwp4PWPDZz59Y6jmu.webp',
    readTime: '6 min'
  },
  {
    id: 'preço-box-vidro-2026',
    title: 'Quanto Custa um Box de Vidro? Tabela de Preços 2026',
    excerpt: 'Tabela completa de preços para box de vidro. Fatores que influenciam o preço e como fazer orçamento.',
    date: '2026-06-04',
    author: 'GS Glass',
    category: 'Preços',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663323771497/Uhd6pDGkHbqnUZLoGMBmqL/blog-divisorias-vidro-hya3kFtNTHo9hqoEiMGbWS.webp',
    readTime: '7 min'
  }
];

const categories = ['Todos', 'Box de Vidro', 'Sacada', 'Esquadrias', 'Espelhos', 'Vidro Temperado', 'Manutenção', 'Preços'];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  // Filtrar posts
  const filteredPosts = useMemo(() => {
    return allBlogPosts.filter(post => {
      const matchesCategory = selectedCategory === 'Todos' || post.category === selectedCategory;
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  // Paginação
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  // Reset página ao mudar filtros
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

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
              {/* Search Bar */}
              <div className="mb-12 relative">
                <Search className="absolute left-4 top-3.5 text-foreground/40" size={20} />
                <input
                  type="text"
                  placeholder="Buscar artigos..."
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-accent"
                />
              </div>

              {/* Posts List */}
              {paginatedPosts.length > 0 ? (
                <div className="space-y-12">
              {paginatedPosts.map((post) => (
                <article key={post.id} className="border-b border-gray-200 pb-12 mb-8 hover:shadow-xl transition-all rounded-lg p-8 bg-gradient-to-br from-gray-50 to-white border border-gray-100">
                      <div className="flex flex-col md:flex-row gap-6">
                        {/* Image */}
                        <div className="md:w-1/3 flex-shrink-0">
                          <Link href={`/blog/${post.id}`}>
                            <img
                              src={post.image}
                              alt={post.title}
                              className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                            />
                          </Link>
                        </div>

                        {/* Content */}
                        <div className="md:w-2/3 space-y-4">
                          {/* Meta */}
                          <div className="flex flex-wrap gap-4 text-sm text-foreground/60">
                            <span className="flex items-center gap-1">
                              <Calendar size={16} />
                              {new Date(post.date).toLocaleDateString('pt-BR')}
                            </span>
                            <span className="flex items-center gap-1">{post.readTime}</span>
                            <span className="text-accent font-semibold bg-accent/15 px-3 py-1 rounded-full text-xs">
                              {post.category}
                            </span>
                          </div>

                          {/* Title */}
                          <h2 className="text-2xl md:text-3xl font-bold text-primary hover:text-accent transition-colors line-clamp-2">
                            <Link href={`/blog/${post.id}`}>
                              <span className="cursor-pointer">{post.title}</span>
                            </Link>
                          </h2>

                          {/* Excerpt */}
                          <p className="text-foreground/70 leading-relaxed line-clamp-3">
                            {post.excerpt}
                          </p>

                          {/* CTA */}
                          <Link href={`/blog/${post.id}`}>
                            <span className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all group cursor-pointer">
                              Ler Artigo Completo
                              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-foreground/60 text-lg">Nenhum artigo encontrado para sua busca.</p>
                </div>
              )}

              {/* Paginação */}
              {totalPages > 1 && (
                <div className="flex justify-center gap-2 mt-12">
                  <button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Anterior
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-4 py-2 rounded ${
                        currentPage === page
                          ? 'bg-primary text-primary-foreground'
                          : 'border border-gray-300 hover:bg-gray-100'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  <button
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Próximo
                  </button>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Categories Filter */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                  <Filter size={20} />
                  Categorias
                </h3>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategoryChange(category)}
                      className={`block w-full text-left px-4 py-2 rounded transition-all ${
                        selectedCategory === category
                          ? 'bg-accent text-white font-semibold'
                          : 'text-foreground/70 hover:text-accent hover:bg-gray-100'
                      }`}
                    >
                      {category}
                      <span className="float-right text-sm">
                        {category === 'Todos' 
                          ? allBlogPosts.length 
                          : allBlogPosts.filter(p => p.category === category).length}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Popular Posts */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-primary mb-6">Artigos Populares</h3>
                <div className="space-y-4">
                  {allBlogPosts.slice(0, 3).map((post) => (
                    <Link key={post.id} href={`/blog/${post.id}`}>
                      <a className="block group">
                        <p className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors line-clamp-2">
                          {post.title}
                        </p>
                        <p className="text-xs text-foreground/60 mt-1">{post.readTime}</p>
                      </a>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-accent/10 border border-accent p-8 rounded-lg">
                <h3 className="text-lg font-bold text-primary mb-4">Newsletter</h3>
                <p className="text-sm text-foreground/70 mb-4">
                  Receba dicas e artigos exclusivos sobre vidraçaria direto no seu e-mail.
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Seu e-mail"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-accent text-sm"
                  />
                  <button
                    type="submit"
                    className="w-full bg-accent text-white px-4 py-2 rounded font-semibold hover:bg-opacity-90 transition-all text-sm"
                  >
                    Inscrever-se
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
