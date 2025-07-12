import React, { useRef, useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import Slideshow from "./components/Slideshow";
import CoursesSection from "./components/CoursesSection";
import FirstVisitModal from "./components/FirstVisitModal";

function App() {
  const coursesSectionRef = useRef();
  const [search, setSearch] = useState("");

  const handleAddCourseClick = () => {
    if (coursesSectionRef.current && coursesSectionRef.current.openModal) {
      coursesSectionRef.current.openModal();
    }
  };

  return (
    <div className="app-container">
      <FirstVisitModal />
      <Header search={search} setSearch={setSearch} />
      <Slideshow />
      <main className="courses-main">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
          <h2 className="section-title" style={{ margin: 0 }}>Meus cursos</h2>
          <button className="add-course-inline-btn" onClick={handleAddCourseClick} aria-label="Adicionar novo curso">+ Novo Curso</button>
        </div>
        <CoursesSection ref={coursesSectionRef} search={search} />
      </main>
    </div>
  );
}

export default App;
