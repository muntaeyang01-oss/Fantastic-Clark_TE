
import React from 'react';
import { Target, Users, Landmark, HeartHandshake } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-purple-500 font-bold mb-4 uppercase tracking-widest">About Us</h2>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-8">FANTASTIC CLARK의 약속</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            우리는 단순한 에이전시를 넘어, 고객님의 클락 방문이 가장 편안하고 화려한 기억으로 남을 수 있도록 모든 과정을 관리하는 퍼스널 라이프스타일 매니저입니다.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <img src="https://picsum.photos/seed/clark-resort/800/600" alt="Clark Resort" className="rounded-3xl shadow-2xl shadow-purple-900/20" />
          </div>
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white">현지 전문가 그룹의 정밀한 서비스</h3>
            <p className="text-gray-400 leading-relaxed">
              FANTASTIC CLARK은 필리핀 클락 프리포트 존에 거점을 둔 카지노 호스팅 전문 그룹입니다. 다년간의 현지 운영 노하우와 주요 카지노 호텔(HANN, WIDUS, ROYCE 등)과의 강력한 파트너십을 통해 고객님께 남다른 혜택을 제공합니다.
            </p>
            <p className="text-gray-400 leading-relaxed">
              우리는 투명성, 신속성, 그리고 고객의 프라이버시를 최우선 가치로 생각합니다. 모든 환전 서비스와 VIP 룸 부킹 과정은 철저히 비밀이 보장되며, 실시간 피드백을 통해 고객의 니즈에 즉각 대응합니다.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { icon: Target, title: '정확함', desc: '고객님의 일정을 1분 1초도 낭비하지 않도록 정확하게 조율합니다.' },
            { icon: Users, title: '동반자', desc: '한 번의 인연을 소중히 여겨 평생의 클락 파트너가 되겠습니다.' },
            { icon: Landmark, title: '신뢰성', desc: '모든 거래와 서비스는 신뢰와 원칙을 바탕으로 진행됩니다.' },
            { icon: HeartHandshake, title: '환대', desc: 'VIP를 향한 진심 어린 환대를 최고의 서비스로 승화시킵니다.' },
          ].map((v, i) => (
            <div key={i} className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800">
              <v.icon className="text-purple-500 mb-6" size={40} />
              <h4 className="text-xl font-bold text-white mb-4">{v.title}</h4>
              <p className="text-gray-400 leading-relaxed text-sm">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
