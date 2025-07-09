import React, { useEffect, useState } from "react";
import "./FirstVisitModal.scss";

function FirstVisitModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem("firstVisitModalSeen");
    if (!seen) {
      setOpen(true);
      localStorage.setItem("firstVisitModalSeen", "true");
    }
  }, []);

  if (!open) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Bem-vindo!</h2>
        <p>Este é seu primeiro acesso ao portal de cursos. Aproveite!</p>
        <button onClick={() => setOpen(false)}>Fechar</button>
      </div>
    </div>
  );
}

export default FirstVisitModal; 