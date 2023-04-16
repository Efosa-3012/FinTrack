import React, { useState } from "react";
import "./Cards.css";

function Card({ title, description, content, image }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = (event) => {
    event.stopPropagation(); // Add this line to stop event propagation
    setIsOpen(false);
  };

  return (
    <div className="card" onClick={handleOpenModal}>
      <h2>{title}</h2>
      <p>{description}</p>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            {image ? <img src={image} alt="picformail" /> : <></>}
            <h2>{title}</h2>
            {content}
            <div>
              <div className="btn-handles">
                <button onClick={handleCloseModal}>Close</button>
                <button onClick={handleCloseModal}>Take A Quiz</button>
              </div>
              <br />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
