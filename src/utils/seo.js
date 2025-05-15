/**
 * Utilidades SEO y optimización de rendimiento para Synapsis
 */

// Lazy loading de imágenes para mejor rendimiento
export const setupLazyLoading = () => {
  if ('IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          
          // Aplicar transición suave al cargar
          lazyImage.style.transition = "opacity 0.3s ease-in-out";
          lazyImage.style.opacity = 0;
          
          lazyImage.onload = () => {
            lazyImage.style.opacity = 1;
            lazyImage.removeAttribute('data-src');
          };
          
          imageObserver.unobserve(lazyImage);
        }
      });
    }, {
      rootMargin: '100px', // Carga anticipada para mejorar UX
      threshold: 0.1
    });

    lazyImages.forEach((image) => {
      imageObserver.observe(image);
    });
  } else {
    // Fallback para navegadores que no soportan IntersectionObserver
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach((img) => {
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
    });
  }
};

// Precargar enlaces para navegación más rápida
export const setupLinkPreloading = () => {
  const links = document.querySelectorAll('a');
  
  links.forEach(link => {
    link.addEventListener('mouseover', () => {
      const href = link.getAttribute('href');
      
      if (href && !link.dataset.preloaded && href.startsWith('/')) {
        const preloadLink = document.createElement('link');
        preloadLink.rel = 'prefetch';
        preloadLink.href = href;
        document.head.appendChild(preloadLink);
        link.dataset.preloaded = 'true';
      }
    });
  });
};

// Añadir atributos nofollow y noreferrer a links externos
export const setupExternalLinks = () => {
  const domain = window.location.hostname;
  const links = document.querySelectorAll('a');
  
  links.forEach(link => {
    const href = link.getAttribute('href');
    
    if (href && href.startsWith('http') && !href.includes(domain)) {
      link.setAttribute('rel', 'noopener noreferrer');
      link.setAttribute('target', '_blank');
    }
  });
};

// Optimizar renderizado y reducir jank visual (movimientos bruscos)
export const optimizeRendering = () => {
  // Evitar layout shifts aplicando dimensiones a elementos clave
  const elementsToOptimize = document.querySelectorAll('.lottie-player, iframe, video');
  elementsToOptimize.forEach(el => {
    if (!el.hasAttribute('width') || !el.hasAttribute('height')) {
      el.style.aspectRatio = '16/9';
    }
  });

  // Reducir animaciones en dispositivos móviles para mejorar rendimiento
  const isMobile = window.innerWidth < 768;
  if (isMobile) {
    document.documentElement.classList.add('reduce-motion');
    
    // Desactivar animaciones pesadas en móviles con batería baja
    if ('getBattery' in navigator) {
      navigator.getBattery().then(battery => {
        if (battery.level < 0.2 && !battery.charging) {
          document.documentElement.classList.add('battery-saving');
        }
      });
    }
  }

  // Reducir trabajo del main thread agrupando operaciones
  const debouncedResize = debounce(() => {
    // Operaciones costosas en respuesta a resize
    optimizeResponsiveElements();
  }, 150);

  window.addEventListener('resize', debouncedResize);
};

// Función auxiliar para debounce (evitar múltiples ejecuciones)
function debounce(func, wait) {
  let timeout;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

// Optimiza elementos responsivos para evitar recálculos innecesarios
function optimizeResponsiveElements() {
  const elements = document.querySelectorAll('.responsive-element');
  elements.forEach(el => {
    // Usar transform en lugar de posicionamiento para mejor rendimiento
    el.style.transform = 'translateZ(0)'; // Forzar composición GPU
  });
}

// Optimización de fuentes web para evitar texto invisible durante la carga
export const optimizeFonts = () => {
  // Font display swap para mostrar texto con una fuente alternativa mientras se carga la principal
  const style = document.createElement('style');
  style.textContent = `
    @font-face {
      font-family: 'Inter';
      font-display: swap;
    }
  `;
  document.head.appendChild(style);

  // Precargar fuentes críticas
  const fontFiles = [
    '/fonts/inter-regular.woff2',
    '/fonts/inter-medium.woff2'
  ];

  fontFiles.forEach(font => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = font;
    link.as = 'font';
    link.type = 'font/woff2';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
};

// Inicializar todas las optimizaciones
export const initSEOOptimizations = () => {
  // Aplicar optimizaciones tan pronto como sea posible
  setupExternalLinks();
  optimizeFonts();

  // Esperar a que cargue el DOM para otras optimizaciones
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runDOMOptimizations);
  } else {
    runDOMOptimizations();
  }

  // Optimizaciones para cuando toda la página haya cargado
  window.addEventListener('load', () => {
    setupLazyLoading();
    setupLinkPreloading();
    
    // Posponer trabajos no críticos
    setTimeout(() => {
      optimizeRendering();
    }, 1000);
  });
};

function runDOMOptimizations() {
  // Optimizaciones que requieren el DOM pero no todos los recursos
  const images = document.querySelectorAll('img:not([loading])');
  images.forEach(img => {
    if (!img.hasAttribute('loading')) {
      img.setAttribute('loading', 'lazy');
    }
  });
}

export default initSEOOptimizations; 