import React, { useState } from 'react';

// --- Data Definition ---
const REGRET_DATA = [
  {
    id: 'anxiety',
    label: '我有 AI 焦虑',
    level: 1,
    children: [
      {
        id: 'anxiety_replace',
        label: '担心被替代',
        level: 2,
        children: [
          { id: 'anxiety_code', label: '代码写不过 AI', level: 3 },
          { id: 'anxiety_create', label: '创意不如 AI', level: 3 },
        ]
      },
      {
        id: 'anxiety_learn',
        label: '学不过来',
        level: 2,
        children: [
          { id: 'anxiety_update', label: '工具更新太快', level: 3 },
          { id: 'anxiety_tutorial', label: '教程太多看不完', level: 3 },
        ]
      }
    ]
  },
  {
    id: 'idea',
    label: '我有 AI Idea',
    level: 1,
    children: [
      {
        id: 'idea_time',
        label: '没时间落地',
        level: 2,
        children: [
          { id: 'idea_busy', label: '业务需求太忙', level: 3 },
          { id: 'idea_resources', label: '缺乏研发资源', level: 3 },
        ]
      },
      {
        id: 'idea_tech',
        label: '技术卡点',
        level: 2,
        children: [
          { id: 'idea_model', label: '不懂模型微调', level: 3 },
          { id: 'idea_compute', label: '算力/Token昂贵', level: 3 },
        ]
      }
    ]
  },
  {
    id: 'regret',
    label: '遗憾与卡点',
    level: 1,
    children: [
      {
        id: 'regret_company',
        label: '公司限制',
        level: 2,
        children: [
          { id: 'regret_net', label: '外网访问受限', level: 3 },
          { id: 'regret_security', label: '数据安全红线', level: 3 },
        ]
      },
      {
        id: 'regret_tool',
        label: '工具不好用',
        level: 2,
        children: [
          { id: 'regret_accurate', label: '回答不够准确', level: 3 },
          { id: 'regret_context', label: '上下文丢失', level: 3 },
        ]
      }
    ]
  }
];

// --- Mock Analytics Service ---
const logRegretClick = (data) => {
  console.log('[Analytics] Bubble Clicked:', data);
  // TODO: Implement actual backend call here
  // fetch('/api/v1/stats/regret-click', { method: 'POST', ... })
};

const RegretBubbles = ({ onNext }) => {
  // Store the list of currently visible bubbles.
  // Initially, show all Level 1 bubbles.
  const [activeBubbles, setActiveBubbles] = useState(REGRET_DATA);
  const [history, setHistory] = useState([]); // To track user path if needed, or just visual logs

  const handleBubbleClick = (bubble, e) => {
    // Prevent default to avoid double firing if touch/click mix
    e.stopPropagation();

    // Log analytics
    logRegretClick({
      bubbleId: bubble.id,
      label: bubble.label,
      level: bubble.level,
      timestamp: Date.now()
    });

    // Interaction Logic:
    // If it has children, add children to the list (keep self).
    // Prevent duplicate expansion.
    
    if (bubble.children && bubble.children.length > 0) {
      // Check if any child is already in the active list
      const childIds = new Set(bubble.children.map(c => c.id));
      const isAlreadyExpanded = activeBubbles.some(b => childIds.has(b.id));

      if (!isAlreadyExpanded) {
        // Find current bubble index to insert children after it
        const currentIndex = activeBubbles.findIndex(b => b.id === bubble.id);
        if (currentIndex !== -1) {
          const newBubbles = [...activeBubbles];
          // Insert children after the clicked bubble
          newBubbles.splice(currentIndex + 1, 0, ...bubble.children);
          setActiveBubbles(newBubbles);
        }
      }
    } else {
      // Leaf node clicked
      // Visual feedback handled by CSS active state
    }
  };

  // Helper to generate random visual properties
  const getRandomStyle = () => {
    const randomDuration = 4 + Math.random() * 4; // 4-8s
    const randomDelay = Math.random() * -5; // negative delay to start at different points
    const randomTranslateX = (Math.random() - 0.5) * 30; // -15px to 15px
    const randomTranslateY = (Math.random() - 0.5) * 30; // -15px to 15px
    
    return {
      animationDuration: `${randomDuration}s`,
      animationDelay: `${randomDelay}s`,
      transform: `translate(${randomTranslateX}px, ${randomTranslateY}px)`,
      margin: `${Math.random() * 20}px` // Add some spacing variety
    };
  };

  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden flex flex-col">
      {/* Header */}
      <div className="p-6 text-center z-10">
        <h2 className="text-2xl font-bold text-white drop-shadow-lg">2025 你的遗憾是什么？</h2>
        <p className="text-primary-200 text-sm mt-2 font-light">点击泡泡，打破焦虑</p>
      </div>

      {/* Bubbles Container */}
      <div className="flex-grow relative p-4">
        {activeBubbles.length === 0 ? (
           <div className="absolute inset-0 flex items-center justify-center flex-col z-20">
             <div className="text-xl text-primary-200 font-medium mb-4">遗憾已清空</div>
             <button 
               onClick={() => setActiveBubbles(REGRET_DATA)}
               className="text-white underline decoration-primary-400 decoration-2 underline-offset-4"
             >
               重新回顾
             </button>
           </div>
        ) : (
          <div className="flex flex-wrap gap-2 justify-center content-center h-full transition-all duration-500 ease-in-out py-10">
            {activeBubbles.map((bubble) => (
              <div
                key={bubble.id}
                onClick={(e) => handleBubbleClick(bubble, e)}
                className={`
                  cursor-pointer
                  rounded-full flex items-center justify-center text-center p-4 shadow-lg backdrop-blur-sm
                  transition-all duration-300 hover:scale-110 active:scale-90
                  animate-float select-none
                  ${bubble.level === 1 
                    ? 'w-36 h-36 bg-gradient-to-br from-primary-500/80 to-purple-600/80 text-white font-bold text-xl border border-white/20 shadow-primary-500/30' 
                    : bubble.level === 2
                    ? 'w-28 h-28 bg-gradient-to-br from-blue-400/80 to-cyan-500/80 text-white font-medium text-base border border-white/20 shadow-blue-400/30'
                    : 'w-24 h-24 bg-gradient-to-br from-slate-600/80 to-slate-500/80 text-slate-100 text-sm border border-white/10'
                  }
                `}
                style={getRandomStyle()}
              >
                <span className="drop-shadow-md">{bubble.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Navigation Footer */}
      <div className="p-6 text-center z-10">
          <button 
            onClick={onNext}
            className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-3 rounded-full shadow-lg hover:bg-white/20 transition-all active:scale-95"
          >
            去许愿 2026 -&gt;
          </button>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-900/40 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-900/40 rounded-full blur-[100px]"></div>
        
        {/* Particles/Stars (Static for now) */}
        <div className="absolute top-10 left-20 w-1 h-1 bg-white rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute bottom-40 right-10 w-2 h-2 bg-white rounded-full opacity-30 animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-10 w-1.5 h-1.5 bg-white rounded-full opacity-20 animate-pulse delay-300"></div>
      </div>
    </div>
  );
};

export default RegretBubbles;
