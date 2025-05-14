/**
 * Utilidades SEO para Synapsis
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
          lazyImage.removeAttribute('data-src');
          imageObserver.unobserve(lazyImage);
        }
      });
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

// Inicializar todas las optimizaciones de SEO
export const initSEOOptimizations = () => {
  window.addEventListener('load', () => {
    setupLazyLoading();
    setupLinkPreloading();
    setupExternalLinks();
  });
};

export default initSEOOptimizations; 