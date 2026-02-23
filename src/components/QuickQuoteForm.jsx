import React, { useState } from 'react';
import { trackGA4Event } from '../utils/tracking';

const QuickQuoteForm = ({ service = '', className = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: service,
    date: '',
    guests: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceOptions = [
    { value: 'bubble-show', label: 'Bubble Show Gösterisi' },
    { value: 'sihirbazlik', label: 'Sihirbazlık Gösterisi' },
    { value: 'palyaco', label: 'Palyaço Kiralama' },
    { value: 'dogum-gunu', label: 'Doğum Günü Organizasyonu' },
    { value: 'parti-ekipmanlari', label: 'Parti Ekipmanları' },
  ];

  const guestOptions = [
    '10-20 kişi',
    '20-30 kişi',
    '30-50 kişi',
    '50-100 kişi',
    '100+ kişi'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'İsim zorunludur';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefon zorunludur';
    } else if (!/^[0-9]{10,11}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Geçerli bir telefon numarası girin';
    }

    if (!formData.service) {
      newErrors.service = 'Hizmet seçimi zorunludur';
    }

    if (!formData.date) {
      newErrors.date = 'Etkinlik tarihi zorunludur';
    }

    if (!formData.guests) {
      newErrors.guests = 'Kişi sayısı zorunludur';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendToWhatsApp = () => {
    const selectedService = serviceOptions.find(s => s.value === formData.service);
    
    const message = `🎉 *Best Event - Yeni Teklif Talebi!*

👤 *Ad:* ${formData.name}
📞 *Telefon:* ${formData.phone}
🎭 *Hizmet:* ${selectedService ? selectedService.label : formData.service}
📅 *Tarih:* ${formData.date}
👥 *Kişi Sayısı:* ${formData.guests}

🎁 *Kupon Kodu:* Şanlı1000TL

_Bu mesaj web sitesi teklif formundan otomatik oluşturulmuştur._`;

    const whatsappNumber = '905307309009';
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(url, '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Track form submission
    trackGA4Event('form_submit', {
      form_name: 'quick_quote',
      service: formData.service,
      event_category: 'lead_generation',
      event_label: 'Quick Quote Form',
      value: 100
    });

    // Track Google Ads conversion (if available)
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-17885091470', // TODO: Add conversion label when available
        'value': 100.0,
        'currency': 'TRY',
        'event_category': 'form',
        'event_label': 'Quick Quote Submit'
      });
    }

    // Send to WhatsApp
    sendToWhatsApp();

    // Reset form after short delay
    setTimeout(() => {
      setFormData({
        name: '',
        phone: '',
        service: service,
        date: '',
        guests: ''
      });
      setIsSubmitting(false);
      
      // Show success message (optional - you can add a toast notification here)
      alert('✅ Talebiniz WhatsApp\'a yönlendirildi! En kısa sürede size dönüş yapacağız.');
    }, 1000);
  };

  return (
    <div className={`bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-xl p-6 md:p-8 ${className}`}>
      {/* Header */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full mb-4">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h3 className="text-2xl md:text-3xl font-display font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
          Hemen Teklif Al
        </h3>
        <p className="text-gray-600 font-body text-sm md:text-base">
          2 dakikada WhatsApp'tan yanıt veriyoruz! 🎁 <span className="font-semibold text-primary">Şanlı1000TL</span> kupon hediye
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5 font-body">
            Ad Soyad *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 border-2 ${errors.name ? 'border-red-300' : 'border-gray-200'} rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-base font-body`}
            placeholder="İsminizi yazın"
          />
          {errors.name && <p className="mt-1 text-sm text-red-600 font-body">{errors.name}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5 font-body">
            Telefon *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-3 border-2 ${errors.phone ? 'border-red-300' : 'border-gray-200'} rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-base font-body`}
            placeholder="05XX XXX XX XX"
          />
          {errors.phone && <p className="mt-1 text-sm text-red-600 font-body">{errors.phone}</p>}
        </div>

        {/* Service */}
        <div>
          <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-1.5 font-body">
            Hizmet *
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={`w-full px-4 py-3 border-2 ${errors.service ? 'border-red-300' : 'border-gray-200'} rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-base font-body bg-white`}
          >
            <option value="">Hizmet Seçin</option>
            {serviceOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.service && <p className="mt-1 text-sm text-red-600 font-body">{errors.service}</p>}
        </div>

        {/* Date */}
        <div>
          <label htmlFor="date" className="block text-sm font-semibold text-gray-700 mb-1.5 font-body">
            Etkinlik Tarihi *
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            min={new Date().toISOString().split('T')[0]}
            className={`w-full px-4 py-3 border-2 ${errors.date ? 'border-red-300' : 'border-gray-200'} rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-base font-body`}
          />
          {errors.date && <p className="mt-1 text-sm text-red-600 font-body">{errors.date}</p>}
        </div>

        {/* Guests */}
        <div>
          <label htmlFor="guests" className="block text-sm font-semibold text-gray-700 mb-1.5 font-body">
            Yaklaşık Kişi Sayısı *
          </label>
          <select
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            className={`w-full px-4 py-3 border-2 ${errors.guests ? 'border-red-300' : 'border-gray-200'} rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-base font-body bg-white`}
          >
            <option value="">Kişi Sayısı Seçin</option>
            {guestOptions.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.guests && <p className="mt-1 text-sm text-red-600 font-body">{errors.guests}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full min-h-[44px] px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-display font-bold rounded-full hover:shadow-2xl transform hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-base md:text-lg"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Gönderiliyor...
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              🚀 WhatsApp'a Gönder - 2 Dakikada Cevap!
            </span>
          )}
        </button>

        {/* Coupon Badge */}
        <div className="flex items-center justify-center gap-2 pt-2">
          <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-full text-sm font-semibold shadow-lg">
            🎁 Kupon: Şanlı1000TL
          </span>
        </div>

        {/* Contact Alternative */}
        <div className="text-center text-sm text-gray-600 font-body">
          veya hemen ara:{' '}
          <a 
            href="tel:05307309009" 
            className="font-semibold text-primary hover:text-secondary transition-colors"
            onClick={() => {
              trackGA4Event('phone_click', {
                source: 'quick_quote_form',
                event_category: 'engagement',
                event_label: 'Alternative Phone Click'
              });
            }}
          >
            0530 730 90 09
          </a>
        </div>
      </form>
    </div>
  );
};

export default QuickQuoteForm;
