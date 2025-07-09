import React from "react";
import "./App.scss";
import Header from "./components/Header";
import Slideshow from "./components/Slideshow";
import CoursesSection from "./components/CoursesSection";
import FirstVisitModal from "./components/FirstVisitModal";

function App() {
  return (
    <div className="app-container">
      <FirstVisitModal />
      <Header />
      <main>
        <Slideshow />
        <h2 className="section-title">Meus cursos</h2>
        <CoursesSection />
      </main>
    </div>
  );
}

export default App;
