import React from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';

function Modal({ children, open, onClose }) {
  if (!open) return null;

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body
  )
}

export default Modal;