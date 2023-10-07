import { useEffect } from 'react';

const useEventListener = (className: string) => {
  const handleScroll = () => {
    const elements = document.querySelectorAll(className);
    const windowHeight = window.innerHeight;
    const elementVisible = 75;
    elements?.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < windowHeight - elementVisible) {
        element.classList.add('active');
      } else {
        element.classList.remove('active');
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
};

export default useEventListener;
