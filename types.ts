
export interface Post {
  id: string;
  title: string;
  content: string;
  date: string;
  category: 'PROMOTION' | 'NEWS' | 'NOTICE';
  imageUrl?: string;
}

export interface SiteConfig {
  name: string;
  primaryColor: string;
  secondaryColor: string;
  telegramLink: string;
  kakaoLink: string;
  phone: string;
  email: string;
  address: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}
