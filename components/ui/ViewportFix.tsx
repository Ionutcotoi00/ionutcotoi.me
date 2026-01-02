"use client";

import { useEffect } from "react";

export default function ViewportFix() {
  useEffect(() => {
    // Previne scroll jump când viewport-ul se schimbă (mobile browser bar)
    let lastHeight = window.innerHeight;
    let ticking = false;

    const handleResize = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentHeight = window.innerHeight;
          
          // Dacă înălțimea s-a schimbat (bara de adresă a apărut/disparut)
          if (Math.abs(currentHeight - lastHeight) > 50) {
            // Salvează poziția scroll-ului
            const scrollY = window.scrollY;
            
            // Restaurează poziția după un mic delay
            setTimeout(() => {
              window.scrollTo({
                top: scrollY,
                behavior: 'instant' as ScrollBehavior,
              });
            }, 0);
          }
          
          lastHeight = currentHeight;
          ticking = false;
        });
        
        ticking = true;
      }
    };

    // Folosește visualViewport API dacă e disponibil (mai precis)
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', handleResize);
      window.visualViewport.addEventListener('scroll', () => {
        // Previne scroll jump
        if (document.activeElement?.tagName === 'INPUT' || 
            document.activeElement?.tagName === 'TEXTAREA') {
          return;
        }
      });
    } else {
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', handleResize);
      } else {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  return null;
}

