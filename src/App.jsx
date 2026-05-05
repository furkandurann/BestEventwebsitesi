import { Routes, Route, Navigate, useParams } from 'react-router-dom'
import { Suspense, lazy, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import ScrollToTop from './components/ScrollToTop'
import Breadcrumb from './components/Breadcrumb'
import ThemeProvider from './components/ThemeProvider'
import ErrorBoundary from './components/ErrorBoundary'
import useWebVitals, { logWebVitals } from './hooks/useWebVitals'

// Chunk import retry - hata verirse cache-bust ile 1 kez daha dener
function retryImport(fn) {
  return lazy(() => fn().catch(() =>
    // İlk deneme başarısız - ?t=timestamp ile cache bypass yapıp tekrar dene
    new Promise((resolve) => {
      // Kısa bekleme sonrası tekrar dene (network gecikmesi için)
      setTimeout(() => resolve(fn()), 100)
    })
  ))
}

// Lazy-loaded pages (code splitting)
const Home = retryImport(() => import('./pages/Home'))
const About = retryImport(() => import('./pages/About'))
const Services = retryImport(() => import('./pages/Services'))
const Gallery = retryImport(() => import('./pages/Gallery'))
const Contact = retryImport(() => import('./pages/Contact'))
const Team = retryImport(() => import('./pages/Team'))
const ServiceAreas = retryImport(() => import('./pages/ServiceAreas'))
const JobsHub = retryImport(() => import('./pages/jobs/JobsHub'))
const JobListingPage = retryImport(() => import('./pages/jobs/JobListingPage'))

// Service Pages (lazy)
const ChildEvents = retryImport(() => import('./pages/services/ChildEvents'))
const ClownRental = retryImport(() => import('./pages/services/ClownRental'))
const FacePainting = retryImport(() => import('./pages/services/FacePainting'))
const ProfessionalMakeup = retryImport(() => import('./pages/services/ProfessionalMakeup'))
const MagicShow = retryImport(() => import('./pages/services/MagicShow'))
const BubbleShow = retryImport(() => import('./pages/services/BubbleShow'))
const CostumedCharacters = retryImport(() => import('./pages/services/CostumedCharacters'))
const CharacterDetail = retryImport(() => import('./pages/services/CharacterDetail'))
const ConceptBirthday = retryImport(() => import('./pages/services/ConceptBirthday'))
const ConceptDetail = retryImport(() => import('./pages/services/ConceptDetail'))
const FullPackageOrganization = retryImport(() => import('./pages/services/FullPackageOrganization'))
const CottonCandyCart = retryImport(() => import('./pages/services/CottonCandyCart'))
const ServiceDetailPage = retryImport(() => import('./pages/services/ServiceDetailPage'))

// Dans Etkinlikleri (lazy)
const DanceEvents = retryImport(() => import('./pages/services/DanceEvents'))

// Müzik Etkinlikleri (lazy)
const MusicEvents = retryImport(() => import('./pages/services/MusicEvents'))
const OpeningOrganization = retryImport(() => import('./pages/services/OpeningOrganization'))

// Yeni Çocuk Etkinlikleri (lazy)
const Karaoke = retryImport(() => import('./pages/services/Karaoke'))
const PlanetEducation = retryImport(() => import('./pages/services/PlanetEducation'))
const VRExperience = retryImport(() => import('./pages/services/VRExperience'))
const MascotRental = retryImport(() => import('./pages/services/MascotRental'))
const GirlsMascots = retryImport(() => import('./pages/services/GirlsMascots'))
const BoysMascots = retryImport(() => import('./pages/services/BoysMascots'))
const MascotDetail = retryImport(() => import('./pages/services/MascotDetail'))
const KidsTableChairs = retryImport(() => import('./pages/services/KidsTableChairs'))
const TransformersRobot = retryImport(() => import('./pages/services/TransformersRobot'))
const InflatableParks = retryImport(() => import('./pages/services/InflatableParks'))
const Juggler = retryImport(() => import('./pages/services/Juggler'))
const WorkshopActivities = retryImport(() => import('./pages/services/WorkshopActivities'))
const ChocolateFountain = retryImport(() => import('./pages/services/ChocolateFountain'))
const FireShow = retryImport(() => import('./pages/services/FireShow'))
const StiltWalkers = retryImport(() => import('./pages/services/StiltWalkers'))
const FullBirthdayOrganization = retryImport(() => import('./pages/organizations/FullBirthdayOrganization'))
const SurvivorParkuru = retryImport(() => import('./pages/services/SurvivorParkuru'))

// Noel Baba Kiralama (lazy)
const SantaClausRental = retryImport(() => import('./pages/organizations/SantaClausRental'))

// Organik Pastalar (lazy)
const OrganicCakes = retryImport(() => import('./pages/OrganicCakes'))

// Gizlilik & Kullanım Koşulları (lazy)
const PrivacyPolicy = retryImport(() => import('./pages/PrivacyPolicy'))
const TermsOfUse = retryImport(() => import('./pages/TermsOfUse'))

// Blog (lazy)
const Blog = retryImport(() => import('./pages/Blog'))

// Blog Details (lazy) - Mevcut 6 blog
const AcilisOrganizasyonu = retryImport(() => import('./pages/blog/AcilisOrganizasyonu'))
const PalyacoKiralama = retryImport(() => import('./pages/blog/PalyacoKiralama'))
const SihirbazGosterisi = retryImport(() => import('./pages/blog/SihirbazGosterisi'))
const BubbleShowGosterisi = retryImport(() => import('./pages/blog/BubbleShowGosterisi'))
const IstanbulEtkinlikRehberi = retryImport(() => import('./pages/blog/IstanbulEtkinlikRehberi'))
const PalyacoGezegeni = retryImport(() => import('./pages/blog/PalyacoGezegeni'))

// Blog Details (lazy) - 14 yeni blog yazısı
const PalyacoKizKulesi = retryImport(() => import('./pages/blog/PalyacoKizKulesi'))
const PalyacoDogumGunuRehberi = retryImport(() => import('./pages/blog/PalyacoDogumGunuRehberi'))
const SihirbazGokturkAtCiftligi = retryImport(() => import('./pages/blog/SihirbazGokturkAtCiftligi'))
const SihirbazKiralamaRehberi = retryImport(() => import('./pages/blog/SihirbazKiralamaRehberi'))
const BubbleShowSuHarcama = retryImport(() => import('./pages/blog/BubbleShowSuHarcama'))
const BubbleShowKiralamaRehberi = retryImport(() => import('./pages/blog/BubbleShowKiralamaRehberi'))
const DogumGunuOrganizasyonuRehberi = retryImport(() => import('./pages/blog/DogumGunuOrganizasyonuRehberi'))
const DogumGunuMekanSecimi = retryImport(() => import('./pages/blog/DogumGunuMekanSecimi'))
const PamukSekerEtkinlikRehberi = retryImport(() => import('./pages/blog/PamukSekerEtkinlikRehberi'))
const PamukSekerDogumGunu = retryImport(() => import('./pages/blog/PamukSekerDogumGunu'))
const KostumluKarakterRehberi = retryImport(() => import('./pages/blog/KostumluKarakterRehberi'))
const KostumluKarakterDogumGunu = retryImport(() => import('./pages/blog/KostumluKarakterDogumGunu'))
const YuzBoyamaRehberi = retryImport(() => import('./pages/blog/YuzBoyamaRehberi'))
const YuzBoyamaDogumGunu = retryImport(() => import('./pages/blog/YuzBoyamaDogumGunu'))
const MaltepePalyacoKiralama = retryImport(() => import('./pages/blog/MaltepePalyacoKiralama'))
const KartalPalyacoKiralama = retryImport(() => import('./pages/blog/KartalPalyacoKiralama'))
const MaltepeSihirbazKiralama = retryImport(() => import('./pages/blog/MaltepeSihirbazKiralama'))
const KartalSihirbazKiralama = retryImport(() => import('./pages/blog/KartalSihirbazKiralama'))
const KadikoyBesiktasAtasehirBubbleShowKiralama = retryImport(() => import('./pages/blog/KadikoyBesiktasAtasehirBubbleShowKiralama'))
const SisliPalyacoKiralama = retryImport(() => import('./pages/blog/SisliPalyacoKiralama'))
const BakirkoyPalyacoKiralama = retryImport(() => import('./pages/blog/BakirkoyPalyacoKiralama'))
const BesiktasAtasehirPamukSekerArabasiKiralama = retryImport(() => import('./pages/blog/BesiktasAtasehirPamukSekerArabasiKiralama'))
const UmraniyeBeylikduzuBakirkoySariyerDogumGunuOrganizasyonu = retryImport(() => import('./pages/blog/UmraniyeBeylikduzuBakirkoySariyerDogumGunuOrganizasyonu'))
// Blog Details (lazy) - 15 yeni karakter & maskot blogları
const ElsaKiralamaDogumGunu = retryImport(() => import('./pages/blog/ElsaKiralamaDogumGunu'))
const SpidermanKiralamaCocukPartisi = retryImport(() => import('./pages/blog/SpidermanKiralamaCocukPartisi'))
const BatmanKiralamaOrganizasyon = retryImport(() => import('./pages/blog/BatmanKiralamaOrganizasyon'))
const MinnieMouseMickeyMouseParti = retryImport(() => import('./pages/blog/MinnieMouseMickeyMouseParti'))
const PamukPrensesTemaPart = retryImport(() => import('./pages/blog/PamukPrensesTemaPart'))
const PawPatrolCocukEtkinligi = retryImport(() => import('./pages/blog/PawPatrolCocukEtkinligi'))
const PikachuPokemonParti = retryImport(() => import('./pages/blog/PikachuPokemonParti'))
const UnicornTemaliDogumGunu = retryImport(() => import('./pages/blog/UnicornTemaliDogumGunu'))
const HelloKittyMaskotKiralama = retryImport(() => import('./pages/blog/HelloKittyMaskotKiralama'))
const SonicMaskotParti = retryImport(() => import('./pages/blog/SonicMaskotParti'))
const LolBebekTemaParti = retryImport(() => import('./pages/blog/LolBebekTemaParti'))
const SuperMarioCocukOrganizasyonu = retryImport(() => import('./pages/blog/SuperMarioCocukOrganizasyonu'))
const MasaKocaAyiEtkinlik = retryImport(() => import('./pages/blog/MasaKocaAyiEtkinlik'))
const NoelBabaYilbasiOrganizasyonu = retryImport(() => import('./pages/blog/NoelBabaYilbasiOrganizasyonu'))
const DenizKiziTemaParti = retryImport(() => import('./pages/blog/DenizKiziTemaParti'))

// Blog Details (lazy) - 20 yeni SEO blog yazısı
const EvdeDogumGunuOrganizasyonu = retryImport(() => import('./pages/blog/EvdeDogumGunuOrganizasyonu'))
const YasaGoreDogumGunuKonsepti = retryImport(() => import('./pages/blog/YasaGoreDogumGunuKonsepti'))
const SiteIcindeDogumGunu12Kritik = retryImport(() => import('./pages/blog/SiteIcindeDogumGunu12Kritik'))
const PalyacoMuSihirbazMi = retryImport(() => import('./pages/blog/PalyacoMuSihirbazMi'))
const DogumGunuOrganizasyonu10Hata = retryImport(() => import('./pages/blog/DogumGunuOrganizasyonu10Hata'))
const ApartmanBahcesindeDogumGunu = retryImport(() => import('./pages/blog/ApartmanBahcesindeDogumGunu'))
const CocukDogumGunuGuvenlikHijyen = retryImport(() => import('./pages/blog/CocukDogumGunuGuvenlikHijyen'))
const MiniDiskoMuBubbleShowMu = retryImport(() => import('./pages/blog/MiniDiskoMuBubbleShowMu'))
const YirmiFarkliDogumGunuKonsepti = retryImport(() => import('./pages/blog/YirmiFarkliDogumGunuKonsepti'))
const EvdeDogumGunuMaliyeti = retryImport(() => import('./pages/blog/EvdeDogumGunuMaliyeti'))
const AnimasyonEkibiSecimi = retryImport(() => import('./pages/blog/AnimasyonEkibiSecimi'))
const IstanbulPopulerCocukPartiTemalar = retryImport(() => import('./pages/blog/IstanbulPopulerCocukPartiTemalar'))
const FotografciGerekliMi = retryImport(() => import('./pages/blog/FotografciGerekliMi'))
const AcikAlanKapaliMekan = retryImport(() => import('./pages/blog/AcikAlanKapaliMekan'))
const KurumsalCocukFestivalleri = retryImport(() => import('./pages/blog/KurumsalCocukFestivalleri'))
const CocukPartisi2026Trendleri = retryImport(() => import('./pages/blog/CocukPartisi2026Trendleri'))
const AvrupaYakasiUlasimRehberi = retryImport(() => import('./pages/blog/AvrupaYakasiUlasimRehberi'))
const AnadoluYakasiUlasimRehberi = retryImport(() => import('./pages/blog/AnadoluYakasiUlasimRehberi'))
const TopluTasimaEtkinlikUlasim = retryImport(() => import('./pages/blog/TopluTasimaEtkinlikUlasim'))
const MarmarayMetroEtkinlikErisim = retryImport(() => import('./pages/blog/MarmarayMetroEtkinlikErisim'))

// Blog Details (lazy) - 5 Ramazan etkinlik blogları
const MaltepeRamazanEtkinligi = retryImport(() => import('./pages/blog/MaltepeRamazanEtkinligi'))
const EyupsultanRamazanEtkinligi = retryImport(() => import('./pages/blog/EyupsultanRamazanEtkinligi'))
const KartalRamazanEtkinligi = retryImport(() => import('./pages/blog/KartalRamazanEtkinligi'))
const UskudarRamazanEtkinligi = retryImport(() => import('./pages/blog/UskudarRamazanEtkinligi'))
const IstanbulRamazanCocukEtkinlikleri = retryImport(() => import('./pages/blog/IstanbulRamazanCocukEtkinlikleri'))

// Blog Details (lazy) - 6 Doğum Günü özel sayfaları
const DogumGunuPalyacosu = retryImport(() => import('./pages/blog/DogumGunuPalyacosu'))
const DogumGunuSihirbazi = retryImport(() => import('./pages/blog/DogumGunuSihirbazi'))
const DogumGunuBubbleShow = retryImport(() => import('./pages/blog/DogumGunuBubbleShow'))
const DogumGunuPamukSeker = retryImport(() => import('./pages/blog/DogumGunuPamukSeker'))
const DogumGunuAnimatoru = retryImport(() => import('./pages/blog/DogumGunuAnimatoru'))
const DogumGunuOrganizasyonuRehber2026 = retryImport(() => import('./pages/blog/DogumGunuOrganizasyonuRehber2026'))

// Dynamic Blog Post (sections verisi olan bloglar için catch-all)
const DynamicBlogPost = retryImport(() => import('./pages/blog/DynamicBlogPost'))

// Vaka Analizi (Case Studies)
const CaseStudies = retryImport(() => import('./pages/CaseStudies'))
const CaseStudyDetail = retryImport(() => import('./pages/CaseStudyDetail'))

// Local Landing Pages (Semt bazlı hizmet sayfaları - Programmatic SEO)
const LocalLandingPage = retryImport(() => import('./pages/local/LocalLandingPage'))

// Not: Eski service alias'lı district URL'leri LocalLandingPage içinde normalize ediliyor.

// 404 Page (lazy)
const NotFound = retryImport(() => import('./pages/NotFound'))

const normalizeDistrictSlug = (value) => String(value || '')
  .toLowerCase()
  .trim()
  .normalize('NFKD')
  .replace(/[\u0300-\u036f]/g, '')
  .replace(/[^a-z0-9-]/g, '')

const LocalLandingAliasRedirect = ({ serviceSlug }) => {
  const { district } = useParams()
  const normalizedDistrict = normalizeDistrictSlug(district)

  if (!normalizedDistrict) {
    return <Navigate to="/404" replace />
  }

  return <Navigate to={`/organizasyonlar/${serviceSlug}/${normalizedDistrict}`} replace />
}

function App() {
  // Global click tracking - tum WhatsApp ve telefon linklerini otomatik takip eder
  useEffect(() => {
    let cleanup = null

    import('./utils/globalTracking').then(({ initGlobalClickTracking }) => {
      cleanup = initGlobalClickTracking()
    })

    return () => {
      if (typeof cleanup === 'function') {
        cleanup()
      }
    }
  }, [])

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
        <Route path="/is-ilanlari" element={<JobsHub />} />
        <Route path="/is-ilanlari/palyaco-is-ilani" element={<JobListingPage jobSlug="palyaco-is-ilani" />} />
        <Route path="/is-ilanlari/animator-is-ilani" element={<JobListingPage jobSlug="animator-is-ilani" />} />
        <Route path="/is-ilanlari/maskot-is-ilani" element={<JobListingPage jobSlug="maskot-is-ilani" />} />
        <Route path="/is-ilanlari/oyun-ablasi-abisi-is-ilani" element={<JobListingPage jobSlug="oyun-ablasi-abisi-is-ilani" />} />
        <Route path="/ekibimiz" element={<Team />} />
        <Route path="/hizmet-bolgeleri" element={<ServiceAreas />} />
        <Route path="/organik-pastalar" element={<OrganicCakes />} />
        <Route path="/gizlilik" element={<PrivacyPolicy />} />
        <Route path="/kullanim-kosullari" element={<TermsOfUse />} />
        <Route path="/vaka-analizi" element={<CaseStudies />} />
        <Route path="/vaka-analizi/:slug" element={<CaseStudyDetail />} />
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

        {/* Doğum Günü Özel Blog Sayfaları (6 adet - Trust Signals + Custom UX) */}
        <Route path="/blog/dogum-gunu-palyacosu" element={<DogumGunuPalyacosu />} />
        <Route path="/blog/dogum-gunu-sihirbazi" element={<DogumGunuSihirbazi />} />
        <Route path="/blog/dogum-gunu-bubble-show" element={<DogumGunuBubbleShow />} />
        <Route path="/blog/dogum-gunu-pamuk-seker" element={<DogumGunuPamukSeker />} />
        <Route path="/blog/dogum-gunu-animatoru" element={<DogumGunuAnimatoru />} />
        <Route path="/blog/dogum-gunu-organizasyonu-2026-rehberi" element={<DogumGunuOrganizasyonuRehber2026 />} />

        {/* Dynamic Blog Posts - sections verisi olan tüm bloglar için catch-all */}
        <Route path="/blog/:slug" element={<DynamicBlogPost />} />

        {/* Service Routes */}
        <Route path="/organizasyonlar/cocuk-etkinlikleri" element={<ChildEvents />} />
        
        {/* Child Event Category Routes */}
        <Route path="/organizasyonlar/yuz-boyama" element={<FacePainting />} />
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
        <Route path="/organizasyonlar/survivor-parkuru" element={<SurvivorParkuru />} />
        
        {/* Dans Etkinlikleri Routes */}
        {/* Dans Etkinlikleri Routes */}
        <Route path="/organizasyonlar/dans-etkinlikleri" element={<DanceEvents />} />
        
        {/* Müzik Etkinlikleri Routes */}
        {/* Müzik Etkinlikleri Routes */}
        <Route path="/organizasyonlar/muzik-etkinlikleri" element={<MusicEvents />} />
        <Route path="/organizasyonlar/acilis-organizasyonu" element={<OpeningOrganization />} />
        
        {/* Other Service Routes */}
        <Route path="/organizasyonlar/palyaco-kiralama" element={<ClownRental />} />
        <Route path="/organizasyonlar/sihirbaz" element={<Navigate to="/organizasyonlar/magic-show" replace />} />
        <Route path="/organizasyonlar/sihirbaz-kiralama" element={<Navigate to="/organizasyonlar/magic-show" replace />} />
        <Route path="/organizasyonlar/dogum-gunu" element={<Navigate to="/organizasyonlar/dogum-gunu-organizasyonu" replace />} />
        <Route path="/organizasyonlar/noel-baba-kiralama" element={<SantaClausRental />} />
        <Route path="/organizasyonlar/dj-kiralama" element={<MusicEvents />} />
        <Route path="/organizasyonlar/muzisyen-kiralama" element={<MusicEvents />} />
        <Route path="/organizasyonlar/profesyonel-yuz-boyama" element={<Navigate to="/organizasyonlar/yuz-boyama" replace />} />
        <Route path="/organizasyonlar/profesyonel-makyaj" element={<Navigate to="/organizasyonlar/yuz-boyama" replace />} />
        <Route path="/organizasyonlar/bubble-show-kiralama" element={<Navigate to="/organizasyonlar/bubble-show" replace />} />
        <Route path="/organizasyonlar/pamuk-seker-arabasi-kiralama" element={<Navigate to="/organizasyonlar/pamuk-seker" replace />} />
        <Route path="/organizasyonlar/dansci-kiralama" element={<Navigate to="/organizasyonlar/cocuk-etkinlikleri" replace />} />
        <Route path="/organizasyonlar/hostes-kiralama" element={<Navigate to="/organizasyonlar/cocuk-etkinlikleri" replace />} />
        <Route path="/organizasyonlar/profesyonel-yuz-boyama/:district" element={<LocalLandingAliasRedirect serviceSlug="yuz-boyama" />} />
        <Route path="/organizasyonlar/profesyonel-makyaj/:district" element={<LocalLandingAliasRedirect serviceSlug="yuz-boyama" />} />
        <Route path="/organizasyonlar/bubble-show-kiralama/:district" element={<LocalLandingAliasRedirect serviceSlug="bubble-show" />} />
        <Route path="/organizasyonlar/sihirbaz-kiralama/:district" element={<LocalLandingAliasRedirect serviceSlug="magic-show" />} />
        <Route path="/organizasyonlar/pamuk-seker-arabasi-kiralama/:district" element={<LocalLandingAliasRedirect serviceSlug="pamuk-seker" />} />
        
        {/* Kostümlü Karakter Detay Sayfaları - Dinamik Route */}
        <Route path="/karakter/:slug" element={<CharacterDetail />} />
        <Route path="/maskot/:slug" element={<MascotDetail />} />
        <Route path="/konsept/:slug" element={<ConceptDetail />} />
        <Route path="/hizmet-detay/:slug" element={<ServiceDetailPage />} />

        {/* Local Landing Pages - Semt Bazlı Hizmet Sayfaları (Programmatic SEO) */}
        <Route path="/organizasyonlar/:service/:district" element={<LocalLandingPage />} />

        {/* 404 - Sayfa Bulunamadı (en sonda olmalı) */}
        <Route path="/404" element={<NotFound />} />
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
