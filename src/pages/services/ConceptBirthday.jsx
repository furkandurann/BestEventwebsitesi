import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import NarrativeSection from '../../components/NarrativeSection'

const ConceptBirthday = () => {

  const faqs = [
    {
      question: 'Konsept doğum günü nedir?',
      answer: 'Konsept doğum günü, çocuğunuzun sevdiği tema (prenses, süper kahraman, unicorn vb.) etrafında tasarlanan özel bir kutlamadır. Dekorasyon, kostümler, aktiviteler ve hatta yiyecekler seçilen temaya uygun hazırlanır.'
    },
    {
      question: 'Hangi temalar mevcut?',
      answer: 'Frozen, Prenses, Unicorn, Süper Kahramanlar, LOL Bebek, Paw Patrol, Minecraft ,Barbie , Sonic , Deniz kızı , Fenerbahçe , Beşiktaş ,alatasaray ve daha fazlası! Ayrıca özel tema isteklerinizi de oluşturabiliyoruz'
    },
    {
      question: 'Organizasyon ne kadar sürede hazırlanır?',
      answer: 'Konsept doğum günü organizasyonları için minimum 2 hafta önceden rezervasyon yapmanızı öneriyoruz. Özel temalar için 3-4 hafta süre gerekebilir.'
    },
    {
      question: 'Kaç kişilik organizasyon yapılabilir?',
      answer: 'Minimum 20, maksimum 100 kişi için organizasyon yapabiliyoruz. Mekan büyüklüğüne göre değişkenlik gösterir.'
    },
    {
      question: 'İstanbul\'un hangi bölgelerinde hizmet veriyorsunuz?',
      answer: 'Kadıköy, Üsküdar, Ataşehir, Maltepe, Kartal, Şişli, Beşiktaş, Beyoğlu, Bakırköy, Başakşehir, Sarıyer, Esenyurt ve İstanbul\'un tüm ilçelerinde konsept doğum günü organizasyonu hizmeti veriyoruz.'
    },
    {
      question: 'Fiyata neler dahil?',
      answer: 'Dekorasyon, kostümlü karakterler, animatör, müzik sistemi, masa-sandalye düzeni ve fotoğraf çekimi pakete dahildir. Yiyecek-içecek ve pasta ayrıca fiyatlandırılır.'
    },
    {
      question: 'Konsept doğum günü organizasyonu kaç saat sürer?',
      answer: 'Konsept doğum günleri organizasyonları ortalama 4 saat sürmektedir. İhtiyacınıza göre süre uzatılabilir veya kısaltılabilir. Detaylı bilgi için bizimle iletişime geçebilirsiniz.'
    },
    {
      question: 'Mekan kiralama hizmeti de sunuyor musunuz?',
      answer: 'Evet, anlaşmalı mekanlarımız bulunmaktadır. Ayrıca sizin belirlediğiniz mekanda da organizasyon yapabiliyoruz. Mekan önerileri için bize danışabilirsiniz.'
    }
  ]

  return (
    <>
      <Helmet>
        <title>Konsept Doğum Günü Organizasyonu | İstanbul | Best Event</title>
        <meta 
          name="description" 
          content="İstanbul'da çocuklar için özel konsept doğum günü organizasyonu. Prenses, süper kahraman, unicorn temaları. Profesyonel dekorasyon ve animasyon." 
        />
        <meta name="keywords" content="konsept doğum günü, tema parti, çocuk doğum günü istanbul, prenses doğum günü" />
      </Helmet>

      {/* Hero Section - With Barbie Background */}
      <motion.section 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(/content/images/konsepts/barbiekonseptdogumgunu.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-6xl md:text-7xl font-bold text-white mb-4"
          >
            Konsept Doğum Günü
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl text-white/90 font-medium"
          >
            Hayalleri Gerçeğe Dönüştürün
          </motion.p>
        </div>
      </motion.section>

      {/* ÖZELLEŞTİRİLEBİLİR - Ara Bölüm */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 style={{ 
            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
            fontWeight: 600,
            letterSpacing: '-0.02em',
            lineHeight: '1.08',
            color: '#1d1d1f',
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif'
          }}>
            Size Özel Tasarımlar
          </h2>
          <p className="text-lg text-gray-700 mt-6 leading-relaxed max-w-3xl mx-auto">
            Konseptleri istediğiniz gibi genişletebilirsiniz, size özel tasarımlar yaptırabilirsiniz.
          </p>
        </div>
      </section>

      {/* Section 3: Hızlı Kurulum */}
      <NarrativeSection
        eyebrow="HIZLI KURULUM"
        title="Sorunsuz Organizasyon Süreci"
        body="Sabah erken saatlerde başlayan kurulumumuz da Dekorasyon, Balon süslemesi, arka panola misafirler gelmeden 2-3 saat önce tamamlanır. Her şey tam zamanında sorunsuz kurulur ve toplanır. Ekipmanlarımız her etkinlik öncesi titizlikle temizlenir. Ekiplerimiz profesyonel hizmet sunar ve mekanınızı tertemiz teslim eder."
      />

      {/* İSTANBUL'DA KONSEPT DOĞUM GÜNÜ TEMALARI */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: '1.1',
            color: '#1d1d1f',
            marginBottom: '1rem',
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif'
          }}>
            İstanbul'da Konsept Doğum Günü Temaları
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Çocuğunuzun hayalindeki temalı doğum günü organizasyonu için birbirinden özel konseptlerimiz
          </p>
        </div>
      </section>

      {/* KONSEPT GALERİSİ */}

      {/* 1. Barbie Konsept */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 style={{ 
            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
            fontWeight: 800,
            letterSpacing: '0.05em',
            lineHeight: '1.08',
            textTransform: 'uppercase',
            background: 'linear-gradient(135deg, #ff1493 0%, #ff69b4 50%, #ffb6c1 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 2px 8px rgba(255, 20, 147, 0.4)) drop-shadow(0 0 20px rgba(255, 105, 180, 0.3))',
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif'
          }}>
            Barbie Konsept Doğum Günü
          </h3>
        </div>
      </section>
      <div className="w-full flex justify-center items-center bg-white py-8">
        <img 
          src="/content/images/konsepts/barbiekonseptdogumgunu.jpg"
          alt="Barbie konsept doğum günü - İstanbul"
          className="object-contain max-h-[80vh] w-auto"
        />
      </div>
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p style={{
            fontSize: 'clamp(1.0625rem, 2.5vw, 1.1875rem)',
            lineHeight: '1.5',
            letterSpacing: '-0.003em',
            color: '#1d1d1f',
            maxWidth: '980px',
            margin: '0 auto',
            fontWeight: 400
          }}>
            İstanbul'da Barbie temalı doğum günü organizasyonu ile kız çocuklarının en sevdiği pembe dünyayı gerçeğe dönüştürüyoruz. Profesyonel dekorasyon, Barbie kostümlü karakter ve temaya özel aktivitelerle unutulmaz bir parti deneyimi sunuyoruz. 3-10 yaş arası kız çocukları için özel olarak tasarlanan Barbie konsept paketimiz, pembe balon süslemeleri, masa düzeni ve fotoğraf köşesi içerir.
          </p>
        </div>
      </section>

      {/* 2. 1 Yaş Doğum Günü */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 style={{ 
            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
            fontWeight: 600,
            letterSpacing: '-0.02em',
            lineHeight: '1.08',
            color: '#1d1d1f',
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif'
          }}>
            1 Yaş Doğum Günü Konsepti
          </h3>
        </div>
      </section>
      <div className="w-full flex justify-center items-center bg-white py-8">
        <img 
          src="/content/images/konsepts/biryasdogumgunu.jpeg"
          alt="1 yaş doğum günü konsepti - İstanbul"
          className="object-contain max-h-[80vh] w-auto"
        />
      </div>
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p style={{
            fontSize: 'clamp(1.0625rem, 2.5vw, 1.1875rem)',
            lineHeight: '1.5',
            letterSpacing: '-0.003em',
            color: '#1d1d1f',
            maxWidth: '980px',
            margin: '0 auto',
            fontWeight: 400
          }}>
            Bebeğinizin ilk yaş gününü İstanbul'un en özel 1 yaş doğum günü organizasyonu ile kutlayın. Pastel renkler, sevimli hayvan figürleri ve bebeklere özel güvenli dekorasyonlarla hazırlanan temamız, ailenizin ve misafirlerinizin bu özel günü unutulmaz kılmak için tasarlandı. Profesyonel fotoğraf çekimi ve bebek dostu aktivitelerle ilk yaş kutlamanız mükemmel olacak.
          </p>
        </div>
      </section>

      {/* 3. Deniz Kızı / Ariel */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 style={{ 
            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
            fontWeight: 800,
            letterSpacing: '0.05em',
            lineHeight: '1.08',
            textTransform: 'uppercase',
            background: 'linear-gradient(135deg, #0080ff 0%, #9b59b6 25%, #00d4ff 50%, #ff69b4 75%, #00ffcc 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 2px 8px rgba(0, 128, 255, 0.4)) drop-shadow(0 0 20px rgba(155, 89, 182, 0.3))',
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif'
          }}>
            Deniz Kızı Ariel Konsept Doğum Günü
          </h3>
        </div>
      </section>
      <div className="w-full flex justify-center items-center bg-white py-8">
        <img 
          src="/content/images/konsepts/denizkizidogumgunu.jpeg"
          alt="Deniz kızı Ariel konsept doğum günü - İstanbul"
          className="object-contain max-h-[80vh] w-auto"
        />
      </div>
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p style={{
            fontSize: 'clamp(1.0625rem, 2.5vw, 1.1875rem)',
            lineHeight: '1.5',
            letterSpacing: '-0.003em',
            color: '#1d1d1f',
            maxWidth: '980px',
            margin: '0 auto',
            fontWeight: 400
          }}>
            İstanbul'da Küçük Deniz Kızı Ariel temalı doğum günü organizasyonu ile denizaltı büyüsünü yaşatın. Mavi ve mor tonların hakim olduğu okyanus dekorasyonu, deniz yıldızları, kabuklar ve deniz kızı kostümlü karakterle çocuğunuzun hayallerini gerçeğe dönüştürüyoruz. 3-9 yaş arası kızlar için Disney Ariel temalı özel pasta, dekorasyon ve aktivitelerle unutulmaz bir denizaltı macerası sunuyoruz.
          </p>
        </div>
      </section>

      {/* 4. Futbol Konsept */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 style={{ 
            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
            fontWeight: 800,
            letterSpacing: '0.05em',
            lineHeight: '1.08',
            textTransform: 'uppercase',
            background: 'linear-gradient(135deg, #0066cc 0%, #0099ff 50%, #00ccff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 2px 8px rgba(0, 102, 204, 0.4)) drop-shadow(0 0 20px rgba(0, 153, 255, 0.3))',
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif'
          }}>
            Futbol Konsept Doğum Günü
          </h3>
        </div>
      </section>
      <div className="w-full flex justify-center items-center bg-white py-8">
        <img 
          src="/content/images/konsepts/futbolkonsetdogumgunu.jpeg"
          alt="Futbol konsept doğum günü - İstanbul"
          className="object-contain max-h-[80vh] w-auto"
        />
      </div>
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p style={{
            fontSize: 'clamp(1.0625rem, 2.5vw, 1.1875rem)',
            lineHeight: '1.5',
            letterSpacing: '-0.003em',
            color: '#1d1d1f',
            maxWidth: '980px',
            margin: '0 auto',
            fontWeight: 400
          }}>
            İstanbul'da futbol temalı doğum günü organizasyonu ile genç futbolcuların hayallerini gerçeğe dönüştürün. Stadyum atmosferi, futbol topu süslemeleri, yeşil sahayı andıran dekorasyon ve futbol temalı aktivitelerle çocuklar adeta profesyonel bir maçın içinde hissedecek. 4-12 yaş arası futbol seven çocuklar için mini turnuva, penaltı atışları ve futbol konseptli pasta ile eğlence dolu bir parti deneyimi sunuyoruz.
          </p>
        </div>
      </section>

      {/* 5. Galatasaray Konsept */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 style={{ 
            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
            fontWeight: 800,
            letterSpacing: '0.05em',
            lineHeight: '1.08',
            textTransform: 'uppercase',
            background: 'linear-gradient(135deg, #ffcc00 0%, #ff6600 50%, #cc0000 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 2px 8px rgba(255, 204, 0, 0.4)) drop-shadow(0 0 20px rgba(204, 0, 0, 0.4))',
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif'
          }}>
            Galatasaray Konsept Doğum Günü
          </h3>
        </div>
      </section>
      <div className="w-full flex justify-center items-center bg-white py-8">
        <img 
          src="/content/images/konsepts/galatasaraykonseptdogumgunu.jpg"
          alt="Galatasaray konsept doğum günü - İstanbul"
          className="object-contain max-h-[80vh] w-auto"
        />
      </div>
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p style={{
            fontSize: 'clamp(1.0625rem, 2.5vw, 1.1875rem)',
            lineHeight: '1.5',
            letterSpacing: '-0.003em',
            color: '#1d1d1f',
            maxWidth: '980px',
            margin: '0 auto',
            fontWeight: 400
          }}>
            İstanbul'da Galatasaray temalı doğum günü organizasyonu ile sarı-kırmızılı taraftarların en özel günü! Cimbom'un renklerinde hazırlanan dekorasyon, bayraklar, sarı-kırmızı balon süslemeleri ve Galatasaray logolu özel pasta ile gerçek bir stadyum atmosferi yaratıyoruz. 4-12 yaş arası Galatasaraylı çocuklar için futbol oyunları, forma giyim töreni ve takım konseptli aktivitelerle unutulmaz bir aslan partisi deneyimi sunuyoruz.
          </p>
        </div>
      </section>

      {/* 6. Harry Potter */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 style={{ 
            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
            fontWeight: 800,
            letterSpacing: '0.05em',
            lineHeight: '1.08',
            textTransform: 'uppercase',
            background: 'linear-gradient(135deg, #ffd700 0%, #9b59b6 50%, #1a1a1a 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 2px 8px rgba(255, 215, 0, 0.4)) drop-shadow(0 0 20px rgba(155, 89, 182, 0.4))',
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif'
          }}>
            Harry Potter Konsept Doğum Günü
          </h3>
        </div>
      </section>
      <div className="w-full flex justify-center items-center bg-white py-8">
        <img 
          src="/content/images/konsepts/hartypotterdogumgunu.jpeg"
          alt="Harry Potter konsept doğum günü - İstanbul"
          className="object-contain max-h-[80vh] w-auto"
        />
      </div>
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p style={{
            fontSize: 'clamp(1.0625rem, 2.5vw, 1.1875rem)',
            lineHeight: '1.5',
            letterSpacing: '-0.003em',
            color: '#1d1d1f',
            maxWidth: '980px',
            margin: '0 auto',
            fontWeight: 400
          }}>
            İstanbul'da Harry Potter temalı doğum günü organizasyonu ile Hogwarts büyüsünü yaşatın. Sihirli atmosfer yaratan dekorasyon, fakülte renkleri, asalar, Hogwarts logosu ve büyücü kostümleri ile çocuklar kendilerini Hogwarts Cadılık ve Büyücülük Okulu'nda hissedecek. 6-14 yaş arası Harry Potter hayranları için sihirli gösteriler, büyü dersleri ve Hogwarts temalı aktivitelerle unutulmaz bir büyülü dünya deneyimi sunuyoruz.
          </p>
        </div>
      </section>

      {/* 7. Hello Kitty */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 style={{ 
            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
            fontWeight: 800,
            letterSpacing: '0.05em',
            lineHeight: '1.08',
            textTransform: 'uppercase',
            background: 'linear-gradient(135deg, #ff69b4 0%, #ffffff 35%, #00ff99 70%, #ffb6c1 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 2px 8px rgba(255, 105, 180, 0.4)) drop-shadow(0 0 20px rgba(0, 255, 153, 0.3))',
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif'
          }}>
            Hello Kitty Konsept Doğum Günü
          </h3>
        </div>
      </section>
      <div className="w-full flex justify-center items-center bg-white py-8">
        <img 
          src="/content/images/konsepts/hellokittydogumgunu.jpeg"
          alt="Hello Kitty konsept doğum günü - İstanbul"
          className="object-contain max-h-[80vh] w-auto"
        />
      </div>
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p style={{
            fontSize: 'clamp(1.0625rem, 2.5vw, 1.1875rem)',
            lineHeight: '1.5',
            letterSpacing: '-0.003em',
            color: '#1d1d1f',
            maxWidth: '980px',
            margin: '0 auto',
            fontWeight: 400
          }}>
            İstanbul'da Hello Kitty temalı doğum günü organizasyonu ile sevimli kedi dünyasını gerçeğe dönüştürün. Pembe ve beyaz tonların hakim olduğu kawaii dekorasyon, Hello Kitty figürleri, fiyonk süslemeler ve temaya özel pasta ile Japonya'nın sevimli ikonunu kutlamaya taşıyoruz. 3-8 yaş arası kız çocukları için Hello Kitty kostümlü karakter, yüz boyama ve cute themed aktivitelerle unutulmaz bir kawaii parti deneyimi sunuyoruz.
          </p>
        </div>
      </section>

      {/* 8. Iron Man / Süper Kahraman */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 style={{ 
            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
            fontWeight: 800,
            letterSpacing: '0.05em',
            lineHeight: '1.08',
            textTransform: 'uppercase',
            background: 'linear-gradient(135deg, #dc143c 0%, #ff0000 30%, #ffd700 70%, #ffaa00 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 2px 8px rgba(220, 20, 60, 0.5)) drop-shadow(0 0 20px rgba(255, 215, 0, 0.4))',
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif'
          }}>
            Iron Man & Süper Kahraman Doğum Günü
          </h3>
        </div>
      </section>
      <div className="w-full flex justify-center items-center bg-white py-8">
        <img 
          src="/content/images/konsepts/ironmandogumgunusuperkahraman.jpeg"
          alt="Iron Man süper kahraman doğum günü - İstanbul"
          className="object-contain max-h-[80vh] w-auto"
        />
      </div>
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p style={{
            fontSize: 'clamp(1.0625rem, 2.5vw, 1.1875rem)',
            lineHeight: '1.5',
            letterSpacing: '-0.003em',
            color: '#1d1d1f',
            maxWidth: '980px',
            margin: '0 auto',
            fontWeight: 400
          }}>
            İstanbul'da Iron Man ve Marvel süper kahramanlar temalı doğum günü organizasyonu ile Avengers dünyasını yaşatın. Kırmızı-altın tonlarda Tony Stark'ın ikonik zırhını andıran dekorasyon, süper kahraman figürleri ve teknolojik görünümlü süslemelerle çocuklar kendilerini Stark Industries'de hissedecek. 4-12 yaş arası Marvel hayranları için süper kahraman kostümlü karakterler, power-up aktiviteleri ve Avengers temalı parti ile unutulmaz bir kahraman macerası sunuyoruz.
          </p>
        </div>
      </section>

      {/* 9. Minecraft */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 style={{ 
            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
            fontWeight: 800,
            letterSpacing: '0.05em',
            lineHeight: '1.08',
            textTransform: 'uppercase',
            background: 'linear-gradient(135deg, #228b22 0%, #32cd32 30%, #ff8c00 70%, #ff6347 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 2px 8px rgba(34, 139, 34, 0.4)) drop-shadow(0 0 20px rgba(255, 140, 0, 0.4))',
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif'
          }}>
            Minecraft Konsept Doğum Günü
          </h3>
        </div>
      </section>
      <div className="w-full flex justify-center items-center bg-white py-8">
        <img 
          src="/content/images/konsepts/minecraftdogumgunu.jpg"
          alt="Minecraft konsept doğum günü - İstanbul"
          className="object-contain max-h-[80vh] w-auto"
        />
      </div>
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p style={{
            fontSize: 'clamp(1.0625rem, 2.5vw, 1.1875rem)',
            lineHeight: '1.5',
            letterSpacing: '-0.003em',
            color: '#1d1d1f',
            maxWidth: '980px',
            margin: '0 auto',
            fontWeight: 400
          }}>
            İstanbul'da Minecraft temalı doğum günü organizasyonu ile piksel dünyasını gerçeğe dönüştürün. Karakteristik küp bloklar, Creeper ve Steve figürleri, yeşil-kahverengi pixelated dekorasyon ve Minecraft temalı pasta ile dünyanın en popüler oyununu partiye taşıyoruz. 6-14 yaş arası gamer çocuklar için craft aktiviteleri, mining oyunları ve survival challenges ile unutulmaz bir blok dünyası macerası sunuyoruz.
          </p>
        </div>
      </section>

      {/* 10. Okyanus Konsept */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 style={{ 
            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
            fontWeight: 800,
            letterSpacing: '0.05em',
            lineHeight: '1.08',
            textTransform: 'uppercase',
            background: 'linear-gradient(135deg, #006994 0%, #0099cc 20%, #00ccff 40%, #33ccff 60%, #66ffff 80%, #00ffcc 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 2px 8px rgba(0, 105, 148, 0.4)) drop-shadow(0 0 20px rgba(0, 255, 204, 0.3))',
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif'
          }}>
            Okyanus Konsept Doğum Günü
          </h3>
        </div>
      </section>
      <div className="w-full flex justify-center items-center bg-white py-8">
        <img 
          src="/content/images/konsepts/okyanukonseptdogumgunu.jpeg"
          alt="Okyanus konsept doğum günü - İstanbul"
          className="object-contain max-h-[80vh] w-auto"
        />
      </div>
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p style={{
            fontSize: 'clamp(1.0625rem, 2.5vw, 1.1875rem)',
            lineHeight: '1.5',
            letterSpacing: '-0.003em',
            color: '#1d1d1f',
            maxWidth: '980px',
            margin: '0 auto',
            fontWeight: 400
          }}>
            İstanbul'da okyanus temalı doğum günü organizasyonu ile deniz altı büyüsünü yaşatın. Mavi tonlar, balık figürleri, deniz yıldızları, ahtapotlar ve mercanlarla süslenmiş deniz temalı dekorasyon ile çocuklar kendilerini okyanusun derinliklerinde hissedecek. 2-8 yaş arası denizi seven çocuklar için su aktiviteleri, balon balıklar ve under the sea konseptli pasta ile unutulmaz bir okyanus macerası sunuyoruz.
          </p>
        </div>
      </section>

      {/* 11. Spider-Man, Batman & Demir Adam */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 style={{ 
            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
            fontWeight: 800,
            letterSpacing: '0.05em',
            lineHeight: '1.08',
            textTransform: 'uppercase',
            background: 'linear-gradient(135deg, #dc143c 0%, #ff0000 30%, #0066cc 50%, #0099ff 70%, #1a1a1a 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 2px 8px rgba(220, 20, 60, 0.4)) drop-shadow(0 0 20px rgba(0, 102, 204, 0.4))',
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif'
          }}>
            Süper Kahramanlar: Spider-Man, Batman & Iron Man
          </h3>
        </div>
      </section>
      <div className="w-full flex justify-center items-center bg-white py-8">
        <img 
          src="/content/images/konsepts/spidermanbatmandemiradamsuperkahramandogumgunu.jpg"
          alt="Spider-Man Batman Iron Man süper kahraman doğum günü - İstanbul"
          className="object-contain max-h-[80vh] w-auto"
        />
      </div>
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p style={{
            fontSize: 'clamp(1.0625rem, 2.5vw, 1.1875rem)',
            lineHeight: '1.5',
            letterSpacing: '-0.003em',
            color: '#1d1d1f',
            maxWidth: '980px',
            margin: '0 auto',
            fontWeight: 400
          }}>
            İstanbul'da üç büyük süper kahramanı bir arada yaşatan muhteşem doğum günü organizasyonu! Spider-Man'in örümcek ağları, Batman'in karanlık şövalye atmosferi ve Iron Man'in teknolojik zırhı ile ultimate superhero party. Kırmızı, siyah ve altın tonlarda hazırlanan dekorasyon, üç kahramanın kostümlü karakterleri ve Marvel-DC crossover temalı aktivitelerle 4-12 yaş arası süper kahraman hayranları için unutulmaz bir macera sunuyoruz.
          </p>
        </div>
      </section>

      {/* 12. Sünger Bob */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 style={{ 
            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
            fontWeight: 800,
            letterSpacing: '0.05em',
            lineHeight: '1.08',
            textTransform: 'uppercase',
            background: 'linear-gradient(135deg, #ffcc00 0%, #ffdd00 30%, #ff9900 70%, #ff6600 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 2px 8px rgba(255, 204, 0, 0.5)) drop-shadow(0 0 20px rgba(255, 102, 0, 0.4))',
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif'
          }}>
            Sünger Bob Konsept Doğum Günü
          </h3>
        </div>
      </section>
      <div className="w-full flex justify-center items-center bg-white py-8">
        <img 
          src="/content/images/konsepts/sungerbobdogumgunu.jpeg"
          alt="Sünger Bob konsept doğum günü - İstanbul"
          className="object-contain max-h-[80vh] w-auto"
        />
      </div>
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p style={{
            fontSize: 'clamp(1.0625rem, 2.5vw, 1.1875rem)',
            lineHeight: '1.5',
            letterSpacing: '-0.003em',
            color: '#1d1d1f',
            maxWidth: '980px',
            margin: '0 auto',
            fontWeight: 400
          }}>
            İstanbul'da Sünger Bob Kare Şantalon temalı doğum günü organizasyonu ile Bikini Bottom'ı gerçeğe dönüştürün. Sarı ve mavi tonlar, deniz yıldızları, ananas evler, Krusty Krab dekorasyonu ve SpongeBob karakterleriyle çocuklar kendilerini denizin altındaki komik dünyada hissedecek. 3-10 yaş arası SpongeBob hayranları için Patrick, Squidward ve Mr. Krabs karakterleri, underwater games ve Bikini Bottom temalı aktivitelerle eğlence dolu bir parti sunuyoruz.
          </p>
        </div>
      </section>

      {/* Neden Best Event? */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-purple-900 via-pink-900 to-rose-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-pink-400 mb-4 font-medium">10+ YIL DENEYİM</p>
            <h2 className="font-display font-bold text-white mb-6" style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)', lineHeight: '1.2' }}>
              Neden Best Event?
            </h2>
            <p className="text-gray-200 max-w-3xl mx-auto leading-relaxed" style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', lineHeight: '1.7' }}>
              İstanbul'da 10+ yıldır konsept doğum günü organizasyonu yapıyoruz. 1500+ başarılı etkinlik, 4000+ mutlu çocuk. Profesyonel ekibimiz ve kaliteli hizmet anlayışımızla yanınızdayız.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🎨",
                title: "Özel Tema Tasarımı",
                description: "20+ farklı tema seçeneği. Barbie'den Minecraft'a, prenseslerden süper kahramanlara her tema profesyonel dekorasyon."
              },
              {
                icon: "⭐",
                title: "Profesyonel Ekip",
                description: "10+ yıl deneyimli, sertifikalı dekoratörler ve organizatörler. Her detay mükemmellik için planlanır."
              },
              {
                icon: "🎭",
                title: "Kostümlü Karakterler",
                description: "Temaya uygun kostümlü karakterler. Çocukların en sevdiği karakterlerle etkileşim ve eğlence garantisi."
              },
              {
                icon: "✨",
                title: "Premium Malzemeler",
                description: "Yüksek kaliteli dekorasyon malzemeleri. Güvenli, dayanıklı ve görsel olarak etkileyici süslemeler."
              },
              {
                icon: "📸",
                title: "Profesyonel Fotoğraf",
                description: "Her anın ölümsüzleştirilmesi. Konsept fotoselli fotoğraf köşesi ve profesyonel çekim hizmeti."
              },
              {
                icon: "💯",
                title: "Müşteri Memnuniyeti",
                description: "%98 müşteri memnuniyeti oranı. Binlerce olumlu geri bildirim ve referans. Güvenle tercih edebilirsiniz."
              },
              {
                icon: "📍",
                title: "Tüm İstanbul'da Hizmet",
                description: "Kadıköy'den Beylikdüzü'ne, Sarıyer'den Maltepe'ye. İstanbul'un her köşesinde profesyonel organizasyon."
              },
              {
                icon: "🚀",
                title: "Hızlı Kurulum",
                description: "2-3 saat önceden kurulum. Misafirler geldiğinde her şey hazır. Etkinlik sonrası hızlı toplanma."
              },
              {
                icon: "🎁",
                title: "Ekstra Sürprizler",
                description: "Temaya özel sürpriz elementler. Balon süslemeler, ışık efektleri ve özel dekoratif detaylar dahil."
              },
              {
                icon: "🏆",
                title: "Tecrübeli Organizasyon",
                description: "1500+ başarılı konsept doğum günü deneyimi. Kurumsal ve bireysel etkinliklerde güven ve kalite."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-white/20"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-display text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-200 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sıkça Sorulan Sorular */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Sıkça Sorulan Sorular
          </h2>
          
          {/* İlk 2 FAQ - Açık (SEO için) */}
          <div className="space-y-6 mb-6">
            {faqs.slice(0, 2).map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl p-6"
              >
                <h3 className="font-bold text-xl text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Kalan 6 FAQ - Accordion */}
          <div className="space-y-4">
            {faqs.slice(2).map((faq, index) => (
              <details
                key={index}
                className="group bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all"
              >
                <summary className="font-bold text-lg text-white cursor-pointer list-none flex justify-between items-center">
                  {faq.question}
                  <span className="text-purple-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>

        {/* FAQPage Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
      </section>

      {/* Hizmet Bölgeleri */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">İstanbul'da Konsept Doğum Günü Hizmet Bölgelerimiz</h2>
          <p className="text-xl text-gray-300 mb-8">
            İstanbul'un tüm ilçelerinde konsept doğum günü organizasyonu hizmeti veriyoruz
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Kadıköy', 'Beşiktaş', 'Şişli', 'Bakırköy',
              'Üsküdar', 'Maltepe', 'Kartal', 'Ataşehir',
              'Pendik', 'Sarıyer', 'Beyoğlu', 'Fatih',
              'Başakşehir', 'Küçükçekmece', 'Esenyurt', 've daha fazlası...'
            ].map((district, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="py-3 px-4 bg-gray-800 text-gray-200 rounded-lg shadow-sm font-medium"
              >
                {district}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-pink-600 via-rose-500 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-5xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.25' }}>Hemen Rezervasyon Yapın!</h2>
          <p className="text-xl mb-10 text-white/95 text-center max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.7' }}>
            Çocuğunuzun hayalindeki doğum gününü birlikte planlayalım
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/905349306799?text=Konsept doğum günü rezervasyonu yapmak istiyorum"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-12 py-5 rounded-xl font-bold text-xl shadow-2xl transition-all"
            >
                WhatsApp
            </a>
            <a
              href="tel:+905349306799"
              className="bg-white hover:bg-gray-100 text-gray-900 px-12 py-5 rounded-xl font-bold text-xl shadow-2xl transition-all"
            >
                0534 930 67 99
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default ConceptBirthday
