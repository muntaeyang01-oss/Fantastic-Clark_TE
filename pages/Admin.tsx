
import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Edit, Save, LogIn, LayoutDashboard, FileText, Settings, X } from 'lucide-react';
import { Post } from '../types';
import { INITIAL_POSTS } from '../config';

const Admin: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [posts, setPosts] = useState<Post[]>([]);
  const [activeTab, setActiveTab] = useState<'posts' | 'settings'>('posts');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<Partial<Post> | null>(null);

  useEffect(() => {
    const savedPosts = localStorage.getItem('fc_posts');
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    } else {
      setPosts(INITIAL_POSTS as Post[]);
    }
  }, []);

  const savePosts = (newPosts: Post[]) => {
    setPosts(newPosts);
    localStorage.setItem('fc_posts', JSON.stringify(newPosts));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin1234') {
      setIsAuthenticated(true);
    } else {
      alert('비밀번호가 틀렸습니다.');
    }
  };

  const handleDelete = (id: string) => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      const filtered = posts.filter(p => p.id !== id);
      savePosts(filtered);
    }
  };

  const handleEdit = (post: Post) => {
    setEditingPost(post);
    setIsModalOpen(true);
  };

  const handleCreate = () => {
    setEditingPost({
      id: Date.now().toString(),
      title: '',
      content: '',
      category: 'NEWS',
      date: new Date().toISOString().split('T')[0],
      imageUrl: ''
    });
    setIsModalOpen(true);
  };

  const handleSavePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingPost) return;

    const exists = posts.find(p => p.id === editingPost.id);
    let newPosts: Post[];
    if (exists) {
      newPosts = posts.map(p => p.id === editingPost.id ? (editingPost as Post) : p);
    } else {
      newPosts = [editingPost as Post, ...posts];
    }
    
    savePosts(newPosts);
    setIsModalOpen(false);
    setEditingPost(null);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-black px-4">
        <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 w-full max-w-md text-center">
          <div className="w-16 h-16 bg-purple-900/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-purple-500">
            <LogIn size={32} />
          </div>
          <h2 className="text-2xl font-black text-white mb-6">관리자 로그인</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <input 
              type="password" 
              placeholder="관리자 비밀번호 (기본: admin1234)" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-black border border-zinc-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-purple-600"
            />
            <button className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl transition-all">
              접속하기
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full md:w-64 space-y-2">
            <button 
              onClick={() => setActiveTab('posts')}
              className={`w-full flex items-center space-x-3 px-6 py-4 rounded-2xl font-bold transition-all ${activeTab === 'posts' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:bg-zinc-900'}`}
            >
              <FileText size={20} /> <span>게시글 관리</span>
            </button>
            <button 
              onClick={() => setActiveTab('settings')}
              className={`w-full flex items-center space-x-3 px-6 py-4 rounded-2xl font-bold transition-all ${activeTab === 'settings' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:bg-zinc-900'}`}
            >
              <Settings size={20} /> <span>사이트 설정</span>
            </button>
            <button 
              onClick={() => setIsAuthenticated(false)}
              className="w-full flex items-center space-x-3 px-6 py-4 rounded-2xl font-bold text-red-500 hover:bg-zinc-900 transition-all mt-8"
            >
              <Trash2 size={20} /> <span>로그아웃</span>
            </button>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {activeTab === 'posts' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-3xl font-black text-white">게시글 관리</h2>
                  <button 
                    onClick={handleCreate}
                    className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-bold transition-all"
                  >
                    <Plus size={20} /> <span>게시글 추가</span>
                  </button>
                </div>

                <div className="bg-zinc-900 rounded-3xl border border-zinc-800 overflow-hidden">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-black/50 text-gray-400 font-bold uppercase text-xs tracking-wider border-b border-zinc-800">
                      <tr>
                        <th className="px-6 py-4">카테고리</th>
                        <th className="px-6 py-4">제목</th>
                        <th className="px-6 py-4">날짜</th>
                        <th className="px-6 py-4 text-right">관리</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800">
                      {posts.map((post) => (
                        <tr key={post.id} className="hover:bg-zinc-800/50 transition-colors">
                          <td className="px-6 py-4">
                            <span className="px-2 py-1 bg-purple-900/30 text-purple-400 rounded text-[10px] font-bold">
                              {post.category}
                            </span>
                          </td>
                          <td className="px-6 py-4 font-medium text-white line-clamp-1">{post.title}</td>
                          <td className="px-6 py-4 text-gray-500">{post.date}</td>
                          <td className="px-6 py-4 text-right space-x-3">
                            <button onClick={() => handleEdit(post)} className="text-blue-400 hover:text-blue-300">
                              <Edit size={18} />
                            </button>
                            <button onClick={() => handleDelete(post.id)} className="text-red-400 hover:text-red-300">
                              <Trash2 size={18} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {posts.length === 0 && (
                    <div className="p-12 text-center text-gray-500">데이터가 없습니다.</div>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 space-y-6">
                <h2 className="text-2xl font-black text-white">사이트 기본 설정</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label className="text-gray-400 text-xs font-bold uppercase">사이트 명칭</label>
                     <input className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white" defaultValue="FANTASTIC CLARK" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-gray-400 text-xs font-bold uppercase">포인트 컬러</label>
                     <input className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white" defaultValue="#8A2BE2" />
                   </div>
                </div>
                <div className="pt-6">
                  <button className="flex items-center space-x-2 bg-purple-600 px-8 py-4 rounded-xl font-bold">
                    <Save size={20} /> <span>설정 저장하기</span>
                  </button>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Modal for Creating/Editing Post */}
      {isModalOpen && editingPost && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4">
          <div className="bg-zinc-900 w-full max-w-2xl rounded-3xl border border-zinc-800 overflow-hidden">
            <div className="flex justify-between items-center p-6 border-b border-zinc-800">
              <h3 className="text-xl font-bold text-white">게시글 {editingPost.id ? '수정' : '추가'}</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-white">
                <X size={24} />
              </button>
            </div>
            <form onSubmit={handleSavePost} className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-400">카테고리</label>
                  <select 
                    value={editingPost.category}
                    onChange={(e) => setEditingPost({...editingPost, category: e.target.value as any})}
                    className="w-full bg-black border border-zinc-800 rounded-lg p-3 text-white"
                  >
                    <option value="NEWS">NEWS</option>
                    <option value="PROMOTION">PROMOTION</option>
                    <option value="NOTICE">NOTICE</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-400">날짜</label>
                  <input 
                    type="date" 
                    value={editingPost.date}
                    onChange={(e) => setEditingPost({...editingPost, date: e.target.value})}
                    className="w-full bg-black border border-zinc-800 rounded-lg p-3 text-white" 
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-400">제목</label>
                <input 
                  type="text" 
                  value={editingPost.title}
                  onChange={(e) => setEditingPost({...editingPost, title: e.target.value})}
                  className="w-full bg-black border border-zinc-800 rounded-lg p-3 text-white" 
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-400">이미지 URL</label>
                <input 
                  type="text" 
                  placeholder="https://..."
                  value={editingPost.imageUrl}
                  onChange={(e) => setEditingPost({...editingPost, imageUrl: e.target.value})}
                  className="w-full bg-black border border-zinc-800 rounded-lg p-3 text-white" 
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-400">본문 내용</label>
                <textarea 
                  rows={6}
                  value={editingPost.content}
                  onChange={(e) => setEditingPost({...editingPost, content: e.target.value})}
                  className="w-full bg-black border border-zinc-800 rounded-lg p-3 text-white"
                ></textarea>
              </div>
              <div className="pt-4">
                <button type="submit" className="w-full bg-purple-600 py-4 rounded-xl font-bold text-white hover:bg-purple-700 transition-all">
                  저장하기
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
