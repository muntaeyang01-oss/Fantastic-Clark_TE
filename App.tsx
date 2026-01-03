
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle, Send, Phone, Mail, MapPin, ChevronRight, User, LogOut, Settings } from 'lucide-react';
import { CONFIG } from './config';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import News from './pages/News';
import Contact from './pages/Contact';
import Admin from './pages/Admin';

// Component: Navbar
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: '홈', path: '/' },
    { name: '소개', path: '/about' },
    { name: '서비스', path: '/services' },
    { name: '프로모션/뉴스', path: '/news' },
    { name: '문의하기', path: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-purple-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-black tracking-tighter text-white">
              <span className="text-purple-600">FANTASTIC</span> CLARK
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    location.pathname === item.path ? 'text-purple-500' : 'text-gray-300 hover:text-purple-400'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/admin" className="p-2 text-gray-400 hover:text-white transition-colors">
                <Settings size={20} />
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-b border-purple-900/30">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-purple-900/20"
              >
                {item.name}
              </Link>
            ))}
            <Link
                to="/admin"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-purple-900/20"
              >
                관리자 모드
              </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

// Component: Footer
const Footer = () => {
  return (
    <footer className="bg-black border-t border-purple-900/30 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-black text-white mb-6">
              <span className="text-purple-600">FANTASTIC</span> CLARK
            </h2>
            <p className="text-gray-400 max-w-md leading-relaxed">
              필리핀 클락 프리포트 존에서 제공하는 프리미엄 카지노 에이전시 서비스. 
              최고의 환대와 품격 있는 경험을 약속드립니다.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-6">고객 지원</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-400">
                <Phone size={18} className="mr-3 text-purple-500" /> {CONFIG.phone}
              </li>
              <li className="flex items-center text-gray-400">
                <Mail size={18} className="mr-3 text-purple-500" /> {CONFIG.email}
              </li>
              <li className="flex items-start text-gray-400">
                <MapPin size={18} className="mr-3 mt-1 text-purple-500 shrink-0" /> {CONFIG.address}
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-6">소셜 미디어</h3>
            <div className="flex space-x-4">
              <a href={CONFIG.kakaoLink} target="_blank" rel="noopener noreferrer" className="p-3 bg-yellow-400 rounded-full text-black hover:scale-110 transition-transform">
                <MessageCircle size={24} />
              </a>
              <a href={CONFIG.telegramLink} target="_blank" rel="noopener noreferrer" className="p-3 bg-blue-500 rounded-full text-white hover:scale-110 transition-transform">
                <Send size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} {CONFIG.name}. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

// Component: Floating Action Buttons
const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-4 z-40">
      <a
        href={CONFIG.kakaoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
      >
        <MessageCircle size={28} color="black" />
      </a>
      <a
        href={CONFIG.telegramLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
      >
        <Send size={28} color="white" />
      </a>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col selection:bg-purple-500/30 selection:text-purple-200">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </Router>
  );
};

export default App;
