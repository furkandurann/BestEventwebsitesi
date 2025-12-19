import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression'
import { visualizer } from 'rollup-plugin-visualizer'
import { VitePWA } from 'vite-plugin-pwa'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
  plugins: [
    react(),
    
    // Image Optimization - Otomatik AVIF/WebP conversion
    ViteImageOptimizer({
      test: /\.(jpe?g|png|gif|tiff|webp|svg|avif)$/i,
      exclude: undefined,
      include: undefined,
      includePublic: true,
      logStats: true,
      ansiColors: true,
      svg: {
        multipass: true,
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                cleanupNumericValues: false,
                removeViewBox: false,
              },
            },
          },
          'sortAttrs',
          {
            name: 'addAttributesToSVGElement',
            params: {
              attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }],
            },
          },
        ],
      },
      png: {
        quality: 80,
      },
      jpeg: {
        quality: 80,
      },
      jpg: {
        quality: 80,
      },
      webp: {
        quality: 80,
      },
      avif: {
        quality: 70,
      },
      cache: false,
      cacheLocation: undefined,
    }),
    
    // Gzip compression
    compression({
      verbose: true,
      disable: false,
      threshold: 10240, // Only compress files > 10KB
      algorithm: 'gzip',
      ext: '.gz',
    }),
    
    // Brotli compression (daha iyi sıkıştırma)
    compression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'brotliCompress',
      ext: '.br',
    }),
    
    // Bundle analyzer (development'ta)
    visualizer({
      open: false, // Build sonrası otomatik açma
      filename: 'dist/stats.html',
      gzipSize: true,
      brotliSize: true,
    }),
    
    // PWA Support
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt'],
      manifest: {
        name: 'Best Event - Etkinlik Organizasyonu',
        short_name: 'Best Event',
        description: 'İstanbul\'da profesyonel etkinlik organizasyonu',
        theme_color: '#9333ea',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: '/assets/images/logos/logo-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/assets/images/logos/logo-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        skipWaiting: true,
        clientsClaim: true,
        runtimeCaching: [
          {
            // Images - Cache First Strategy
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp|avif)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'images-cache',
              expiration: {
                maxEntries: 100, // Increased from 50
                maxAgeSeconds: 60 * 60 * 24 * 90 // 90 days (increased from 30)
              }
            }
          },
          {
            // JS/CSS - Stale While Revalidate
            urlPattern: /\.(?:js|css)$/,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'static-resources',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 7 // 7 days
              }
            }
          },
          {
            // Fonts (self-hosted) - Cache First
            urlPattern: /\.(?:woff|woff2|ttf|eot)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'fonts-cache',
              expiration: {
                maxEntries: 30,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
              }
            }
          },
          {
            // External APIs - Network First
            urlPattern: /^https:\/\/api\..*/i,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'api-cache',
              networkTimeoutSeconds: 10,
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 // 1 hour
              }
            }
          }
        ]
      }
    })
  ],
  
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  
  server: {
    open: false,
    port: 5173,
    host: '0.0.0.0',
    allowedHosts: ['test.bestevent.com.tr']
  },
  
  build: {
    // Chunk splitting stratejisi (daha granüler)
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor libraries - Granular splitting
          if (id.includes('node_modules')) {
            // React Core (en sık kullanılan)
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor-react'
            }
            
            // React Router (routing için kritik)
            if (id.includes('react-router')) {
              return 'vendor-router'
            }
            
            // Framer Motion (animasyon library - büyük)
            if (id.includes('framer-motion')) {
              return 'vendor-motion'
            }
            
            // Swiper (slider library - sadece gerekli sayfalarda)
            if (id.includes('swiper')) {
              return 'vendor-swiper'
            }
            
            // Firebase (büyük library - lazy load edilebilir)
            if (id.includes('firebase')) {
              return 'vendor-firebase'
            }
            
            // React Icons (tree-shake için ayrı)
            if (id.includes('react-icons')) {
              return 'vendor-icons'
            }
            
            // Lightbox (galeri için - lazy load edilebilir)
            if (id.includes('yet-another-react-lightbox')) {
              return 'vendor-lightbox'
            }
            
            // AOS (animation on scroll)
            if (id.includes('aos')) {
              return 'vendor-aos'
            }
            
            // React Helmet (SEO)
            if (id.includes('react-helmet')) {
              return 'vendor-seo'
            }
            
            // Diğer tüm node_modules (küçük utilities)
            return 'vendor-libs'
          }
          
          // Utility fonksiyonlar
          if (id.includes('/src/utils/') || id.includes('/src/hooks/')) {
            return 'utils'
          }
          
          // Data files (büyük JSON data)
          if (id.includes('/src/data/')) {
            return 'data'
          }
          
          // Components (büyük component'ler ayrı)
          if (id.includes('/src/components/')) {
            // Slider components (büyük ve lazy loadable)
            if (id.includes('AppleHeroSlider') || id.includes('EventDetailSlider') || id.includes('HeroSlider')) {
              return 'components-sliders'
            }
            
            // Heavy components (çok kullanılan büyük componentler)
            if (id.includes('EventShowcase') || id.includes('FullBleedHero') || id.includes('KidsProductHero')) {
              return 'components-heavy'
            }
          }
        },
        
        // Dosya isimlendirme
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg|webp|avif)$/.test(name ?? '')) {
            return 'assets/images/[name]-[hash][extname]'
          }
          if (/\.css$/.test(name ?? '')) {
            return 'assets/css/[name]-[hash][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        }
      },
    },
    
    // Build optimizasyonları
    minify: 'esbuild',
    esbuild: {
      drop: ['console', 'debugger'],
    },
    
    // Chunk size uyarı limiti
    chunkSizeWarningLimit: 1000,
    
    // CSS code splitting
    cssCodeSplit: true,
    
    // Sourcemap production'da kapalı
    sourcemap: false,
    
    // Target modern browsers
    target: 'es2015',
    
    // Optimize bundle size
    reportCompressedSize: true,
  },
})
