import { useState } from 'react';
import '../styles/Gallery.css';
import {
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa';

import img1 from '../assets/gallery/wedding1.jpg';
import img2 from '../assets/gallery/wedding2.jpg';
import img3 from '../assets/gallery/wedding3.jpg';
import img4 from '../assets/gallery/wedding4.jpg';
import img5 from '../assets/gallery/wedding5.jpg';
import img6 from '../assets/gallery/cocktail1.jpg';
import img7 from '../assets/gallery/cocktail2.jpg';
import img8 from '../assets/gallery/cocktail3.jpg';
import img9 from '../assets/gallery/cocktail4.jpg';
import img10 from '../assets/gallery/img10.jpeg';
import img11 from '../assets/gallery/img11.jpeg';
import img12 from '../assets/gallery/img12.jpeg';
import img13 from '../assets/gallery/img13.jpeg';
import img14 from '../assets/gallery/img14.jpeg';
import img15 from '../assets/gallery/img15.jpeg';
import img16 from '../assets/gallery/img16.jpeg';
import img17 from '../assets/gallery/img17.jpeg';
import img18 from '../assets/gallery/img18.jpeg';
import img19 from '../assets/gallery/img19.jpeg';
import img20 from '../assets/gallery/img20.jpeg';
import img21 from '../assets/gallery/img21.jpeg';
import img22 from '../assets/gallery/img22.jpeg';
import img23 from '../assets/gallery/img23.jpeg';
import img24 from '../assets/gallery/img24.jpeg';


const imageData = [
  { src: img1, category: 'Wedding' },
  { src: img2, category: 'Wedding' },
  { src: img3, category: 'Wedding' },
  { src: img4, category: 'Wedding' },
  { src: img5, category: 'Wedding' },
  { src: img6, category: 'Cocktail Events' },
  { src: img7, category: 'Cocktail Events' },
  { src: img8, category: 'Cocktail Events' },
  { src: img9, category: 'Cocktail Events' },
  { src: img10, category: 'Pre-Wedding' },
  { src: img11, category: 'Birthday' },
  { src: img12, category: 'Graduation' },
  { src: img13, category: 'Birthday' },
  { src: img14, category: 'Pre-Wedding' },
  { src: img15, category: 'Reception' },
  { src: img16, category: 'Graduation' },
  { src: img17, category: 'Birthday' },
  { src: img18, category: 'Half-Saree' },
  { src: img19, category: 'Birthday' },
  { src: img20, category: 'Graduation' },
  { src: img21, category: 'Birthday' },
  { src: img22, category: 'Half-Saree' },
  { src: img23, category: 'Birthday' },
  { src: img24, category: 'Graduation' },
];

const categories = ['All', 'Wedding', 'Pre-Wedding', 'Half-Saree', 'Cocktail Events', 'Birthday'];

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedIndex, setSelectedIndex] = useState(null);

  const filteredImages =
    selectedCategory === 'All'
      ? imageData
      : imageData.filter((img) => img.category === selectedCategory);

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : filteredImages.length - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev < filteredImages.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="gallery-page">
      <div className="gallery-header" data-aos="fade-up">
        <h2>Our Signature Looks</h2>
        <p>Moments captured with timeless elegance and curated charm.</p>
      </div>

      <div className="gallery-categories" data-aos="fade-up">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => {
              setSelectedCategory(cat);
              setSelectedIndex(null);
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="masonry-grid">
        {filteredImages.map((img, i) => (
          <div
            className="masonry-item"
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 50}
          >
            <img
              src={img.src}
              alt={`${img.category} ${i + 1}`}
              loading="lazy"
              onClick={() => setSelectedIndex(i)}
            />
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div className="lightbox" onClick={() => setSelectedIndex(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <FaTimes className="lightbox-close" onClick={() => setSelectedIndex(null)} />
            <FaChevronLeft className="lightbox-nav left" onClick={handlePrev} />
            <img
              src={filteredImages[selectedIndex].src}
              alt="Preview"
              className="lightbox-img"
            />
            <FaChevronRight className="lightbox-nav right" onClick={handleNext} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
