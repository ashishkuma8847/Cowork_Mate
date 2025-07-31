import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.setItem('scroll-position', window.scrollY);
      sessionStorage.setItem('last-path', window.location.pathname);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    const savedPath = sessionStorage.getItem('last-path');
    const savedScroll = sessionStorage.getItem('scroll-position');

    if (savedPath === pathname && savedScroll) {
      window.scrollTo(0, parseInt(savedScroll));
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}

export default ScrollManager;
