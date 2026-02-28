import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import ScrollToTop from './components/ScrollToTop'
import Breadcrumb from './components/Breadcrumb'
import ThemeProvider from './components/ThemeProvider'
import ErrorBoundary from './components/ErrorBoundary'
import useWebVitals, { logWebVitals } from './hooks/useWebVitals'

// Lazy-loaded pages (code splitting)
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const Gallery = lazy(() => import('./pages/Gallery'))
const Contact = lazy(() => import('./pages/Contact'))
const Team = lazy(() => import('./pages/Team'))
const ServiceAreas = lazy(() => import('./pages/ServiceAreas'))

// Service Pages (lazy)
const ChildEvents = lazy(() => import('./pages/services/ChildEvents'))
const ClownRental = lazy(() => import('./pages/services/ClownRental'))
const FacePainting = lazy(() => import('./pages/services/FacePainting'))
const ProfessionalMakeup = lazy(() => import('./pages/services/ProfessionalMakeup'))
const MagicShow = lazy(() => import('./pages/services/MagicShow'))
const BubbleShow = lazy(() => import('./pages/services/BubbleShow'))
const CostumedCharacters = lazy(() => import('./pages/services/CostumedCharacters'))
const CharacterDetail = lazy(() => import('./pages/services/CharacterDetail'))
const ConceptBirthday = lazy(() => import('./pages/services/ConceptBirthday'))
const FullPackageOrganization = lazy(() => import('./pages/services/FullPackageOrganization'))
const CottonCandyCart = lazy(() => import('./pages/services/CottonCandyCart'))

// Dans Etkinlikleri (lazy)
const DanceEvents = lazy(() => import('./pages/services/DanceEvents'))

// Müzik Etkinlikleri (lazy)
const MusicEvents = lazy(() => import('./pages/services/MusicEvents'))

// Yeni Çocuk Etkinlikleri (lazy)
const Karaoke = lazy(() => import('./pages/services/Karaoke'))
const PlanetEducation = lazy(() => import('./pages/services/PlanetEducation'))
const VRExperience = lazy(() => import('./pages/services/VRExperience'))
const MascotRental = lazy(() => import('./pages/services/MascotRental'))
const GirlsMascots = lazy(() => import('./pages/services/GirlsMascots'))
const BoysMascots = lazy(() => import('./pages/services/BoysMascots'))
const MascotDetail = lazy(() => import('./pages/services/MascotDetail'))
const KidsTableChairs = lazy(() => import('./pages/services/KidsTableChairs'))
const TransformersRobot = lazy(() => import('./pages/services/TransformersRobot'))
const InflatableParks = lazy(() => import('./pages/services/InflatableParks'))
const Juggler = lazy(() => import('./pages/services/Juggler'))
const WorkshopActivities = lazy(() => import('./pages/services/WorkshopActivities'))
const ChocolateFountain = lazy(() => import('./pages/services/ChocolateFountain'))
const FireShow = lazy(() => import('./pages/services/FireShow'))
const StiltWalkers = lazy(() => import('./pages/services/StiltWalkers'))
const FullBirthdayOrganization = lazy(() => import('./pages/organizations/FullBirthdayOrganization'))

// Noel Baba Kiralama (lazy)
const SantaClausRental = lazy(() => import('./pages/organizations/SantaClausRental'))

// Organik Pastalar (lazy)
const OrganicCakes = lazy(() => import('./pages/OrganicCakes'))

// Gizlilik & Kullanım Koşulları (lazy)
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const TermsOfUse = lazy(() => import('./pages/TermsOfUse'))

// Blog (lazy)
const Blog = lazy(() => import('./pages/Blog'))

