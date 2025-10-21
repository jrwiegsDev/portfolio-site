import React from 'react';
import './ImageModal.css';

function ImageModal({ image, onClose }) {
  // Close modal when clicking outside the image
  const handleBackdropClick = (e) => {
    if (e.target.className === 'modal-backdrop') {
      onClose();
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>
        <img src={image.src} alt={image.alt} className="modal-image" />
      </div>
    </div>
  );
}

export default ImageModal;
