import { Routes, Route, useLocation } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import ScrollToTop from './components/ScrollToTop'
import Breadcrumb from './components/Breadcrumb'
import ThemeProvider from './components/ThemeProvider'
import Loading from './components/Loading'
import useWebVitals, { logWebVitals } from './hooks/useWebVitals'

// Lazy-loaded pages (code splitting)
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const Gallery = lazy(() => import('./pages/Gallery'))
const Contact = lazy(() => import('./pages/Contact'))
const Team = lazy(() => import('./pages/Team'))
const Clients = lazy(() => import('./pages/Clients'))
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

// Blog (lazy)
const Blog = lazy(() => import('./pages/Blog'))

// Blog Details (lazy)
const AcilisOrganizasyonu = lazy(() => import('./pages/blog/AcilisOrganizasyonu'))
const PalyacoKiralama = lazy(() => import('./pages/blog/PalyacoKiralama'))
const SihirbazGosterisi = lazy(() => import('./pages/blog/SihirbazGosterisi'))
const BubbleShowGosterisi = lazy(() => import('./pages/blog/BubbleShowGosterisi'))

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

  // WhatsApp butonunu gösterme/gizleme kontrolü
  const hideWhatsAppButton = location.pathname === '/organizasyonlar/cocuk-etkinlikleri'

  return (
    <div className="App">
      <Navbar />
      <ScrollToTop />
      <Breadcrumb />
      <main>
        <Suspense fallback={<Loading />}>
          <ThemeProvider>
            <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hakkimizda" element={<About />} />
        <Route path="/organizasyonlar" element={<Services />} />
        <Route path="/galeri" element={<Gallery />} />
        <Route path="/iletisim" element={<Contact />} />
        <Route path="/ekibimiz" element={<Team />} />
        <Route path="/referanslar" element={<Clients />} />
        <Route path="/hizmet-bolgeleri" element={<ServiceAreas />} />
        <Route path="/organik-pastalar" element={<OrganicCakes />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/acilis-organizasyonu-istanbul" element={<AcilisOrganizasyonu />} />
        <Route path="/blog/palyaco-kiralama-istanbul" element={<PalyacoKiralama />} />
        <Route path="/blog/sihirbaz-gosterisi-istanbul" element={<SihirbazGosterisi />} />
        <Route path="/blog/bubble-show-istanbul" element={<BubbleShowGosterisi />} />
        
        {/* Service Routes */}
        <Route path="/organizasyonlar/cocuk-etkinlikleri" element={<ChildEvents />} />
        
        {/* Child Event Category Routes */}
        <Route path="/organizasyonlar/yuz-boyama" element={<FacePainting />} />
        <Route path="/organizasyonlar/profesyonel-makyaj" element={<ProfessionalMakeup />} />
        <Route path="/organizasyonlar/magic-show" element={<MagicShow />} />
        <Route path="/organizasyonlar/bubble-show" element={<BubbleShow />} />
        <Route path="/organizasyonlar/kostumlu-karakterler" element={<CostumedCharacters />} />
        
        <Route path="/organizasyonlar/dogum-gunu-organizasyonu" element={<FullPackageOrganization />} />
        <Route path="/organizasyonlar/konsept-dogum-gunu" element={<ConceptBirthday />} />
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
        
        {/* Kostümlü Karakter Detay Sayfaları - Dinamik Route (en sonda) */}
        <Route path="/:slug" element={<CharacterDetail />} />
            </Routes>
          </ThemeProvider>
        </Suspense>
      </main>
      <Footer />
      {!hideWhatsAppButton && <WhatsAppButton />}
    </div>
  )
}

export default App