// Blog Details (lazy) - Mevcut 6 blog
const AcilisOrganizasyonu = lazy(() => import('./pages/blog/AcilisOrganizasyonu'))
const PalyacoKiralama = lazy(() => import('./pages/blog/PalyacoKiralama'))
const SihirbazGosterisi = lazy(() => import('./pages/blog/SihirbazGosterisi'))
const BubbleShowGosterisi = lazy(() => import('./pages/blog/BubbleShowGosterisi'))
const IstanbulEtkinlikRehberi = lazy(() => import('./pages/blog/IstanbulEtkinlikRehberi'))
const PalyacoGezegeni = lazy(() => import('./pages/blog/PalyacoGezegeni'))

// Blog Details (lazy) - 14 yeni blog yazısı
const PalyacoKizKulesi = lazy(() => import('./pages/blog/PalyacoKizKulesi'))
const PalyacoDogumGunuRehberi = lazy(() => import('./pages/blog/PalyacoDogumGunuRehberi'))
const SihirbazGokturkAtCiftligi = lazy(() => import('./pages/blog/SihirbazGokturkAtCiftligi'))
const SihirbazKiralamaRehberi = lazy(() => import('./pages/blog/SihirbazKiralamaRehberi'))
const BubbleShowSuHarcama = lazy(() => import('./pages/blog/BubbleShowSuHarcama'))
const BubbleShowKiralamaRehberi = lazy(() => import('./pages/blog/BubbleShowKiralamaRehberi'))
const DogumGunuOrganizasyonuRehberi = lazy(() => import('./pages/blog/DogumGunuOrganizasyonuRehberi'))
const DogumGunuMekanSecimi = lazy(() => import('./pages/blog/DogumGunuMekanSecimi'))
const PamukSekerEtkinlikRehberi = lazy(() => import('./pages/blog/PamukSekerEtkinlikRehberi'))
const PamukSekerDogumGunu = lazy(() => import('./pages/blog/PamukSekerDogumGunu'))
const KostumluKarakterRehberi = lazy(() => import('./pages/blog/KostumluKarakterRehberi'))
const KostumluKarakterDogumGunu = lazy(() => import('./pages/blog/KostumluKarakterDogumGunu'))
const YuzBoyamaRehberi = lazy(() => import('./pages/blog/YuzBoyamaRehberi'))
const YuzBoyamaDogumGunu = lazy(() => import('./pages/blog/YuzBoyamaDogumGunu'))
const MaltepePalyacoKiralama = lazy(() => import('./pages/blog/MaltepePalyacoKiralama'))
const KartalPalyacoKiralama = lazy(() => import('./pages/blog/KartalPalyacoKiralama'))
const MaltepeSihirbazKiralama = lazy(() => import('./pages/blog/MaltepeSihirbazKiralama'))
const KartalSihirbazKiralama = lazy(() => import('./pages/blog/KartalSihirbazKiralama'))
const KadikoyBesiktasAtasehirBubbleShowKiralama = lazy(() => import('./pages/blog/KadikoyBesiktasAtasehirBubbleShowKiralama'))
const SisliPalyacoKiralama = lazy(() => import('./pages/blog/SisliPalyacoKiralama'))
const BakirkoyPalyacoKiralama = lazy(() => import('./pages/blog/BakirkoyPalyacoKiralama'))
const BesiktasAtasehirPamukSekerArabasiKiralama = lazy(() => import('./pages/blog/BesiktasAtasehirPamukSekerArabasiKiralama'))
const UmraniyeBeylikduzuBakirkoySariyerDogumGunuOrganizasyonu = lazy(() => import('./pages/blog/UmraniyeBeylikduzuBakirkoySariyerDogumGunuOrganizasyonu'))
// Blog Details (lazy) - 15 yeni karakter & maskot blogları
const ElsaKiralamaDogumGunu = lazy(() => import('./pages/blog/ElsaKiralamaDogumGunu'))
const SpidermanKiralamaCocukPartisi = lazy(() => import('./pages/blog/SpidermanKiralamaCocukPartisi'))
const BatmanKiralamaOrganizasyon = lazy(() => import('./pages/blog/BatmanKiralamaOrganizasyon'))
const MinnieMouseMickeyMouseParti = lazy(() => import('./pages/blog/MinnieMouseMickeyMouseParti'))
const PamukPrensesTemaPart = lazy(() => import('./pages/blog/PamukPrensesTemaPart'))
const PawPatrolCocukEtkinligi = lazy(() => import('./pages/blog/PawPatrolCocukEtkinligi'))
const PikachuPokemonParti = lazy(() => import('./pages/blog/PikachuPokemonParti'))
const UnicornTemaliDogumGunu = lazy(() => import('./pages/blog/UnicornTemaliDogumGunu'))
const HelloKittyMaskotKiralama = lazy(() => import('./pages/blog/HelloKittyMaskotKiralama'))
const SonicMaskotParti = lazy(() => import('./pages/blog/SonicMaskotParti'))
const LolBebekTemaParti = lazy(() => import('./pages/blog/LolBebekTemaParti'))
const SuperMarioCocukOrganizasyonu = lazy(() => import('./pages/blog/SuperMarioCocukOrganizasyonu'))
const MasaKocaAyiEtkinlik = lazy(() => import('./pages/blog/MasaKocaAyiEtkinlik'))
const NoelBabaYilbasiOrganizasyonu = lazy(() => import('./pages/blog/NoelBabaYilbasiOrganizasyonu'))
const DenizKiziTemaParti = lazy(() => import('./pages/blog/DenizKiziTemaParti'))

