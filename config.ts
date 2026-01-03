
import { SiteConfig, ServiceItem } from './types';

export const CONFIG: SiteConfig = {
  name: "FANTASTIC CLARK",
  primaryColor: "#8A2BE2", // Vibrant Purple
  secondaryColor: "#000000",
  telegramLink: "https://t.me/fantasticclark",
  kakaoLink: "https://pf.kakao.com/_xxxx",
  phone: "+63-912-345-6789",
  email: "contact@fantasticclark.com",
  address: "Clark Freeport Zone, Pampanga, Philippines",
};

export const SERVICES: ServiceItem[] = [
  {
    id: '1',
    title: 'VIP 카지노 호스팅',
    description: '최고의 환대와 함께 클락 내 주요 카지노에서 전용 테이블 및 프라이빗 룸 서비스를 제공합니다.',
    icon: 'Crown'
  },
  {
    id: '2',
    title: '럭셔리 호텔 예약',
    description: '한카지노, 위더스 등 5성급 럭셔리 호텔의 최고급 스위트룸 예약을 보장합니다.',
    icon: 'Hotel'
  },
  {
    id: '3',
    title: '전용 차량 서비스',
    description: '공항 픽업부터 골프장, 쇼핑몰 이동까지 최고급 밴으로 안전하고 편안하게 모십니다.',
    icon: 'Car'
  },
  {
    id: '4',
    title: '프라이빗 투어 & 골프',
    description: '클락 인근 최상급 골프 코스 부킹 및 맞춤형 관광 일정을 관리해 드립니다.',
    icon: 'Map'
  }
];

export const INITIAL_POSTS = [
  {
    id: '1',
    title: '2024년 상반기 VIP 멤버십 혜택 안내',
    content: 'FANTASTIC CLARK를 이용해주시는 VIP 고객님들을 위한 특별 적립 프로그램과 한정판 굿즈 증정 이벤트가 시작되었습니다.',
    date: '2024-03-20',
    category: 'PROMOTION',
    imageUrl: 'https://picsum.photos/seed/casino1/800/400'
  },
  {
    id: '2',
    title: '클락 직항 노선 증편 뉴스',
    content: '인천-클락 노선이 일일 5회로 증편되어 더욱 편리한 방문이 가능해졌습니다. 예약 시 참고 부탁드립니다.',
    date: '2024-03-15',
    category: 'NEWS',
    imageUrl: 'https://picsum.photos/seed/flight1/800/400'
  }
];
