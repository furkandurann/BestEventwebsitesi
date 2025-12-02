import { useEffect } from 'react';

/**
 * Web Vitals Tracking Hook
 * 
 * Core Web Vitals metriklerini gerçek kullanıcılardan toplar.
 * 
 * Metrikler:
 * - LCP (Largest Contentful Paint)
 * - FID (First Input Delay)
 * - CLS (Cumulative Layout Shift)
 * - FCP (First Contentful Paint)
 * - TTFB (Time to First Byte)
 * 
 * Kullanım:
 * ```jsx
 * import useWebVitals from '@/hooks/useWebVitals'
 * 
 * function App() {
 *   useWebVitals((metric) => {
 *     // Analytics'e gönder veya console'a yaz
 *     console.log(metric)
 *   })
 * }
 * ```
 */

const useWebVitals = (onMetric) => {
  useEffect(() => {
    // Web Vitals paketi dinamik import
    import('web-vitals').then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
      // Tüm metrikleri dinle
      onCLS(onMetric);
      onFID(onMetric);
      onFCP(onMetric);
      onLCP(onMetric);
      onTTFB(onMetric);
    });
  }, [onMetric]);
};

/**
 * Web Vitals verilerini console'a yazdır
 * Development için kullanışlı
 */
export const logWebVitals = (metric) => {
  const { name, value, rating, delta, id } = metric;
  
  // Renk kodları (rating'e göre)
  const colors = {
    good: '#0CCE6B',
    'needs-improvement': '#FFA400',
    poor: '#FF4E42',
  };
  
  console.log(
    `%c${name}`,
    `color: ${colors[rating]}; font-weight: bold; font-size: 14px`,
    `${Math.round(value)}ms`,
    `(${rating})`,
    { delta, id }
  );
};

/**
 * Web Vitals verilerini analytics'e gönder
 * Google Analytics veya başka bir servise gönderilebilir
 */
export const sendToAnalytics = (metric) => {
  const { name, value, rating, delta, id } = metric;
  
  // Google Analytics örneği (GA4)
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', name, {
      event_category: 'Web Vitals',
      value: Math.round(value),
      event_label: id,
      non_interaction: true,
      metric_rating: rating,
      metric_delta: Math.round(delta),
    });
  }
  
  // Custom analytics endpoint'e gönder (örnek)
  // fetch('/api/analytics/web-vitals', {
  //   method: 'POST',
  //   body: JSON.stringify({ name, value, rating, delta, id }),
  //   headers: { 'Content-Type': 'application/json' }
  // });
};

/**
 * Tüm metrikleri localStorage'a kaydet
 * Debug için kullanışlı
 */
export const saveToLocalStorage = (metric) => {
  const { name, value, rating } = metric;
  
  try {
    const key = `webvitals_${name}`;
    const data = {
      value: Math.round(value),
      rating,
      timestamp: new Date().toISOString(),
    };
    
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.warn('Web Vitals localStorage hatası:', error);
  }
};

/**
 * Metriklerin özet raporu
 */
export const getWebVitalsReport = () => {
  const metrics = ['CLS', 'FID', 'FCP', 'LCP', 'TTFB'];
  const report = {};
  
  metrics.forEach((name) => {
    try {
      const data = localStorage.getItem(`webvitals_${name}`);
      if (data) {
        report[name] = JSON.parse(data);
      }
    } catch (error) {
      console.warn(`${name} metric okunamadı:`, error);
    }
  });
  
  return report;
};

export default useWebVitals;
