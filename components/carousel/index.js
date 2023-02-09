import styles from './carousel.module.css'
import { useState } from 'react'
import Image from 'next/image'

export default function ImageCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
      {
        src: '/carousel/0.jpg',
        caption: 'Achieve Excellence'
      },
      {
        src: '/carousel/1.jpg',
        caption: 'Embrace Innovation'
      },
      {
        src: '/carousel/2.jpg',
        caption: 'Champion Diversity'
      },
      {
        src: '/carousel/3.jpg',
        caption: 'Pursue Collaboration'
      },
      {
        src: '/carousel/4.jpg',
        caption: 'Engage With Respect'
      }

    ];
  
    const handlePrevious = () => {
        setCurrentIndex(( currentIndex + images.length - 1 ) % images.length);
    };
  
    const handleNext = () => {
        setCurrentIndex(( currentIndex + 1 ) % images.length);
    };
  
    return (
      <div className={styles.carouselContainer}>
            <div 
                key={images[currentIndex].src}
                className={styles.imageContainer}
                style={{ backgroundImage: `url(${images[currentIndex].src})` }} 
                id="carouselImage"
            >
                <Image onClick={handlePrevious} src="/icons/leftarrow.png" width={50} height={50} />
                <div className={styles.caption} id="testOnImageHere">{images[currentIndex].caption}</div>
                <Image onClick={handlePrevious} src="/icons/rightarrow.png" width={50} height={50} />
            </div>
      </div>
    );
  };
