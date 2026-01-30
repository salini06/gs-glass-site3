import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselItem {
  image: string;
  title: string;
  desc: string;
}

const portfolioItems: CarouselItem[] = [
  {
    image: '/images/obra-1.jpg',
    title: 'Vidros Certificados',
    desc: 'Utilização de vidros certificados e sistemas adequados para cada aplicação'
  },
  {
    image: '/images/obra-2.jpg',
    title: 'Espelhos Premium',
    desc: 'Medições técnicas e instalação alinhada ao projeto arquitetônico'
  },
  {
    image: '/images/obra-3.jpg',
    title: 'Conformidade Técnica',
    desc: 'Projetos executados conforme normas técnicas e exigências do local'
  },
];

export default function PortfolioCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % portfolioItems.length);
    }, 5000); // Muda a cada 5 segundos

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? portfolioItems.length - 1 : prev - 1
    );
    setIsAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % portfolioItems.length);
    setIsAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
  };

  const currentItem = portfolioItems[currentIndex];

  return (
    <div className="relative w-full">
      {/* Main Carousel */}
      <div className="relative h-96 md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-2xl bg-gray-100">
        {/* Image */}
        <img
          src={currentItem.image}
          alt={currentItem.title}
          className="w-full h-full object-cover transition-opacity duration-500"
        />

        {/* Overlay com informações */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-6 md:p-8">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
            {currentItem.title}
          </h3>
          <p className="text-white/90 text-base md:text-lg">
            {currentItem.desc}
          </p>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300"
          aria-label="Slide anterior"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300"
          aria-label="Próximo slide"
        >
          <ChevronRight size={24} />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {portfolioItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'bg-accent w-8 h-3'
                  : 'bg-white/50 hover:bg-white/70 w-3 h-3'
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Counter */}
      <div className="mt-6 text-center text-foreground/70 text-sm">
        <span className="font-semibold text-accent">{currentIndex + 1}</span> de{' '}
        <span className="font-semibold">{portfolioItems.length}</span>
      </div>
    </div>
  );
}