// Blog Details (lazy) - 20 yeni SEO blog yazısı
const EvdeDogumGunuOrganizasyonu = lazy(() => import('./pages/blog/EvdeDogumGunuOrganizasyonu'))
const YasaGoreDogumGunuKonsepti = lazy(() => import('./pages/blog/YasaGoreDogumGunuKonsepti'))
const SiteIcindeDogumGunu12Kritik = lazy(() => import('./pages/blog/SiteIcindeDogumGunu12Kritik'))
const PalyacoMuSihirbazMi = lazy(() => import('./pages/blog/PalyacoMuSihirbazMi'))
const DogumGunuOrganizasyonu10Hata = lazy(() => import('./pages/blog/DogumGunuOrganizasyonu10Hata'))
const ApartmanBahcesindeDogumGunu = lazy(() => import('./pages/blog/ApartmanBahcesindeDogumGunu'))
const CocukDogumGunuGuvenlikHijyen = lazy(() => import('./pages/blog/CocukDogumGunuGuvenlikHijyen'))
const MiniDiskoMuBubbleShowMu = lazy(() => import('./pages/blog/MiniDiskoMuBubbleShowMu'))
const YirmiFarkliDogumGunuKonsepti = lazy(() => import('./pages/blog/YirmiFarkliDogumGunuKonsepti'))
const EvdeDogumGunuMaliyeti = lazy(() => import('./pages/blog/EvdeDogumGunuMaliyeti'))
const AnimasyonEkibiSecimi = lazy(() => import('./pages/blog/AnimasyonEkibiSecimi'))
const IstanbulPopulerCocukPartiTemalar = lazy(() => import('./pages/blog/IstanbulPopulerCocukPartiTemalar'))
const FotografciGerekliMi = lazy(() => import('./pages/blog/FotografciGerekliMi'))
const AcikAlanKapaliMekan = lazy(() => import('./pages/blog/AcikAlanKapaliMekan'))
const KurumsalCocukFestivalleri = lazy(() => import('./pages/blog/KurumsalCocukFestivalleri'))
const CocukPartisi2026Trendleri = lazy(() => import('./pages/blog/CocukPartisi2026Trendleri'))
const AvrupaYakasiUlasimRehberi = lazy(() => import('./pages/blog/AvrupaYakasiUlasimRehberi'))
const AnadoluYakasiUlasimRehberi = lazy(() => import('./pages/blog/AnadoluYakasiUlasimRehberi'))
const TopluTasimaEtkinlikUlasim = lazy(() => import('./pages/blog/TopluTasimaEtkinlikUlasim'))
const MarmarayMetroEtkinlikErisim = lazy(() => import('./pages/blog/MarmarayMetroEtkinlikErisim'))

