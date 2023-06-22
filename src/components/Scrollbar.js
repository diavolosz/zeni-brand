import React, { useState, useEffect } from 'react';
import './Scrollbar.css';

function Scrollbar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      setScrollPosition(scrollTop);
      setScrollHeight(scrollHeight);
      setClientHeight(clientHeight);
      setIsScrolling(true);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    let timeoutId;

    function handleScrollEnd() {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsScrolling(false);
      }, 200);
    }

    window.addEventListener('scroll', handleScrollEnd);
    return () => {
      window.removeEventListener('scroll', handleScrollEnd);
      clearTimeout(timeoutId);
    };
  }, []);

  const handleThumbDrag = (e) => {
    const { clientY } = e.touches ? e.touches[0] : e;
    const scrollableHeight = scrollHeight - clientHeight;
    const scrollPercentage = clientY / clientHeight;
    const newScrollPosition = scrollableHeight * scrollPercentage;
    window.scrollTo(0, newScrollPosition);
  };

  const thumbStyle = {
    height: `${(clientHeight / scrollHeight) * 100}%`,
    top: `${(scrollPosition / scrollHeight) * 100}%`,
  };

  const containerClassName = `scrollbar-container${isScrolling ? ' show' : ''}`;

  return (
    <div className={containerClassName}>
      <div
        className="scrollbar-track"
        onMouseDown={handleThumbDrag}
        onTouchStart={handleThumbDrag}
      >
        <div className="scrollbar-thumb" style={thumbStyle} />
      </div>
    </div>
  );
}

export default Scrollbar;
