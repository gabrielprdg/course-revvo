import React, { useEffect, useState } from "react";
import "./CoursesSection.scss";
import CourseCard from "./CourseCard";

function CoursesSection() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [form, setForm] = useState({ title: "", description: "", image: "" });
  const [editing, setEditing] = useState(null);
  const [feedback, setFeedback] = useState("");

  const fetchCourses = () => {
    setLoading(true);
    fetch("http://localhost:8000/cursos/")
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao buscar cursos");
        return res.json();
      })
      .then((data) => {
        setCourses(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFeedback("");
    const method = editing ? "PUT" : "POST";
    const url = "http://localhost:8000/cursos/";
    const body = editing ? { ...form, id: editing } : form;
    fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao salvar curso");
        return res.json();
      })
      .then(() => {
        setForm({ title: "", description: "", image: "" });
        setEditing(null);
        setFeedback("Curso salvo com sucesso!");
        fetchCourses();
      })
      .catch(() => setFeedback("Erro ao salvar curso"));
  };

  const handleEdit = (course) => {
    setForm({ title: course.title, description: course.description, image: course.image });
    setEditing(course.id);
  };

  const handleDelete = (id) => {
    if (!window.confirm("Tem certeza que deseja remover este curso?")) return;
    setFeedback("");
    fetch("http://localhost:8000/cursos/", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao remover curso");
        return res.json();
      })
      .then(() => {
        setFeedback("Curso removido com sucesso!");
        fetchCourses();
      })
      .catch(() => setFeedback("Erro ao remover curso"));
  };

  if (loading) return <div>Carregando cursos...</div>;
  if (error) return <div style={{color: 'red'}}>Erro: {error}</div>;

  return (
    <div>
      <form className="course-form" onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Título do curso"
          value={form.title}
          onChange={handleChange}
          required
        />
        <input
          name="description"
          placeholder="Descrição"
          value={form.description}
          onChange={handleChange}
          required
        />
        <input
          name="image"
          placeholder="URL da imagem"
          value={form.image}
          onChange={handleChange}
          required
        />
        <button type="submit">{editing ? "Salvar edição" : "Adicionar curso"}</button>
        {editing && <button type="button" onClick={() => { setEditing(null); setForm({ title: "", description: "", image: "" }); }}>Cancelar</button>}
      </form>
      {feedback && <div className="feedback">{feedback}</div>}
      <div className="courses-grid">
        {courses.map((course) => (
          <div key={course.id} style={{ position: "relative" }}>
            <CourseCard course={course} />
            <div className="crud-actions">
              <button onClick={() => handleEdit(course)}>Editar</button>
              <button onClick={() => handleDelete(course.id)} className="danger">Remover</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoursesSection; 