// Blog Details (lazy) - 5 Ramazan etkinlik blogları
const MaltepeRamazanEtkinligi = lazy(() => import('./pages/blog/MaltepeRamazanEtkinligi'))
const EyupsultanRamazanEtkinligi = lazy(() => import('./pages/blog/EyupsultanRamazanEtkinligi'))
const KartalRamazanEtkinligi = lazy(() => import('./pages/blog/KartalRamazanEtkinligi'))
const UskudarRamazanEtkinligi = lazy(() => import('./pages/blog/UskudarRamazanEtkinligi'))
const IstanbulRamazanCocukEtkinlikleri = lazy(() => import('./pages/blog/IstanbulRamazanCocukEtkinlikleri'))

// Local Landing Pages (Semt bazlı hizmet sayfaları - Programmatic SEO)
const LocalLandingPage = lazy(() => import('./pages/local/LocalLandingPage'))

// 404 Page (lazy)
const NotFound = lazy(() => import('./pages/NotFound'))

function App() {
  const location = useLocation()
  
  // Web Vitals tracking (development: console, production: analytics)
  useWebVitals((metric) => {
    // Development: Console'a yaz
    if (import.meta.env.DEV) {
      logWebVitals(metric);
    }
    
    // Production: Analytics'e gönder (opsiyonel)
    // if (import.meta.env.PROD) {
    //   sendToAnalytics(metric);
    // }
  });

  // WhatsApp butonu tüm sayfalarda görünsün

  return (
    <div className="App">
      <Navbar />
      <ScrollToTop />
      <Breadcrumb />
      <main>
        <ErrorBoundary>
          <Suspense fallback={
            <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: 40, height: 40, border: '3px solid rgba(147,51,234,0.2)', borderTopColor: '#9333ea', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
              <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
            </div>
          }>
            <ThemeProvider>
              <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hakkimizda" element={<About />} />
        <Route path="/organizasyonlar" element={<Navigate to="/organizasyonlar/cocuk-etkinlikleri" replace />} />
        <Route path="/galeri" element={<Gallery />} />
        <Route path="/iletisim" element={<Contact />} />
        <Route path="/ekibimiz" element={<Team />} />
        <Route path="/hizmet-bolgeleri" element={<ServiceAreas />} />
        <Route path="/organik-pastalar" element={<OrganicCakes />} />
        <Route path="/gizlilik" element={<PrivacyPolicy />} />
        <Route path="/kullanim-kosullari" element={<TermsOfUse />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/palyaco-gezegeni" element={<PalyacoGezegeni />} />
        <Route path="/blog/istanbul-etkinlik-rehberi" element={<IstanbulEtkinlikRehberi />} />
        <Route path="/blog/acilis-organizasyonu-istanbul" element={<AcilisOrganizasyonu />} />
        <Route path="/blog/palyaco-kiralama-istanbul" element={<PalyacoKiralama />} />
        <Route path="/blog/sihirbaz-gosterisi-istanbul" element={<SihirbazGosterisi />} />
        <Route path="/blog/bubble-show-istanbul" element={<BubbleShowGosterisi />} />

        {/* Yeni Blog Yazıları (14 adet) */}
        <Route path="/blog/palyaco-kiz-kulesi-organizasyonu" element={<PalyacoKizKulesi />} />
        <Route path="/blog/palyaco-dogum-gunu-rehberi" element={<PalyacoDogumGunuRehberi />} />
        <Route path="/blog/sihirbaz-gokturk-at-ciftligi" element={<SihirbazGokturkAtCiftligi />} />
        <Route path="/blog/sihirbaz-kiralama-rehberi" element={<SihirbazKiralamaRehberi />} />
        <Route path="/blog/bubble-show-ne-kadar-su-harcar" element={<BubbleShowSuHarcama />} />
        <Route path="/blog/bubble-show-kiralama-rehberi" element={<BubbleShowKiralamaRehberi />} />
        <Route path="/blog/dogum-gunu-organizasyonu-rehberi" element={<DogumGunuOrganizasyonuRehberi />} />
        <Route path="/blog/dogum-gunu-mekan-secimi" element={<DogumGunuMekanSecimi />} />
        <Route path="/blog/pamuk-seker-etkinlik-rehberi" element={<PamukSekerEtkinlikRehberi />} />
        <Route path="/blog/pamuk-seker-dogum-gunu-organizasyonu" element={<PamukSekerDogumGunu />} />
        <Route path="/blog/kostumlu-karakter-kiralama-rehberi" element={<KostumluKarakterRehberi />} />
        <Route path="/blog/kostumlu-karakter-dogum-gunu" element={<KostumluKarakterDogumGunu />} />
        <Route path="/blog/yuz-boyama-kiralama-rehberi" element={<YuzBoyamaRehberi />} />
        <Route path="/blog/yuz-boyama-dogum-gunu-organizasyonu" element={<YuzBoyamaDogumGunu />} />
        <Route path="/blog/maltepe-palyaco-kiralama" element={<MaltepePalyacoKiralama />} />
        <Route path="/blog/kartal-palyaco-kiralama" element={<KartalPalyacoKiralama />} />
        <Route path="/blog/maltepe-sihirbaz-kiralama" element={<MaltepeSihirbazKiralama />} />
        <Route path="/blog/kartal-sihirbaz-kiralama" element={<KartalSihirbazKiralama />} />
        <Route path="/blog/kadikoy-besiktas-atasehir-bubble-show-kiralama" element={<KadikoyBesiktasAtasehirBubbleShowKiralama />} />
        <Route path="/blog/sisli-palyaco-kiralama" element={<SisliPalyacoKiralama />} />
        <Route path="/blog/bakirkoy-palyaco-kiralama" element={<BakirkoyPalyacoKiralama />} />
        <Route path="/blog/besiktas-atasehir-pamuk-seker-arabasi-kiralama" element={<BesiktasAtasehirPamukSekerArabasiKiralama />} />
        <Route path="/blog/umraniye-beylikduzu-bakirkoy-sariyer-dogum-gunu-organizasyonu" element={<UmraniyeBeylikduzuBakirkoySariyerDogumGunuOrganizasyonu />} />
        {/* Yeni karakter & maskot blogları (15 adet) */}
        <Route path="/blog/elsa-kiralama-dogum-gunu" element={<ElsaKiralamaDogumGunu />} />
        <Route path="/blog/spiderman-kiralama-cocuk-partisi" element={<SpidermanKiralamaCocukPartisi />} />
        <Route path="/blog/batman-kiralama-organizasyon" element={<BatmanKiralamaOrganizasyon />} />
        <Route path="/blog/minnie-mouse-mickey-mouse-parti" element={<MinnieMouseMickeyMouseParti />} />
        <Route path="/blog/pamuk-prenses-tema-parti" element={<PamukPrensesTemaPart />} />
        <Route path="/blog/paw-patrol-cocuk-etkinligi" element={<PawPatrolCocukEtkinligi />} />
        <Route path="/blog/pikachu-pokemon-parti" element={<PikachuPokemonParti />} />
        <Route path="/blog/unicorn-temali-dogum-gunu" element={<UnicornTemaliDogumGunu />} />
        <Route path="/blog/hello-kitty-maskot-kiralama" element={<HelloKittyMaskotKiralama />} />
        <Route path="/blog/sonic-maskot-parti" element={<SonicMaskotParti />} />
        <Route path="/blog/lol-bebek-tema-parti" element={<LolBebekTemaParti />} />
        <Route path="/blog/super-mario-cocuk-organizasyonu" element={<SuperMarioCocukOrganizasyonu />} />
        <Route path="/blog/masa-koca-ayi-etkinlik" element={<MasaKocaAyiEtkinlik />} />
        <Route path="/blog/noel-baba-yilbasi-organizasyonu" element={<NoelBabaYilbasiOrganizasyonu />} />
        <Route path="/blog/deniz-kizi-tema-parti" element={<DenizKiziTemaParti />} />

        {/* 20 Yeni SEO Blog Yazıları */}
        <Route path="/blog/evde-dogum-gunu-organizasyonu" element={<EvdeDogumGunuOrganizasyonu />} />
        <Route path="/blog/yasa-gore-dogum-gunu-konsepti" element={<YasaGoreDogumGunuKonsepti />} />
        <Route path="/blog/site-icinde-dogum-gunu-12-kritik" element={<SiteIcindeDogumGunu12Kritik />} />
        <Route path="/blog/palyaco-mu-sihirbaz-mi" element={<PalyacoMuSihirbazMi />} />
        <Route path="/blog/dogum-gunu-organizasyonu-10-hata" element={<DogumGunuOrganizasyonu10Hata />} />
        <Route path="/blog/apartman-bahcesinde-dogum-gunu" element={<ApartmanBahcesindeDogumGunu />} />
        <Route path="/blog/cocuk-dogum-gunu-guvenlik-hijyen" element={<CocukDogumGunuGuvenlikHijyen />} />
        <Route path="/blog/mini-disko-mu-bubble-show-mu" element={<MiniDiskoMuBubbleShowMu />} />
        <Route path="/blog/20-farkli-dogum-gunu-konsepti" element={<YirmiFarkliDogumGunuKonsepti />} />
        <Route path="/blog/evde-dogum-gunu-maliyeti" element={<EvdeDogumGunuMaliyeti />} />
        <Route path="/blog/animasyon-ekibi-secimi" element={<AnimasyonEkibiSecimi />} />
        <Route path="/blog/istanbul-populer-cocuk-parti-temalari" element={<IstanbulPopulerCocukPartiTemalar />} />
        <Route path="/blog/fotografci-gerekli-mi" element={<FotografciGerekliMi />} />
        <Route path="/blog/acik-alan-kapali-mekan" element={<AcikAlanKapaliMekan />} />
        <Route path="/blog/kurumsal-cocuk-festivalleri" element={<KurumsalCocukFestivalleri />} />
        <Route path="/blog/cocuk-partisi-2026-trendleri" element={<CocukPartisi2026Trendleri />} />
        <Route path="/blog/avrupa-yakasi-ulasim-rehberi" element={<AvrupaYakasiUlasimRehberi />} />
        <Route path="/blog/anadolu-yakasi-ulasim-rehberi" element={<AnadoluYakasiUlasimRehberi />} />
        <Route path="/blog/toplu-tasima-etkinlik-ulasim" element={<TopluTasimaEtkinlikUlasim />} />
        <Route path="/blog/marmaray-metro-etkinlik-erisim" element={<MarmarayMetroEtkinlikErisim />} />

        {/* Ramazan Etkinlik Blogları (5 adet) */}
        <Route path="/blog/maltepe-ramazan-palyaco-sihirbaz" element={<MaltepeRamazanEtkinligi />} />
        <Route path="/blog/eyupsultan-ramazan-palyaco-sihirbaz" element={<EyupsultanRamazanEtkinligi />} />
        <Route path="/blog/kartal-ramazan-palyaco-sihirbaz" element={<KartalRamazanEtkinligi />} />
        <Route path="/blog/uskudar-ramazan-palyaco-sihirbaz" element={<UskudarRamazanEtkinligi />} />
        <Route path="/blog/istanbul-ramazan-cocuk-etkinlikleri" element={<IstanbulRamazanCocukEtkinlikleri />} />

        {/* Service Routes */}
        <Route path="/organizasyonlar/cocuk-etkinlikleri" element={<ChildEvents />} />
        
        {/* Child Event Category Routes */}
        <Route path="/organizasyonlar/yuz-boyama" element={<FacePainting />} />
        <Route path="/organizasyonlar/profesyonel-makyaj" element={<ProfessionalMakeup />} />
        <Route path="/organizasyonlar/magic-show" element={<MagicShow />} />
        <Route path="/organizasyonlar/bubble-show" element={<BubbleShow />} />
        <Route path="/organizasyonlar/kostumlu-karakterler" element={<CostumedCharacters />} />
        
        <Route path="/organizasyonlar/dogum-gunu-organizasyonu" element={<FullBirthdayOrganization />} />
        <Route path="/organizasyonlar/konsept-dogum-gunu" element={<ConceptBirthday />} />
        <Route path="/organizasyonlar/full-paket-organizasyon" element={<FullPackageOrganization />} />
        <Route path="/organizasyonlar/pamuk-seker" element={<CottonCandyCart />} />
        <Route path="/organizasyonlar/karaoke-etkinligi" element={<Karaoke />} />
        <Route path="/organizasyonlar/gezegen-tanitim" element={<PlanetEducation />} />
        <Route path="/organizasyonlar/vr-sanal-gerceklik" element={<VRExperience />} />
        <Route path="/organizasyonlar/maskot-kiralama" element={<MascotRental />} />
        <Route path="/organizasyonlar/kiz-maskotlari" element={<GirlsMascots />} />
        <Route path="/organizasyonlar/erkek-maskotlari" element={<BoysMascots />} />
        <Route path="/organizasyonlar/cocuk-masa-sandalye" element={<KidsTableChairs />} />
        <Route path="/organizasyonlar/transformers-robot" element={<TransformersRobot />} />
        <Route path="/organizasyonlar/sisme-oyun-parki" element={<InflatableParks />} />
        <Route path="/organizasyonlar/jonklor" element={<Juggler />} />
        <Route path="/organizasyonlar/atolye-etkinlikleri" element={<WorkshopActivities />} />
        <Route path="/organizasyonlar/cikolata-selalesi" element={<ChocolateFountain />} />
        <Route path="/organizasyonlar/ates-gosterisi" element={<FireShow />} />
        <Route path="/organizasyonlar/tahtabacak" element={<StiltWalkers />} />
        
        {/* Dans Etkinlikleri Routes */}
        {/* Dans Etkinlikleri Routes */}
        <Route path="/organizasyonlar/dans-etkinlikleri" element={<DanceEvents />} />
        
        {/* Müzik Etkinlikleri Routes */}
        {/* Müzik Etkinlikleri Routes */}
        <Route path="/organizasyonlar/muzik-etkinlikleri" element={<MusicEvents />} />
        
        {/* Other Service Routes */}
        <Route path="/organizasyonlar/palyaco-kiralama" element={<ClownRental />} />
        <Route path="/organizasyonlar/sihirbaz" element={<MagicShow />} />
        <Route path="/organizasyonlar/dogum-gunu" element={<FullBirthdayOrganization />} />
        <Route path="/organizasyonlar/noel-baba-kiralama" element={<SantaClausRental />} />
        <Route path="/organizasyonlar/dj-kiralama" element={<MusicEvents />} />
        <Route path="/organizasyonlar/muzisyen-kiralama" element={<MusicEvents />} />
        <Route path="/organizasyonlar/dansci-kiralama" element={<ChildEvents />} />
        <Route path="/organizasyonlar/hostes-kiralama" element={<ChildEvents />} />
        
        {/* Kostümlü Karakter Detay Sayfaları - Dinamik Route */}
        <Route path="/karakter/:slug" element={<CharacterDetail />} />
        <Route path="/maskot/:slug" element={<MascotDetail />} />

        {/* Local Landing Pages - Semt Bazlı Hizmet Sayfaları (Programmatic SEO) */}
        <Route path="/organizasyonlar/:service/:district" element={<LocalLandingPage />} />

        {/* 404 - Sayfa Bulunamadı (en sonda olmalı) */}
        <Route path="*" element={<NotFound />} />
              </Routes>
            </ThemeProvider>
          </Suspense>
        </ErrorBoundary>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
