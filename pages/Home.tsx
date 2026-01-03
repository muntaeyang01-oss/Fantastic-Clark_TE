
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Shield, Award, Sparkles, TrendingUp } from 'lucide-react';
import { SERVICES, CONFIG } from '../config';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-black">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/casino-hero/1920/1080?grayscale" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-purple-500 font-bold tracking-[0.3em] uppercase mb-4 animate-fade-in">Experience Luxury</h2>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-tight">
            FANTASTIC <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-800">CLARK</span> VIP
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            클락에서의 가장 품격 있고 특별한 카지노 여행, <br className="hidden md:block" />
            판타스틱 클락이 처음부터 끝까지 정성을 다해 모십니다.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 flex items-center group w-full sm:w-auto justify-center"
            >
              지금 상담하기 <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/services" 
              className="px-8 py-4 bg-transparent border-2 border-purple-600/50 hover:border-purple-600 text-white font-bold rounded-full transition-all duration-300 w-full sm:w-auto"
            >
              서비스 둘러보기
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Shield, label: '100% 신뢰성 보장' },
            { icon: Award, label: '최고급 호스팅 경력' },
            { icon: Sparkles, label: '맞춤형 프라이빗 서비스' },
            { icon: TrendingUp, label: '최고의 환전 우대' },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-purple-900/20 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-purple-600 transition-colors duration-500">
                <item.icon size={32} className="text-purple-500 group-hover:text-white transition-colors duration-500" />
              </div>
              <span className="text-gray-400 font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-32 bg-black relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-900/10 blur-[120px] rounded-full -mr-48 -mt-24"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="mb-20">
            <h2 className="text-purple-500 font-bold mb-4 uppercase tracking-widest">Our Services</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white">우리가 제공하는 품격</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-3xl hover:border-purple-600/50 transition-all duration-300 group">
                <div className="text-purple-500 mb-6 group-hover:scale-110 transition-transform">
                  {/* Mapping simple strings to components in a real app or using dynamic icons */}
                  <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center">
                    <Sparkles size={28} />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{service.title}</h4>
                <p className="text-gray-400 leading-relaxed mb-6">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link to="/services" className="text-purple-500 hover:text-purple-400 font-bold inline-flex items-center">
              전체 서비스 상세 보기 <ChevronRight className="ml-1" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-b from-black to-purple-950/20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8">당신의 클락 여정, <br />최고의 파트너와 함께하십시오.</h2>
          <p className="text-xl text-gray-400 mb-12">24시간 상담 대기 중입니다. 지금 바로 메신저를 통해 문의하세요.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href={CONFIG.kakaoLink} target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-[#FEE500] text-black font-bold rounded-full hover:scale-105 transition-transform flex items-center">
              카카오톡 문의하기
            </a>
            <a href={CONFIG.telegramLink} target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-[#0088cc] text-white font-bold rounded-full hover:scale-105 transition-transform flex items-center">
              텔레그램 문의하기
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
