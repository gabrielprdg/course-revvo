import React, { useEffect, useState } from "react";
import "./Slideshow.scss";

function Slideshow() {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/slideshow/")
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao buscar slides");
        return res.json();
      })
      .then((data) => {
        setSlides(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Carregando slides...</div>;
  if (error) return <div style={{color: 'red'}}>Erro: {error}</div>;

  return (
    <div className="slideshow">
      {slides.map((slide, idx) => (
        <div className="slide" key={idx}>
          <img src={slide.image} alt={slide.title} className="slide__img" />
          <div className="slide__content">
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
            <a href={slide.button.link} className="slide__button">
              {slide.button.label}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Slideshow; 