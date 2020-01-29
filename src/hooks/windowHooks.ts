import { useState, useEffect } from 'react';

export const useScrolledBottom = () => {
  const [previous, setPrev] = useState<number>(0);
  const [scrolledBottom, setScrolledBottom] = useState<boolean>(true);

  function scrollFunc() {
    const current = window.pageYOffset;
    if (current > previous) {
      setScrolledBottom(false);
    } else {
      setScrolledBottom(true);
    }

    setPrev(current);
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollFunc);

    return () => {
      window.removeEventListener('scroll', scrollFunc);
    };
  });

  return scrolledBottom;
};
