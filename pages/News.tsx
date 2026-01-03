
import React, { useState, useEffect } from 'react';
import { Calendar, Tag, ChevronRight } from 'lucide-react';
import { INITIAL_POSTS } from '../config';
import { Post } from '../types';

const News: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const savedPosts = localStorage.getItem('fc_posts');
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    } else {
      setPosts(INITIAL_POSTS as Post[]);
    }
  }, []);

  return (
    <div className="bg-black py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-purple-500 font-bold mb-4 uppercase tracking-widest">Promotion & News</h2>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-8">새로운 소식과 혜택</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-purple-600/50 transition-all group">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={post.imageUrl || 'https://picsum.photos/seed/post/400/300'} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-purple-600 text-white text-xs font-bold rounded-full uppercase">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-8 space-y-4">
                <div className="flex items-center text-gray-500 text-xs">
                  <Calendar size={14} className="mr-2" /> {post.date}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors line-clamp-1">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                  {post.content}
                </p>
                <div className="pt-4">
                   <button className="text-purple-500 font-bold text-sm flex items-center hover:translate-x-1 transition-transform">
                     자세히 보기 <ChevronRight size={16} className="ml-1" />
                   </button>
                </div>
              </div>
            </div>
          ))}
          
          {posts.length === 0 && (
            <div className="col-span-full py-20 text-center text-gray-500">
              현재 등록된 게시글이 없습니다.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default News;
