import React, { useEffect, useState } from 'react';

const MedalAward = ({ onRestart }) => {
  const [medalId, setMedalId] = useState('0000');

  useEffect(() => {
    // Simulate fetching a unique medal ID
    // In a real app, this would come from the previous submission response
    const randomId = Math.floor(1000 + Math.random() * 9000);
    setMedalId(randomId.toString());
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Background Effects - Subtle Blue/White */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-primary-50 to-transparent opacity-60"></div>
         <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-[100px]"></div>
         <div className="absolute top-1/4 -left-20 w-72 h-72 bg-indigo-50/50 rounded-full blur-[80px]"></div>
      </div>

      <div className="z-10 flex flex-col items-center w-full max-w-md px-6 text-center">
        
        {/* Title */}
        <h2 className="text-xl font-bold text-primary-600 mb-1 tracking-widest uppercase">FAT 2025</h2>
        <h1 className="text-3xl font-extrabold text-slate-800 mb-24 drop-shadow-sm">挚友勋章</h1>

        {/* Medal Graphic */}
        <div className="relative mb-12 group">
          {/* Outer Glow (Blue) */}
          <div className="absolute inset-0 bg-primary-200/50 rounded-full blur-2xl group-hover:bg-primary-300/50 transition-all duration-500 transform scale-110"></div>
          
          {/* Ribbon - Adjusted z-index and position */}
          <div className="absolute -top-14 left-1/2 -translate-x-1/2 w-20 h-24 -z-10 flex justify-center">
               <div className="w-6 h-24 bg-red-600 -skew-x-12 origin-bottom border-l border-r border-red-700 shadow-sm"></div>
               <div className="w-6 h-24 bg-red-600 skew-x-12 origin-bottom border-l border-r border-red-700 shadow-sm"></div>
               {/* Knot/Top piece */}
               <div className="absolute top-0 w-4 h-4 bg-red-800 rounded-full shadow-md z-10"></div>
          </div>

          {/* Medal Body - Silver/Blue Theme */}
          <div className="relative w-48 h-48 bg-gradient-to-br from-slate-100 via-white to-slate-200 rounded-full p-2 shadow-xl border border-slate-200 flex items-center justify-center transform hover:scale-105 transition-transform duration-300 ring-4 ring-primary-50">
            <div className="w-full h-full bg-gradient-to-br from-primary-600 to-primary-700 rounded-full flex flex-col items-center justify-center border-4 border-white/20 relative overflow-hidden shadow-inner">
               {/* Shine effect */}
               <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-45 animate-[spin_4s_linear_infinite_reverse]"></div>
               
               <div className="text-5xl mb-2 drop-shadow-md">🏅</div>
               <div className="text-white font-bold text-lg tracking-wider">FAT 2026</div>
               <div className="text-[10px] text-primary-200 uppercase mt-1 tracking-widest font-semibold bg-primary-800/30 px-2 py-0.5 rounded-full border border-white/10">Co-Builder</div>
            </div>
          </div>
        </div>

        {/* Number Card - Clean White Style */}
        <div className="bg-white border border-slate-100 p-8 rounded-2xl w-full mb-8 shadow-lg shadow-slate-200/50 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-400 to-indigo-500"></div>
           <p className="text-slate-500 text-sm mb-2 font-medium">您的专属共建编号</p>
           <div className="text-5xl font-mono font-bold text-slate-800 tracking-widest my-2">
             <span className="text-2xl text-slate-400 mr-1">NO.</span>
             <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-indigo-600">{medalId}</span>
           </div>
           <p className="text-xs text-slate-400 mt-4 bg-slate-50 inline-block px-3 py-1 rounded-full">
             *请截图保存，后续将凭此编号参与摇号抽奖
           </p>
        </div>

        {/* Action Button - Primary Blue */}
        <button 
          onClick={() => alert('截图功能需原生支持，请手动截图保存~')}
          className="w-full bg-primary-600 text-white font-bold py-4 rounded-full shadow-lg shadow-primary-500/30 hover:bg-primary-700 hover:shadow-primary-600/40 transform active:scale-95 transition-all mb-6"
        >
          保存勋章
        </button>

        <button 
          onClick={onRestart}
          className="text-slate-500 text-sm hover:text-primary-600 transition-colors font-medium flex items-center gap-1"
        >
          <span>↺</span> 返回首页
        </button>

      </div>
    </div>
  );
};

export default MedalAward;
