
import React, { useState } from 'react';
import { Send, MessageCircle, Phone, Mail, MapPin } from 'lucide-react';
import { CONFIG } from '../config';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('문의가 전송되었습니다. 담당자가 신속히 연락드리겠습니다.');
    setFormState({ name: '', phone: '', message: '' });
  };

  return (
    <div className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-purple-500 font-bold mb-4 uppercase tracking-widest">Contact</h2>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-8">무엇을 도와드릴까요?</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            전문 에이전트가 24시간 실시간 상담을 지원합니다. <br />전화, 메신저 혹은 아래 폼을 통해 문의해 주세요.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800">
                <Phone className="text-purple-500 mb-4" size={32} />
                <h4 className="text-white font-bold mb-2">전화 상담</h4>
                <p className="text-gray-400 text-sm">{CONFIG.phone}</p>
              </div>
              <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800">
                <Mail className="text-purple-500 mb-4" size={32} />
                <h4 className="text-white font-bold mb-2">이메일 문의</h4>
                <p className="text-gray-400 text-sm">{CONFIG.email}</p>
              </div>
              <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 sm:col-span-2">
                <MapPin className="text-purple-500 mb-4" size={32} />
                <h4 className="text-white font-bold mb-2">오피스 위치</h4>
                <p className="text-gray-400 text-sm">{CONFIG.address}</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-white font-bold text-xl">실시간 메신저 상담</h4>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={CONFIG.kakaoLink} target="_blank" rel="noopener noreferrer" className="flex-1 px-8 py-5 bg-[#FEE500] text-black font-black rounded-2xl flex items-center justify-center hover:opacity-90 transition-opacity">
                  <MessageCircle size={24} className="mr-3" /> 카카오톡 상담
                </a>
                <a href={CONFIG.telegramLink} target="_blank" rel="noopener noreferrer" className="flex-1 px-8 py-5 bg-[#0088cc] text-white font-black rounded-2xl flex items-center justify-center hover:opacity-90 transition-opacity">
                  <Send size={24} className="mr-3" /> 텔레그램 상담
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-zinc-900 p-8 md:p-12 rounded-[40px] border border-zinc-800">
            <h3 className="text-2xl font-black text-white mb-8">문의 양식</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2">이름 / 닉네임</label>
                <input 
                  type="text" 
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className="w-full bg-black border border-zinc-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-purple-600 transition-colors"
                  placeholder="홍길동"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2">연락처 (전화번호 또는 메신저 ID)</label>
                <input 
                  type="text" 
                  value={formState.phone}
                  onChange={(e) => setFormState({...formState, phone: e.target.value})}
                  className="w-full bg-black border border-zinc-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-purple-600 transition-colors"
                  placeholder="010-0000-0000"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2">문의 내용</label>
                <textarea 
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full bg-black border border-zinc-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-purple-600 transition-colors"
                  placeholder="문의하실 내용을 입력해 주세요."
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full py-5 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-2xl transition-all duration-300 transform active:scale-95 shadow-xl shadow-purple-900/20"
              >
                상담 신청하기
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
