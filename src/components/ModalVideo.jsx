import React from 'react';
import './ModalVideo.css';

const ModalVideo = ({ isOpen, onClose, videoSrc, caption }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <video controls className="modal-video">
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {caption && <p className="modal-caption">{caption}</p>}
      </div>
    </div>
  );
};

export default ModalVideo;