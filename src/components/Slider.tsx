import { useState } from "react";

type Slider = {
  src: string;
  alt: string;
};

type SliderProps = {
  slides: Slider[];
  title?: string;
};

export function Slider({ slides, title }: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (slides.length === 0) {
    return null;
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  const goToNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  const currentSlide = slides[currentIndex] ?? slides[0];

  return (
    <section className="relative w-full">
      {title ? <h2 className="font-smooch text-[8vw] text-[#4f74bf] mt-8 mr-4 mb-2 ml-0">{title}</h2> : null}

      <img key={currentIndex} className="w-full h-auto object-cover transition-opacity duration-5000" src={currentSlide.src} alt={currentSlide.alt} />

      <button type="button" aria-label="Forrige billede" onClick={goToPrevious} className="absolute left-2 top-1/2 -translate-y-1/2 bg-transparent border-0 text-white/70 text-5xl cursor-pointer hover:text-white trasition">
        &#10094;
      </button>
      <button
        type="button"
        aria-label="Næste billede"
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-transparent border-0 text-white/70
                text-5xl cursor-pointer hover:text-white trasition"
      >
        &#10095;
      </button>
    </section>
  );
}
