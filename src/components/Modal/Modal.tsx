import React from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';

function Modal({ children, open, onClose }) {
  if (!open) return null;

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
      >
        {children}
        <button className="modal__btn_close" onClick={onClose}>close</button>
        <button className="modal__btn_add" onClick={onClose}>add</button>
      </div>
    </div>,
    document.body
  )
}

export default Modal;