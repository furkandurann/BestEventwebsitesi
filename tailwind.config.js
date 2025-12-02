/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ===== APPLE STYLE WALL (iPhone 17 Pro) =====
        wall: {
          DEFAULT: '#050507',   // ana duvar
          soft: '#0b0b10',      // section arası yumuşak gölge
          deep: '#000000'       // en koyu vurgu
        },

        // ===== MEVCUT RENKLER (Çocuk Etkinlikleri) =====
        primary: {
          DEFAULT: '#FF6B6B',
          light: '#FF8E8E',
          dark: '#E65555',
        },
        secondary: {
          DEFAULT: '#4ECDC4',
          light: '#6DD9D1',
          dark: '#3DB8AF',
        },
        accent: {
          DEFAULT: '#FFE66D',
          light: '#FFED8E',
          dark: '#E6CF5C',
        },
        dark: {
          DEFAULT: '#1A1A2E',
          light: '#2A2A3E',
        },
        
        // ===== KURUMSAL RENKLER (Premium Segment) =====
        corporate: {
          DEFAULT: '#111827',
          light: '#1F2937',
          dark: '#0F172A',
        },
        gold: {
          DEFAULT: '#F59E0B',
          light: '#FBBF24',
          dark: '#D97706',
        },
        indigo: {
          DEFAULT: '#6366F1',
          light: '#818CF8',
          dark: '#4F46E5',
        },
        
        // ===== DESTEK RENKLERİ (Sistem) =====
        success: {
          DEFAULT: '#10B981',
          light: '#34D399',
          dark: '#059669',
        },
        error: {
          DEFAULT: '#EF4444',
          light: '#F87171',
          dark: '#DC2626',
        },
        warning: {
          DEFAULT: '#F59E0B',
          light: '#FBBF24',
          dark: '#D97706',
        },
        info: {
          DEFAULT: '#3B82F6',
          light: '#60A5FA',
          dark: '#2563EB',
        }
      },
      
      // ===== APPLE STYLE SHADOWS =====
      boxShadow: {
        glass: '0 20px 80px rgba(0,0,0,0.55)',
        soft: '0 8px 30px rgba(0,0,0,0.35)',
      },
      
      // ===== APPLE STYLE BORDER RADIUS =====
      borderRadius: {
        xl2: '1.25rem',
        xl3: '1.75rem',
      },
      
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-1': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-2': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'gradient-3': 'linear-gradient(to right, #fa709a 0%, #fee140 100%)',
        'gradient-4': 'linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      perspective: {
        '1000': '1000px',
        '2000': '2000px',
      }
    },
  },
  plugins: [],
}
