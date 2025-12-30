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
    <div className="min-h-screen bg-white relative overflow-hidden flex flex-col">
      {/* Header */}
      <div className="p-6 text-center z-10">
        <h2 className="text-2xl font-bold text-slate-900">2025 你的遗憾是什么？</h2>
        <p className="text-slate-600 text-sm mt-2 font-medium">点击泡泡，打破焦虑</p>
      </div>

      {/* Bubbles Container */}
      <div className="flex-grow relative p-4">
        {activeBubbles.length === 0 ? (
           <div className="absolute inset-0 flex items-center justify-center flex-col z-20">
             <div className="text-xl text-slate-500 font-medium mb-4">遗憾已清空</div>
             <button 
               onClick={() => setActiveBubbles(REGRET_DATA)}
               className="text-blue-700 underline decoration-blue-300 decoration-2 underline-offset-4 hover:text-blue-800 font-bold"
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
                  rounded-full flex items-center justify-center text-center p-4 shadow-lg
                  transition-all duration-300 hover:scale-110 active:scale-90
                  animate-float select-none
                  ${bubble.level === 1 
                    ? 'w-36 h-36 bg-blue-600 text-white font-bold text-xl' 
                    : bubble.level === 2
                    ? 'w-28 h-28 bg-white text-blue-800 font-bold text-base border-2 border-blue-200'
                    : 'w-24 h-24 bg-slate-100 text-slate-900 font-medium text-sm border border-slate-300'
                  }
                `}
                style={getRandomStyle()}
              >
                <span>{bubble.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Navigation Footer */}
      <div className="p-6 text-center z-10">
          <button 
            onClick={onNext}
            className="bg-blue-600 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all active:scale-95"
          >
            去许愿 2026 -&gt;
          </button>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        {/* Simple geometric shapes instead of blurred gradients */}
        <div className="absolute top-10 right-10 w-20 h-20 border-4 border-blue-50 rounded-full opacity-50"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 border-8 border-slate-50 rounded-full opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-slate-100 rounded-full opacity-30"></div>
      </div>
    </div>
  );
};

export default RegretBubbles;
