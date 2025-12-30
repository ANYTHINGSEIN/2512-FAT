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
    // If it has children, "split" it (remove self, add children).
    // If it's a leaf node (no children), maybe show a "Recorded" state or just float away.
    
    if (bubble.children && bubble.children.length > 0) {
      // Fission effect
      // 1. Remove the clicked bubble
      // 2. Add its children to the list
      
      const newBubbles = activeBubbles.filter(b => b.id !== bubble.id);
      // We insert children roughly where the parent was, or just append. 
      // For a chaotic/cloud look, appending is fine.
      setActiveBubbles([...newBubbles, ...bubble.children]);
    } else {
      // Leaf node clicked
      // Visual feedback: maybe turn green or fade out?
      // Let's remove it to clear the screen eventually?
      // Or just shake it to show "Received".
      alert(`已记录您的遗憾: "${bubble.label}"`);
      // Optional: Remove it after clicking
      // setActiveBubbles(activeBubbles.filter(b => b.id !== bubble.id));
    }
  };

  // Helper to get random positions/styles for visual variety (Optional, simplified for now)
  // For a clean grid/flex layout, we just map them.

  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden flex flex-col">
      {/* Header */}
      <div className="p-6 text-center z-10">
        <h2 className="text-2xl font-bold text-primary-700">2025 你的遗憾是什么？</h2>
        <p className="text-slate-500 text-sm mt-2">点击泡泡，打破焦虑</p>
      </div>

      {/* Bubbles Container */}
      <div className="flex-grow relative p-4">
        {activeBubbles.length === 0 ? (
           <div className="absolute inset-0 flex items-center justify-center flex-col">
             <div className="text-xl text-slate-400 font-medium mb-4">遗憾已清空</div>
             <button 
               onClick={() => setActiveBubbles(REGRET_DATA)}
               className="text-primary-600 underline"
             >
               重新回顾
             </button>
           </div>
        ) : (
          <div className="flex flex-wrap gap-4 justify-center content-center h-full transition-all duration-500 ease-in-out">
            {activeBubbles.map((bubble) => (
              <div
                key={bubble.id}
                onClick={(e) => handleBubbleClick(bubble, e)}
                className={`
                  cursor-pointer
                  rounded-full flex items-center justify-center text-center p-4 shadow-md
                  transition-all duration-500 transform hover:scale-105 active:scale-95
                  animate-fade-in
                  ${bubble.level === 1 
                    ? 'w-32 h-32 bg-gradient-to-br from-primary-500 to-primary-600 text-white font-bold text-lg border-4 border-primary-200' 
                    : bubble.level === 2
                    ? 'w-28 h-28 bg-white text-primary-700 border-2 border-primary-100 font-medium'
                    : 'w-24 h-24 bg-slate-50 text-slate-600 border border-slate-200 text-sm'
                  }
                `}
                style={{
                   // Randomize slightly for organic feel?
                   // margin: `${Math.random() * 10}px` 
                }}
              >
                {bubble.label}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Navigation Footer */}
      <div className="p-6 text-center z-10">
          <button 
            onClick={onNext}
            className="bg-white text-primary-600 border border-primary-200 px-6 py-2 rounded-full shadow-sm hover:bg-slate-50 transition-colors"
          >
            去许愿 2026 -&gt;
          </button>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-30">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary-100 rounded-full blur-3xl mix-blend-multiply filter"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl mix-blend-multiply filter"></div>
      </div>
    </div>
  );
};

export default RegretBubbles;
