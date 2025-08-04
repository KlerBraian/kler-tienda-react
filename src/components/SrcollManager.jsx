import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollManager = () => {
  const location = useLocation();

  const saveScrollPosition = () => {
    sessionStorage.setItem(location.pathname, window.scrollY.toString());
  };

  const restoreScrollPosition = () => {
    const savedPosition = sessionStorage.getItem(location.pathname);
    if (savedPosition !== null) {
            setTimeout(() => {
        window.scrollTo(0, parseInt(savedPosition, 10));
      }, 500);
    }
  };

  useLayoutEffect(() => {
    // Restaurar al entrar a la ruta
    restoreScrollPosition();

    // Guardar antes de salir de la ruta
    return () => {
      saveScrollPosition();
    };
  }, [location.pathname]);

  return null;
};

export default ScrollManager;
