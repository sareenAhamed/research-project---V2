import React, { useState } from 'react';
import './Media.css';

const mediaItems = [
  { type: 'video', src: '/assets/videos/demo1.mp4', caption: 'Restoration Demo 1' },
  { type: 'video', src: '/assets/videos/demo2.mp4', caption: 'Recognition Demo 2' },
  { type: 'image', src: '/assets/images/media1.jpg', caption: 'Sample Input vs Output 1' },
  { type: 'image', src: '/assets/images/media2.jpg', caption: 'Sample Input vs Output 2' },
];

const Media = () => {
  const [current, setCurrent] = useState(0);

  const nextItem = () => setCurrent(current === mediaItems.length - 1 ? 0 : current + 1);
  const prevItem = () => setCurrent(current === 0 ? mediaItems.length - 1 : current - 1);

  return (
    <section className="media-container">
      <h2 className="media-title">Media & Demo</h2>

      <div className="media-carousel">
        <button className="carousel-btn prev" onClick={prevItem}>&#10094;</button>

        {mediaItems.map((item, index) => (
          <div key={index} className={index === current ? 'media-slide active' : 'media-slide'}>
            {index === current && (
              <>
                {item.type === 'video' ? (
                  <video controls className="media-video">
                    <source src={item.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img src={item.src} alt={item.caption} className="media-img" />
                )}
                <p className="media-caption">{item.caption}</p>
              </>
            )}
          </div>
        ))}

        <button className="carousel-btn next" onClick={nextItem}>&#10095;</button>
      </div>
    </section>
  );
};

export default Media;