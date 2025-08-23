import React, { useState } from 'react';
import { ChevronDown, Phone, Mail, MapPin, Menu, X } from 'lucide-react';

const TrygtOvervannWebsite = () => {
  const [currentPage, setCurrentPage] = useState('hjem');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { id: 'hjem', label: 'Hjem' },
    { id: 'privat', label: 'Privat' },
    { id: 'utbygger', label: 'Utbygger' },
    { id: 'hav-bolger', label: 'Hav & Bølger' },
    { id: 'kontakt', label: 'Kontakt' }
  ];

  const Header = () => (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img 
              src="https://i.imgur.com/5oexNcM.png" 
              alt="Trygt Overvann AS" 
              className="h-12 w-auto"
            />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                } pb-1`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`text-left px-3 py-2 text-sm font-medium transition-colors ${
                    currentPage === item.id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  } rounded-md`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );

  const Footer = () => (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img 
              src="https://i.imgur.com/5oexNcM.png" 
              alt="Trygt Overvann AS" 
              className="h-12 w-auto mb-4 filter invert"
            />
            <p className="text-gray-300 text-sm">
              Din pålitelige partner for sikker og bærekraftig overvanns- og flområdgivning.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontaktinformasjon</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center">
                <Mail size={16} className="mr-2" />
                trygt.overvann@gmail.com
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-2" />
                900 10 671
              </div>
              <div>
                Org. nr: 932 480 956
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Tjenester</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Overvannshåndtering</li>
              <li>Flomrisikoanalyser</li>
              <li>Havnivåstigning</li>
              <li>Bølgepåvirkning</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Trygt Overvann AS. Alle rettigheter reservert.</p>
        </div>
      </div>
    </footer>
  );

  const HomePage = () => (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <img 
              src="https://i.imgur.com/5oexNcM.png" 
              alt="Trygt Overvann AS" 
              className="h-20 w-auto mx-auto mb-8 filter invert"
            />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Velkommen til Trygt Overvann
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Din pålitelige partner for sikker og bærekraftig overvanns- og flområdgivning
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Vi tilbyr rådgivning innenfor disse områdene
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div 
              onClick={() => setCurrentPage('privat')}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow cursor-pointer group"
            >
              <img 
                src="https://i.imgur.com/n03FQKw.png" 
                alt="Overvann for Private" 
                className="w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-transform"
              />
              <h3 className="text-2xl font-semibold text-center mb-4 group-hover:text-blue-600 transition-colors">
                Overvann for Private
              </h3>
              <p className="text-gray-600 text-center">
                Effektive løsninger for håndtering, beregning og modellering av overvann for private eiendommer.
              </p>
            </div>

            <div 
              onClick={() => setCurrentPage('utbygger')}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow cursor-pointer group"
            >
              <img 
                src="https://i.imgur.com/tOIxjTA.png" 
                alt="Overvann for Utbyggere" 
                className="w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-transform"
              />
              <h3 className="text-2xl font-semibold text-center mb-4 group-hover:text-blue-600 transition-colors">
                Overvann for Utbyggere
              </h3>
              <p className="text-gray-600 text-center">
                Profesjonell rådgivning for utbyggingsprosjekter med fokus på bærekraftige overvannssløsninger.
              </p>
            </div>
          </div>

          {/* Main Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Overvannshåndtering</h3>
              <p className="text-gray-600 mb-6">
                Effektive løsninger for håndtering, beregning og modellering av overvann, slik at du får kontroll på flomrisiko og optimal utnyttelse av arealer.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Havnivåstigning, høyvann og bølgepåvirkning</h3>
              <p className="text-gray-600 mb-6">
                Presise analyser og rådgivning basert på de nyeste metodene, slik at du kan tilpasse prosjekter og infrastruktur til framtidens klimautfordringer.
              </p>
              
              <p className="text-gray-600">
                Med solid ekspertise og lang erfaring bistår vi både private aktører og offentlige instanser i å utvikle trygge, robuste og klimarettede løsninger. La oss hjelpe deg med å bygge for en trygg fremtid.
              </p>
            </div>
            
            <div className="space-y-4">
              <img 
                src="https://convertri.imgix.net/dd6d60e5-e490-11ef-a07e-06d664cfaed9%2F759ba4dd8014df4d63c468bc6e8b5acdf66974ea%2FA1_Vann%20i%20trapp.jpg?auto=compress,format&fit=scale&w=474&h=349"
                alt="Vann i trapp" 
                className="w-full rounded-lg shadow-lg"
              />
              <img 
                src="https://convertri.imgix.net/dd6d60e5-e490-11ef-a07e-06d664cfaed9%2F6b0a89bcb407d425b1ca41a4d3ff9ac28f75c014%2FBontelabo%20F2-200-2100.jpg?auto=compress,format&fit=scale&w=492&h=349"
                alt="Bontelabo" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const PrivatePage = () => (
    <div>
      {/* Hero Section with Background Image */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat text-white py-24"
        style={{ backgroundImage: `url(https://i.imgur.com/Df5h4hS.png)` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Overvann for Private
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Profesjonelle løsninger for private eiendommer og boligprosjekter
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Sikre overvannshåndtering for din eiendom
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Som privateier står du overfor utfordringer knyttet til overvannshåndtering på din eiendom. Vi hjelper deg med å finne effektive og kostnadseffektive løsninger som beskytter din investering.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Våre tjenester for private:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Risikovurdering av eksisterende eiendommer
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Overvannsløsninger for nybygg og tilbygg
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Dimensjonering av drenssystemer
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Rådgivning om LOD-tiltak (Lokal overvannsdisponering)
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Vannrett rådgivning og ekspertuttalelser
                  </li>
                </ul>

                <p className="mt-6">
                  Vi gir deg trygghet gjennom faglig solide løsninger tilpasset ditt budsjett og dine behov. Kontakt oss for en uforpliktende samtale om hvordan vi kan hjelpe deg.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Hvorfor velge oss?</h3>
                <ul className="space-y-2 text-blue-800">
                  <li>✓ Lokal kunnskap og erfaring</li>
                  <li>✓ Kostnadseffektive løsninger</li>
                  <li>✓ Rask og personlig service</li>
                  <li>✓ Compliance med gjeldende regelverk</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Kontakt oss i dag</h3>
                <div className="space-y-2 text-gray-600">
                  <p className="flex items-center">
                    <Phone size={16} className="mr-2" />
                    900 10 671
                  </p>
                  <p className="flex items-center">
                    <Mail size={16} className="mr-2" />
                    trygt.overvann@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const UtbyggerPage = () => (
    <div>
      {/* Hero Section with Background Image */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat text-white py-24"
        style={{ backgroundImage: `url(https://i.imgur.com/hdUvZCO.png)` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Overvann for Utbyggere
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Profesjonell rådgivning for utbyggingsprosjekter og infrastruktur
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Bærekraftige overvannssløsninger for utbyggere
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Som utbygger må du forholde deg til stadig skjerpede krav til overvannshåndtering. Vi hjelper deg med å navigere regelverket og finne optimale løsninger som oppfyller alle krav.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Våre tjenester for utbyggere:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Overvannsutredninger og ROS-analyser
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Modellering og beregning av overvannssystemer
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Dimensjonering av kulverter og stikkrenner
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    LOD-planer og blågrønne løsninger
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Flom- og skredfarevurderinger
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Myndighetsoppfølging og søknadsprosesser
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <div className="bg-blue-50 p-8 rounded-lg mb-8">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Regelverkskompetanse</h3>
                <p className="text-blue-800 mb-4">
                  Vi holder oss oppdatert på gjeldende regelverk og standarder:
                </p>
                <ul className="space-y-1 text-blue-800">
                  <li>• TEK17 og veiledere</li>
                  <li>• Kommunale VA-normer</li>
                  <li>• NVE-retningslinjer</li>
                  <li>• Vannforskriften</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Vårt fagområde</h3>
                <p className="text-gray-600 mb-4">
                  Vi har bred erfaring fra prosjekter av alle størrelser:
                </p>
                <ul className="space-y-1 text-gray-600">
                  <li>• Boligutbygginger</li>
                  <li>• Næringsbygg og industri</li>
                  <li>• Infrastrukturprosjekter</li>
                  <li>• Kommunal planlegging</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const HavBolgerPage = () => (
    <div>
      {/* Hero Section with Background Image */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat text-white py-24"
        style={{ backgroundImage: `url(https://i.imgur.com/fIJxTMo.png)` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Hav & Bølger
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Din partner for trygg kystplanlegging og samfunnssikkerhet
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <img 
                src="https://i.imgur.com/5oexNcM.png" 
                alt="Trygt Overvann AS" 
                className="h-16 w-auto mx-auto mb-6"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8 text-center">
                I en tid med økende klimaendringer og stigende havnivå er det avgjørende å ha presise og framtidsrettede vurderinger. Hos Trygt Overvann AS utarbeider vi skreddersydde rapporter som gir et helhetlig bilde av risiko knyttet til havnivåstigning, høyvann og bølgepåvirkning.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Våre tjenester</h2>
                  <p className="text-gray-600 mb-6">
                    Vi beregner nøyaktig fremtidige havnivåendringer og høyvann for ditt område basert på korrekt sikkerhetsklasse, og vi beregner bølgepåvirkningen. Merk at vi ikke tilbyr full modellering av havdønninger, men vår tilnærming fokuserer på å inkludere bølgepåvirkningen som et vesentlig tillegg til de tradisjonelle beregningene.
                  </p>
                  <p className="text-gray-600">
                    Dette sikrer at våre rapporter gir en realistisk risikovurdering for både ny og eksisterende infrastruktur i kystnære områder.
                  </p>
                </div>
                
                <div>
                  <img 
                    src="https://i.imgur.com/DfjB6GM.png" 
                    alt="Samfunnssikkerhet og beredskap" 
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              </div>

              <div className="bg-blue-50 p-8 rounded-lg mb-12">
                <h2 className="text-2xl font-bold text-blue-900 mb-6">
                  Samfunnssikkerhet og beredskap
                </h2>
                <p className="text-blue-800 mb-4">
                  Vår ekspertise hjelper kommuner, planleggere og private aktører med å:
                </p>
                <ul className="space-y-3 text-blue-800">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    Forutse og tilpasse seg framtidige klimautfordringer.
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    Kartlegge risikoområder og definere hensynssoner i henhold til gjeldende sikkerhetskrav (TEK17).
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    Ta informerte beslutninger for bærekraftig utbygging og samfunnssikkerhet.
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <p className="text-lg text-gray-600 mb-8">
                  Med et sterkt fokus på samfunnssikkerhet og praktisk anvendbarhet, leverer vi detaljerte rapporter som fungerer som et pålitelig verktøy for arealplanlegging og beredskapsarbeid.
                </p>
                
                <p className="text-xl font-semibold text-gray-900">
                  Velg Trygt Overvann AS for å gjøre din planlegging tryggere, smartere og mer robust mot framtidige havnivåutfordringer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const KontaktPage = () => (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Kontakt oss
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Ta kontakt for en uforpliktende samtale om ditt prosjekt
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Trygt Overvann AS
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="text-blue-600 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900">E-post</h3>
                    <a href="mailto:trygt.overvann@gmail.com" className="text-blue-600 hover:text-blue-800">
                      trygt.overvann@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="text-blue-600 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Telefon</h3>
                    <a href="tel:90010671" className="text-blue-600 hover:text-blue-800">
                      900 10 671
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="text-blue-600 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Organisasjonsnummer</h3>
                    <p className="text-gray-600">932 480 956</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-blue-50 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">
                  Våre tjenester
                </h3>
                <ul className="space-y-2 text-blue-800">
                  <li>• Overvannshåndtering og flomrisikoanalyser</li>
                  <li>• Havnivåstigning og bølgepåvirkning</li>
                  <li>• Rådgivning for private og utbyggere</li>
                  <li>• Samfunnssikkerhet og beredskap</li>
                </ul>
              </div>
            </div>

            <div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Ønsker du et tilbud?
                </h3>
                <p className="text-gray-600 mb-6">
                  Vi tilbyr alltid en uforpliktende samtale for å diskutere ditt prosjekt og hvordan vi kan hjelpe deg. Ta kontakt via telefon eller e-post, så kommer vi raskt tilbake til deg.
                </p>

                <div className="space-y-4">
                  <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                    <h4 className="font-semibold text-gray-900">Rask respons</h4>
                    <p className="text-sm text-gray-600">Vi svarer vanligvis innen 24 timer</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded border-l-4 border-green-500">
                    <h4 className="font-semibold text-gray-900">Konkurransedyktige priser</h4>
                    <p className="text-sm text-gray-600">Få et skreddersydd tilbud for ditt prosjekt</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded border-l-4 border-purple-500">
                    <h4 className="font-semibold text-gray-900">Lokal ekspertise</h4>
                    <p className="text-sm text-gray-600">Vi kjenner lokale forhold og regelverk</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderPage = () => {
    switch (currentPage) {
      case 'privat':
        return <PrivatePage />;
      case 'utbygger':
        return <UtbyggerPage />;
      case 'hav-bolger':
        return <HavBolgerPage />;
      case 'kontakt':
        return <KontaktPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default TrygtOvervannWebsite;
