import { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function useSectionNavigation() {
  const [sectionId, setSectionId] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== '/' || !sectionId) {
      return undefined;
    }

    let secondFrame;
    const firstFrame = window.requestAnimationFrame(() => {
      secondFrame = window.requestAnimationFrame(() => {
        const section = document.getElementById(sectionId);
        setSectionId(null);

        if (!section) {
          return;
        }

        const navigation = document.querySelector('[data-site-navigation]');
        const navigationHeight = navigation?.getBoundingClientRect().height ?? 0;
        const top = window.scrollY + section.getBoundingClientRect().top - navigationHeight;
        const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches
          ? 'auto'
          : 'smooth';

        window.scrollTo({ top: Math.max(0, top), behavior });
      });
    });

    return () => {
      window.cancelAnimationFrame(firstFrame);
      if (secondFrame !== undefined) {
        window.cancelAnimationFrame(secondFrame);
      }
    };
  }, [location.pathname, sectionId]);

  return useCallback((id) => {
    setSectionId(id);
    if (location.pathname !== '/') {
      navigate('/');
    }
  }, [location.pathname, navigate]);
}
