import React, { useState, useEffect } from 'react';
import { trackGA4Event } from '../utils/tracking';

const ExitIntentPopup = ({ pageName = 'unknown' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if popup was already shown in this session
    const popupShown = sessionStorage.getItem('exitPopupShown');
    if (popupShown) {
      setHasShown(true);
      return;
    }

    let timeOnPage = 0;
    const timer = setInterval(() => {
      timeOnPage += 1;
    }, 1000);

    const handleMouseLeave = (e) => {
      // Only trigger if mouse is leaving from top (towards browser controls)
      if (e.clientY <= 0 && !hasShown && timeOnPage >= 5) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem('exitPopupShown', 'true');
        
        // Track popup view
        trackGA4Event('exit_popup_view', {
          page_name: pageName,
          time_on_page: timeOnPage,
          event_category: 'engagement',
          event_label: 'Exit Intent Triggered'
        });
      }
    };

    document.addEventListener('mouseout', handleMouseLeave);

    return () => {
      clearInterval(timer);
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, [hasShown, pageName]);

  const handleClose = () => {
    setIsVisible(false);
    trackGA4Event('exit_popup_close', {
      page_name: pageName,
      event_category: 'engagement',
      event_label: 'Popup Closed'
    });
  };

  const handleWhatsAppClick = () => {
    const message = `🎉 *Best Event - Web Sitesinden Geliyorum!*\n\n🎁 *Kupon:* Şanlı1000TL\n\n_${pageName} sayfasından yönlendirildim. Detaylı bilgi almak istiyorum._`;
    const whatsappNumber = '905307309009';
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    trackGA4Event('exit_popup_whatsapp_click', {
      page_name: pageName,
      event_category: 'conversion',
      event_label: 'WhatsApp Click from Popup',
      value: 50
    });

    window.open(url, '_blank');
    handleClose();
  };

  const handlePhoneClick = () => {
    trackGA4Event('exit_popup_phone_click', {
      page_name: pageName,
      event_category: 'conversion',
      event_label: 'Phone Click from Popup',
      value: 50
    });
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998] animate-fadeIn"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 animate-fadeIn">
        <div 
          className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full p-6 md:p-8 animate-scaleIn border-4 border-transparent bg-clip-padding"
          style={{
            background: 'white',
            borderImage: 'linear-gradient(135deg, #9333ea, #ec4899) 1'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Kapat"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Content */}
          <div className="text-center">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full mb-4">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-display font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-3">
              Bekle! Gitmeden Önce...
            </h3>

            {/* Subtitle */}
            <p className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
              🎁 Bugün Ara, Özel İndirim + Hediye Kazan!
            </p>

            {/* Coupon Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-full font-display font-bold text-xl shadow-lg mb-6">
              🎁 Kupon: Şanlı1000TL
            </div>

            {/* Description */}
            <p className="text-gray-600 font-body mb-6 text-sm md:text-base">
              En iyi fiyat garantisi için kupon kodunuzu kullanın! Profesyonel ekibimiz size özel paket hazırlıyor.
            </p>

            {/* CTA Buttons */}
            <div className="space-y-3">
              {/* WhatsApp Button */}
              <button
                onClick={handleWhatsAppClick}
                className="w-full min-h-[44px] px-6 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-display font-bold rounded-full hover:shadow-2xl transform hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 text-base md:text-lg"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                💬 WhatsApp'a Yaz - Hemen Teklif Al
              </button>

              {/* Phone Button */}
              <a
                href="tel:05307309009"
                onClick={handlePhoneClick}
                className="w-full min-h-[44px] px-6 py-4 bg-gradient-to-r from-primary to-secondary text-white font-display font-bold rounded-full hover:shadow-2xl transform hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 text-base md:text-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                📞 Hemen Ara: 0530 730 90 09
              </a>
            </div>

            {/* Footer Note */}
            <p className="mt-6 text-xs text-gray-500 font-body">
              ⏰ Çalışma Saatleri: Her Gün 09:00 - 22:00
            </p>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default ExitIntentPopup;
