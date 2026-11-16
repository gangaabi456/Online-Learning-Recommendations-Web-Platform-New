import React, { useState } from 'react';
import { 
  BookOpen, 
  Home, 
  Layout, 
  Settings, 
  LogOut, 
  Bell, 
  Search, 
  PlayCircle, 
  CheckCircle, 
  Lock, 
  ChevronRight,
  Clock,
  Award,
  Star
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('path');
  const [selectedModule, setSelectedModule] = useState(2); // Default to the 'In Progress' module

  // User Profile Data - Updated Name to Student
  const user = {
    name: "Student",
    role: "Student",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Student" 
  };

  // Mock Data for the Learning Path
  const learningPath = [
    {
      id: 1,
      title: "Introduction to UI/UX Design",
      description: "Understanding the basics of user interface and user experience principles.",
      status: "completed",
      duration: "2h 15m",
      score: "98%",
      modules: 4
    },
    {
      id: 2,
      title: "Wireframing & Prototyping",
      description: "Learn how to create low-fidelity wireframes and interactive prototypes.",
      status: "in-progress",
      progress: 65,
      duration: "4h 30m",
      currentLesson: "Interactive Components in Figma",
      modules: 6
    },
    {
      id: 3,
      title: "Visual Design Fundamentals",
      description: "Mastering color theory, typography, and spacing systems.",
      status: "locked",
      duration: "3h 45m",
      modules: 5
    },
    {
      id: 4,
      title: "Design Systems & Scalability",
      description: "Building robust design systems for enterprise applications.",
      status: "locked",
      duration: "5h 00m",
      modules: 8
    }
  ];

  // Component for Sidebar Item
  const SidebarItem = ({ icon: Icon, label, id }) => (
    <button 
      onClick={() => setActiveTab(id)}
      className={`flex items-center w-full gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
        activeTab === id 
          ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' 
          : 'text-slate-400 hover:bg-slate-800 hover:text-white'
      }`}
    >
      <Icon size={20} />
      <span className="font-medium">{label}</span>
    </button>
  );

  return (
    <div className="flex h-screen bg-slate-900 text-slate-100 font-sans overflow-hidden">
      
      {/* Sidebar */}
      <aside className="w-64 bg-slate-950 border-r border-slate-800 flex-shrink-0 flex flex-col hidden md:flex">
        <div className="p-6 flex items-center gap-2 text-blue-500">
          <Layout size={28} className="fill-current" />
          <span className="text-xl font-bold text-white tracking-tight">LearnFlow</span>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4">
          <SidebarItem icon={Home} label="Dashboard" id="dashboard" />
          <SidebarItem icon={BookOpen} label="My Learning Path" id="path" />
          <SidebarItem icon={Award} label="Certificates" id="certificates" />
          <SidebarItem icon={Settings} label="Settings" id="settings" />
        </nav>

        <div className="p-4 border-t border-slate-800">
          <button className="flex items-center gap-3 px-4 py-3 w-full text-slate-400 hover:text-white transition-colors">
            <LogOut size={20} />
            <span>Log Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
        
        {/* Top Header */}
        <header className="h-20 border-b border-slate-800 bg-slate-900/50 backdrop-blur-md flex items-center justify-between px-8 z-10">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative w-full max-w-md hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search courses, skills, or mentors..." 
                className="w-full bg-slate-800 border-none rounded-full py-2.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-blue-500 text-slate-200 placeholder-slate-500"
              />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button className="relative p-2 text-slate-400 hover:text-white transition-colors">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-slate-900"></span>
            </button>
            
            <div className="flex items-center gap-3 pl-6 border-l border-slate-800">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold text-white">{user.name}</p>
                <p className="text-xs text-blue-400 font-medium">{user.role}</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 p-0.5">
                <img 
                  src={user.avatar} 
                  alt="Profile" 
                  className="w-full h-full rounded-full bg-slate-900"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-5xl mx-auto space-y-8">
            
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl">
              <div className="relative z-10">
                <h1 className="text-3xl font-bold mb-2">Welcome back, {user.name}! 👋</h1>
                <p className="text-blue-100 max-w-xl mb-6">You've completed 45% of your personalized learning goal. Keep up the momentum to reach your "Student" mastery level.</p>
                <button className="bg-white text-blue-600 px-6 py-2.5 rounded-full font-bold text-sm hover:bg-blue-50 transition-colors shadow-lg inline-flex items-center gap-2">
                  <PlayCircle size={18} />
                  Resume Learning
                </button>
              </div>
              
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-20 w-32 h-32 bg-purple-500 opacity-20 rounded-full blur-2xl"></div>
            </div>

            {/* 1. Your Personalized Learning Path Section */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <span className="bg-blue-500/10 text-blue-400 w-8 h-8 flex items-center justify-center rounded-lg text-sm font-bold border border-blue-500/20">1</span>
                  Your Personalized Learning Path
                </h2>
                <span className="text-sm text-slate-400">Total Progress: 35%</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Timeline Visualizer (Left Side) */}
                <div className="lg:col-span-2 space-y-4">
                  {learningPath.map((item, index) => {
                    const isActive = selectedModule === item.id;
                    const isCompleted = item.status === 'completed';
                    const isLocked = item.status === 'locked';

                    return (
                      <div 
                        key={item.id}
                        onClick={() => !isLocked && setSelectedModule(item.id)}
                        className={`group relative pl-8 py-4 transition-all duration-300 cursor-pointer ${
                          isActive ? 'scale-[1.02]' : ''
                        }`}
                      >
                        {/* Timeline Connector Line */}
                        {index !== learningPath.length - 1 && (
                          <div className={`absolute left-[19px] top-10 bottom-0 w-0.5 ${
                            isCompleted ? 'bg-green-500' : 'bg-slate-700'
                          } group-last:hidden`}></div>
                        )}

                        {/* Status Icon */}
                        <div className={`absolute left-0 top-6 w-10 h-10 rounded-full flex items-center justify-center border-4 z-10 transition-colors ${
                          isCompleted 
                            ? 'bg-slate-900 border-green-500 text-green-500' 
                            : isActive 
                              ? 'bg-blue-600 border-slate-900 text-white shadow-lg shadow-blue-500/50'
                              : 'bg-slate-800 border-slate-900 text-slate-500'
                        }`}>
                          {isCompleted ? <CheckCircle size={18} /> : isLocked ? <Lock size={16} /> : <span className="text-sm font-bold">{index + 1}</span>}
                        </div>

                        {/* Card Content */}
                        <div className={`p-5 rounded-2xl border transition-all ${
                          isActive 
                            ? 'bg-slate-800 border-blue-500/50 shadow-xl' 
                            : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                        }`}>
                          <div className="flex justify-between items-start mb-2">
                            <h3 className={`font-bold text-lg ${isLocked ? 'text-slate-500' : 'text-white'}`}>
                              {item.title}
                            </h3>
                            {isCompleted && <span className="bg-green-500/10 text-green-400 text-xs px-2 py-1 rounded font-medium">Done</span>}
                            {item.status === 'in-progress' && <span className="bg-blue-500/10 text-blue-400 text-xs px-2 py-1 rounded font-medium">Current</span>}
                          </div>
                          
                          <p className="text-slate-400 text-sm mb-4 line-clamp-2">{item.description}</p>
                          
                          <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
                            <span className="flex items-center gap-1"><BookOpen size={14} /> {item.modules} Modules</span>
                            <span className="flex items-center gap-1"><Clock size={14} /> {item.duration}</span>
                          </div>

                          {isActive && item.status === 'in-progress' && (
                            <div className="mt-4 pt-4 border-t border-slate-700">
                              <div className="flex justify-between text-xs mb-2">
                                <span className="text-slate-300">Current Progress</span>
                                <span className="text-blue-400">{item.progress}%</span>
                              </div>
                              <div className="h-2 w-full bg-slate-950 rounded-full overflow-hidden">
                                <div className="h-full bg-blue-500 rounded-full" style={{ width: `${item.progress}%` }}></div>
                              </div>
                              <button className="mt-4 w-full bg-blue-600 hover:bg-blue-500 text-white py-2 rounded-lg font-semibold text-sm transition-colors flex items-center justify-center gap-2">
                                Continue Lesson <ChevronRight size={16} />
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Right Side Info Panel (Sticky) */}
                <div className="hidden lg:block">
                  <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 sticky top-4">
                    <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                      <Star className="text-yellow-500 fill-current" size={18} />
                      Achievement Stats
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="bg-slate-900/50 p-4 rounded-xl flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                          <CheckCircle size={20} />
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-white">12</p>
                          <p className="text-xs text-slate-400">Modules Completed</p>
                        </div>
                      </div>

                      <div className="bg-slate-900/50 p-4 rounded-xl flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-purple-500/20 text-purple-500 flex items-center justify-center">
                          <Clock size={20} />
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-white">28h</p>
                          <p className="text-xs text-slate-400">Learning Hours</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-slate-700">
                      <h4 className="text-sm font-semibold text-slate-300 mb-3">Up Next in Path</h4>
                      <div className="flex items-start gap-3 opacity-60">
                         <div className="mt-1 min-w-[24px] h-6 rounded bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-400">3</div>
                         <div>
                           <p className="text-sm text-slate-300 font-medium">Visual Design Fundamentals</p>
                           <p className="text-xs text-slate-500">Locked • 3h 45m</p>
                         </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}