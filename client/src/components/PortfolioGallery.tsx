import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface PortfolioItem {
  id: string;
  title: string;
  category: 'residencial' | 'industrial';
  image: string;
  description: string;
}

const portfolioItems: PortfolioItem[] = [
  // RESIDENCIAL
  {
    id: 'res-02',
    title: 'Box de Banheiro',
    category: 'residencial',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663323771497/Uhd6pDGkHbqnUZLoGMBmqL/residencial-02-box-banheiro-premium-6wBVxq6iUEhz6BM3btdvqQ.webp',
    description: 'Boxes personalizados com vidro temperado e acabamento sofisticado'
  },
  {
    id: 'res-03',
    title: 'Esquadrias Elegantes',
    category: 'residencial',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663323771497/Uhd6pDGkHbqnUZLoGMBmqL/residencial-03-esquadrias-premium-9w3Y4DPbvW3XankzrYaB8e.webp',
    description: 'Esquadrias de alumínio com vidro de alto desempenho'
  },
  {
    id: 'res-04',
    title: 'Guarda-Corpo em Vidro',
    category: 'residencial',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663323771497/Uhd6pDGkHbqnUZLoGMBmqL/residencial-04-guarda-corpo-premium-LmGQ2jfViTFLV2KPyWF2CD.webp',
    description: 'Guarda-corpos em vidro temperado com acabamento premium'
  },
  {
    id: 'res-05',
    title: 'Cobertura de Vidro',
    category: 'residencial',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663323771497/Uhd6pDGkHbqnUZLoGMBmqL/residencial-05-cobertura-vidro-premium-3VRgbVDFMLzvcXfng3CHqp.webp',
    description: 'Coberturas em vidro laminado com estrutura elegante'
  },
  {
    id: 'res-06',
    title: 'Espelhos Premium',
    category: 'residencial',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663323771497/Uhd6pDGkHbqnUZLoGMBmqL/residencial-06-espelhos-premium-QD5mXs7UR53dECAAtHdcGD.webp',
    description: 'Espelhos de alto padrão com acabamento sofisticado'
  },
  {
    id: 'res-07',
    title: 'Divisórias Internas',
    category: 'residencial',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663323771497/Uhd6pDGkHbqnUZLoGMBmqL/residencial-07-divisorias-premium-5vpV6wZwUgg5jt8ocGaDr2.webp',
    description: 'Divisórias em vidro para ambientes integrados'
  },

  // INDUSTRIAL
  {
    id: 'ind-01',
    title: 'Fachada Corporativa',
    category: 'industrial',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663323771497/Uhd6pDGkHbqnUZLoGMBmqL/industrial-01-fachada-new-6nRenHCtnV7wPiaY8Zeeqe.webp',
    description: 'Fachadas de vidro estruturado para edifícios corporativos'
  },
  {
    id: 'ind-02',
    title: 'Esquadrias Comerciais',
    category: 'industrial',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663323771497/Uhd6pDGkHbqnUZLoGMBmqL/industrial-02-esquadrias-new-irkjxBxEFh4JXKVNQkLChm.webp',
    description: 'Sistemas de esquadrias para ambientes comerciais'
  },
  {
    id: 'ind-03',
    title: 'Fechamento Corporativo',
    category: 'industrial',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663323771497/Uhd6pDGkHbqnUZLoGMBmqL/industrial-03-fechamento-new-k4QR2YYCfvkbTpa9gsGxAA.webp',
    description: 'Fechamentos em vidro para áreas comerciais'
  },
  {
    id: 'ind-04',
    title: 'Guarda-Corpo Corporativo',
    category: 'industrial',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663323771497/Uhd6pDGkHbqnUZLoGMBmqL/industrial-04-guarda-corpo-new-nsQWi94rbyanyPo9vnMfPN.webp',
    description: 'Guarda-corpos em vidro para ambientes corporativos'
  },
  {
    id: 'ind-05',
    title: 'Projetos Especiais',
    category: 'industrial',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663323771497/Uhd6pDGkHbqnUZLoGMBmqL/industrial-05-projetos-especiais-new-LELj687GVUW5VPRoa4GPbV.webp',
    description: 'Soluções customizadas para projetos especiais'
  },
  {
    id: 'ind-06',
    title: 'Pele de Vidro',
    category: 'industrial',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663323771497/Uhd6pDGkHbqnUZLoGMBmqL/industrial-06-pele-vidro-new-cmEkprEZ4Zk2JGC3sEBs9P.webp',
    description: 'Fachadas em vidro estruturado de alta performance'
  },
  {
    id: 'ind-07',
    title: 'Portas Automáticas',
    category: 'industrial',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663323771497/Uhd6pDGkHbqnUZLoGMBmqL/industrial-07-portas-automaticas-new-HAVkGXmyprRgJaZwThGRpg.webp',
    description: 'Sistemas de portas automáticas para entradas corporativas'
  },
  {
    id: 'ind-08',
    title: 'Divisórias Corporativas',
    category: 'industrial',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663323771497/Uhd6pDGkHbqnUZLoGMBmqL/industrial-08-divisorias-new-fi65DbVqV4NRtZ99rmXuAc.webp',
    description: 'Divisórias em vidro para espaços corporativos'
  },
  {
    id: 'ind-09',
    title: 'Coberturas Industriais',
    category: 'industrial',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663323771497/Uhd6pDGkHbqnUZLoGMBmqL/industrial-09-coberturas-new-8N7SAfYjb2e5TQWFVkRdhN.webp',
    description: 'Estruturas de cobertura em vidro e alumínio'
  }
];

export default function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState<'residencial' | 'industrial'>('residencial');

  const filteredItems = portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-white to-slate-50" style={{paddingTop: '50px'}}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Qualidade Comprovada
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Mais de 100 obras realizadas. Cada projeto é uma demonstração de nossa excelência técnica e compromisso com a qualidade.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveCategory('residencial')}
            className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeCategory === 'residencial'
                ? 'bg-primary text-white shadow-lg'
                : 'bg-white text-primary border-2 border-primary hover:bg-slate-50'
            }`}
          >
            Residencial
          </button>
          <button
            onClick={() => setActiveCategory('industrial')}
            className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeCategory === 'industrial'
                ? 'bg-primary text-white shadow-lg'
                : 'bg-white text-primary border-2 border-primary hover:bg-slate-50'
            }`}
          >
            Industrial & Comercial
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="portfolio-item group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer h-80"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay - Removed */}

              {/* Border accent - Removed */}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-600 mb-6">
            Quer conhecer mais sobre nossos projetos?
          </p>
          <a
            href="https://wa.me/5511934275767"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-semibold"
          >
            Solicitar Orçamento
            <ChevronRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
