import React, { useEffect, useRef } from 'react';

export const useScrollAnimation = () => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('animate-fadeInUp');
        }
      },
      { threshold: 0.2 }
    );

    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return ref;
};

export const useHoverAnimation = () => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    const handleMouseEnter = () => {
      element.classList.add('hover:scale-105', 'hover:shadow-lg');
    };
    const handleMouseLeave = () => {
      element.classList.remove('hover:scale-105', 'hover:shadow-lg');
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return ref;
};