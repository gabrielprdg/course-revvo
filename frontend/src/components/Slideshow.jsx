import React, { useState } from "react";
import "./Slideshow.scss";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    title: "LOREM IPSUM",
    description:
      "Aenean lacinia bibendum nulla sed consectetur. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.",
    button: { label: "VER CURSO", link: "#" },
  },
  {
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
    title: "APRENDA COM OS MELHORES",
    description:
      "Cursos atualizados, professores renomados e uma plataforma feita para você evoluir.",
    button: { label: "SAIBA MAIS", link: "#" },
  },
];

function Slideshow() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="slideshow-static">
      <div
        className="slide-bg"
        style={{ backgroundImage: `url(${slides[current].image})` }}
      >
        <div className="slide-content">
          <h2>{slides[current].title}</h2>
          <p>{slides[current].description}</p>
          <a href={slides[current].button.link} className="slide-btn">
            {slides[current].button.label}
          </a>
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