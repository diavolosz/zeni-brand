import { useRef, useEffect } from 'react';

export default function ImageDrag() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const images = [
      'img/N3.png',
      'img/N3.png',
      'img/N3.png',
      'img/N3.png',
      'img/N3.png',
      'img/N3.png',
      'img/N3.png',
      'img/N3.png',
      'img/N3.png',
      'img/N3.png',
      'img/N3.png',
      'img/N3.png',
      'img/N3.png',
      'img/N3.png',
      'img/N3.png',
      'img/N3.png',
      // Add more image URLs as needed
    ];

    const imageElements = [];

    const checkCollision = (x, y, width, height) => {
      const collisionThreshold = 20;
      for (const image of imageElements) {
        const rect = image.getBoundingClientRect();
        const otherX = rect.left;
        const otherY = rect.top;
        const otherWidth = rect.width;
        const otherHeight = rect.height;

        if (
          x < otherX + otherWidth + collisionThreshold &&
          x + width > otherX - collisionThreshold &&
          y < otherY + otherHeight + collisionThreshold &&
          y + height > otherY - collisionThreshold
        ) {
          return true; // Collision detected
        }
      }
      return false; // No collision detected
    };

    images.forEach((imageUrl) => {

      const imageWidth = 100; // Adjust as needed
      const imageHeight = 100; // Adjust as needed
      const image = document.createElement('img');
      image.src = imageUrl;
      image.alt = 'Random Image';
      image.style.position = 'absolute';
      image.style.transform = 'translate(-50%, -50%)';
      // image.style.height = `${imageHeight}px`
      // image.style.width = `${imageWidth}px`

      let x, y;
      let collision = true;

      while (collision) {
        x = Math.random() * (window.innerWidth - imageWidth);
        y = Math.random() * (window.innerHeight - imageHeight);
        collision = checkCollision(x, y, imageWidth, imageHeight);
      }

      image.style.left = `${x}px`;
      image.style.top = `${y}px`;

      container.appendChild(image);
      imageElements.push(image);
    });

    return () => {
      while (container.firstChild) {
        container.firstChild.remove();
      }
    };
  }, []);

  return <div ref={containerRef} style={{ width: '100vw', height: '100vh', position: 'relative' }} />;
};


