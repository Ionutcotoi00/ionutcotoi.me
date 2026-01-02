"use client";

import { useEffect } from "react";

export default function ViewportFix() {
  useEffect(() => {
    // Previne scroll jump când viewport-ul se schimbă sau când elementele se măresc
    let lastHeight = window.innerHeight;
    let lastScrollY = window.scrollY;
    let ticking = false;

    const preventScrollJump = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentHeight = window.innerHeight;
          const currentScrollY = window.scrollY;
          
          // Dacă înălțimea s-a schimbat (bara de adresă) SAU scroll-ul s-a schimbat neașteptat
          if (Math.abs(currentHeight - lastHeight) > 50 || 
              (Math.abs(currentScrollY - lastScrollY) > 100 && 
               document.activeElement?.tagName !== 'INPUT' && 
               document.activeElement?.tagName !== 'TEXTAREA')) {
            
            // Restaurează poziția scroll-ului
            window.scrollTo({
              top: lastScrollY,
              behavior: 'instant' as ScrollBehavior,
            });
          } else {
            lastScrollY = currentScrollY;
          }
          
          lastHeight = currentHeight;
          ticking = false;
        });
        
        ticking = true;
      }
    };

    // Observă schimbări în DOM pentru a preveni scroll jump când elementele se măresc
    const observer = new MutationObserver(() => {
      const currentScrollY = window.scrollY;
      // Dacă scroll-ul s-a schimbat fără interacțiunea utilizatorului
      if (Math.abs(currentScrollY - lastScrollY) > 50) {
        window.scrollTo({
          top: lastScrollY,
          behavior: 'instant' as ScrollBehavior,
        });
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['style', 'class'],
    });

    // Folosește visualViewport API dacă e disponibil
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', preventScrollJump);
      window.visualViewport.addEventListener('scroll', () => {
        lastScrollY = window.scrollY;
      });
    } else {
      window.addEventListener('resize', preventScrollJump);
    }

    // Actualizează lastScrollY la scroll normal
    const handleScroll = () => {
      lastScrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', preventScrollJump);
      } else {
        window.removeEventListener('resize', preventScrollJump);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
}

