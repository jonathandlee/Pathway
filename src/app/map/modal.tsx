// components/Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose, position }) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: position.y,
        left: position.x,
        backgroundColor: 'white',
        border: '1px solid black',
        padding: '20px',
        zIndex: 1000,
      }}
    >
      <h2>Modal Title</h2>
      <p>Modal Content</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Modal;
