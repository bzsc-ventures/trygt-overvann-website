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
                src="https://i.imgur.com/n03
