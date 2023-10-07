import React, { FC, useEffect, useRef, useState } from 'react';

interface Props {
  width?: number;
  children: any
}

const Carousel:FC<Props> = ({ width,children}) => {
  const carouselRef = useRef<any>(null);
  const [hasPrevious, setHasPrevious] = useState(false);
  const [hasNext, setHasNext] = useState(false);

  useEffect(() => {
    const container = carouselRef.current;
    if (container) {
      setHasPrevious(container.scrollLeft > 0);
      setHasNext(
        container.scrollLeft < container.scrollWidth - container.offsetWidth
      );
    }
  }, []);

  const handlePrev = () => {
    console.log('Check Prev Click: ',carouselRef.current.scrollLeft)

    carouselRef.current.scrollLeft -= (width || 200);
    setHasPrevious(carouselRef.current.scrollLeft - (width || 200) > 0);
    setHasNext(
      carouselRef.current.scrollLeft - (width || 200) <
        carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
    );
  };

  const handleNext = () => {
    console.log('Check Next Click: ',carouselRef.current.scrollLeft)
    carouselRef.current.scrollLeft += (width || 200);
    setHasPrevious(carouselRef.current.scrollLeft + (width || 200) > 0);
    setHasNext(
      carouselRef.current.scrollLeft + (width || 200) <
        carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
    );
  };

  return (
    <div className="carousel">
      <div className="carousel-container" ref={carouselRef}>
        {children}
      </div>
      {hasPrevious && (
        <button type="button" className="carousel-prev" onClick={handlePrev}>
          &lt;
        </button>
      )}
      {hasNext && (
        <button type="button" className="carousel-next" onClick={handleNext}>
          &gt;
        </button>
      )}
    </div>
  );
};

export default Carousel;
