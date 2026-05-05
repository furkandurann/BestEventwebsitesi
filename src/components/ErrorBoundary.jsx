import React from 'react'
import { isChunkError } from '../utils/chunkRecovery'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary:', error, errorInfo)

    // Chunk hatası ise: 1 kez reload dene, 2. sefer UI göster
    if (isChunkError(error)) {
      const key = 'bestevent_reload'
      const val = sessionStorage.getItem(key)
      if (!val) {
        sessionStorage.setItem(key, '1')
        window.location.reload()
        return
      }
      // Zaten 1 kez reload denedik, UI göster
    }
  }

  render() {
    if (!this.state.hasError) {
      return this.props.children
    }

    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #1e1b4b 0%, #050507 50%, #831843 100%)',
        padding: '1rem'
      }}>
        <div style={{
          maxWidth: '400px',
          width: '100%',
          textAlign: 'center',
          background: 'rgba(255,255,255,0.08)',
          backdropFilter: 'blur(16px)',
          borderRadius: '16px',
          padding: '2rem',
          border: '1px solid rgba(255,255,255,0.15)'
        }}>
          <h1 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>
            Bir Hata Oluştu
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2rem', lineHeight: 1.6 }}>
            Sayfa yüklenirken bir sorun oluştu. Lütfen sayfayı yenileyin.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <button
              onClick={() => {
                sessionStorage.removeItem('bestevent_reload')
                window.location.reload()
              }}
              style={{
                padding: '0.75rem 1.5rem',
                background: 'linear-gradient(135deg, #9333ea, #ec4899)',
                color: '#fff',
                fontWeight: 600,
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1rem'
              }}
            >
              Sayfayı Yenile
            </button>
            <button
              onClick={() => {
                sessionStorage.removeItem('bestevent_reload')
                window.location.href = '/'
              }}
              style={{
                padding: '0.75rem 1.5rem',
                background: 'rgba(255,255,255,0.15)',
                color: '#fff',
                fontWeight: 600,
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1rem'
              }}
            >
              Ana Sayfaya Dön
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ErrorBoundary
