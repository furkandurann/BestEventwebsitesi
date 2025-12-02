import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression'
import { visualizer } from 'rollup-plugin-visualizer'
import { VitePWA } from 'vite-plugin-pwa'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    react(),
    
    // Copy content folder to dist
    viteStaticCopy({
      targets: [
        {
          src: 'content/**/*',
          dest: 'content'
        }
      ]
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
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp|avif)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'images-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 30 // 30 days
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
    open: true,
    port: 5173
  },
  
  build: {
    // Chunk splitting stratejisi (daha granüler)
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor libraries
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'vendor-react'
            }
            if (id.includes('framer-motion')) {
              return 'vendor-motion'
            }
            // Diğer tüm node_modules
            return 'vendor-libs'
          }
          
          // Utility fonksiyonlar
          if (id.includes('/src/utils/') || id.includes('/src/hooks/')) {
            return 'utils'
          }
          
          // Components (büyük component'ler ayrı)
          if (id.includes('/src/components/')) {
            if (id.includes('AppleHeroSlider') || id.includes('EventDetailSlider')) {
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
