
import React from 'react';
import { Crown, Hotel, Car, Map, CheckCircle2 } from 'lucide-react';

const Services: React.FC = () => {
  const fullServices = [
    {
      icon: Crown,
      title: '프리미엄 카지노 호스팅',
      details: [
        '클락 주요 카지노(한카지노, 위더스, 로이스 등) 전구역 호스팅',
        'VIP 정켓 및 프라이빗 테이블 예약 서비스',
        '최대 우대 환전 및 롤링 서비스 지원',
        '현지 한국인 매니저 24시간 실시간 밀착 케어'
      ],
      img: 'https://picsum.photos/seed/casino-table/600/400'
    },
    {
      icon: Hotel,
      title: '럭셔리 숙박 및 레저',
      details: [
        '카지노 직영 5성급 호텔 스위트룸 우선 배정',
        '미모사, 썬밸리 등 명품 골프 코스 티타임 확보',
        '유명 스파 및 마사지 샵 예약 서비스',
        '현지 맛집 및 프라이빗 파티 플래닝'
      ],
      img: 'https://picsum.photos/seed/hotel-room/600/400'
    },
    {
      icon: Car,
      title: '의전 차량 및 이동 지원',
      details: [
        '클락/마닐라 공항 최신형 알파트(Alphard) 픽업/샌딩',
        '전 일정 전문 드라이버 배정으로 안전한 이동',
        '차량 내 와이파이, 다과, 음료 상시 비치',
        '긴급 상황 발생 시 현지 에이전트 즉각 대응'
      ],
      img: 'https://picsum.photos/seed/luxury-car/600/400'
    }
  ];

  return (
    <div className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-24">
          <h2 className="text-purple-500 font-bold mb-4 uppercase tracking-widest">Our Expertise</h2>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-8">차별화된 VIP 토탈 케어</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            FANTASTIC CLARK은 고객님이 오직 게임과 휴식에만 집중하실 수 있도록 생활의 모든 불편함을 제거해 드립니다.
          </p>
        </div>

        <div className="space-y-24">
          {fullServices.map((service, idx) => (
            <div key={idx} className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
              <div className="w-full md:w-1/2">
                <img src={service.img} alt={service.title} className="rounded-3xl shadow-2xl shadow-purple-900/10 w-full" />
              </div>
              <div className="w-full md:w-1/2 space-y-8">
                <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center text-white mb-6">
                  <service.icon size={32} />
                </div>
                <h3 className="text-3xl font-bold text-white">{service.title}</h3>
                <ul className="space-y-4">
                  {service.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start text-gray-300">
                      <CheckCircle2 size={20} className="text-purple-500 mr-3 mt-1 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
