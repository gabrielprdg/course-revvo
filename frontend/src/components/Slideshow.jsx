import React, { useState, useEffect } from "react";
import "./Slideshow.scss";

function Slideshow() {
  const [slides, setSlides] = useState([]);
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSlides();
  }, []);

  const fetchSlides = async () => {
    try {
      const response = await fetch('http://localhost:8000/cursos/');
      if (response.ok) {
        const cursos = await response.json();
        // Transformar cursos em slides
        const slidesFromCursos = cursos.map(curso => ({
          id: curso.id,
          image: curso.image,
          title: curso.title,
          description: curso.description,
          button_label: "VER CURSO",
          button_link: `#curso-${curso.id}` // Link para o curso específico
        }));
        setSlides(slidesFromCursos);
      } else {
        console.error('Erro ao carregar cursos:', response.status);
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
    } finally {
      setLoading(false);
    }
  };

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  if (loading) {
    return <div className="slideshow-loading">Carregando...</div>;
  }

  if (slides.length === 0) {
    return <div className="slideshow-empty">Nenhum slide disponível</div>;
  }

  return (
    <div className="slideshow-static">
      <div
        className="slide-bg"
        style={{ backgroundImage: `url(${slides[current].image})` }}
      >
        <div className="slide-content">
          <h2>{slides[current].title}</h2>
          <p>{slides[current].description}</p>
          <button 
            onClick={() => {
              // Scroll suave até a seção de cursos
              const cursosSection = document.querySelector('.courses-section');
              if (cursosSection) {
                cursosSection.scrollIntoView({ behavior: 'smooth' });
              }
            }} 
            className="slide-btn"
          >
            {slides[current].button_label}
          </button>
        </div>
        <button className="slide-arrow left" onClick={prevSlide}>&lt;</button>
        <button className="slide-arrow right" onClick={nextSlide}>&gt;</button>
        <div className="slide-indicators">
          {slides.map((_, idx) => (
            <span
              key={idx}
              className={"dot" + (idx === current ? " active" : "")}
              onClick={() => setCurrent(idx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slideshow; 