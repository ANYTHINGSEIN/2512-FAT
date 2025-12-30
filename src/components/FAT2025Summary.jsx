import React from 'react';

const FAT2025Summary = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pb-10 font-sans">
      {/* Header / Hero */}
      <div className="bg-gradient-to-br from-primary-600 to-primary-700 text-white p-8 rounded-b-3xl shadow-lg mb-8 relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-2">FAT 2025年度总结</h1>
          <p className="text-primary-100 text-lg font-medium">2025 你FAT了吗？</p>
        </div>
        
        {/* Decorative circles */}
        <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute -left-8 -bottom-8 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
      </div>

      <div className="px-4 space-y-4">
        
        {/* User Stats Card */}
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-6 bg-primary-600 rounded-full"></div>
            <h2 className="text-lg font-bold text-slate-800">热情学习，体验尝试</h2>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center divide-x divide-slate-100">
            <div className="space-y-1 px-1">
              <div className="text-xl font-bold text-primary-600">2133</div>
              <div className="text-xs text-slate-500">FiTers 来过</div>
            </div>
            <div className="space-y-1 px-1">
              <div className="text-xl font-bold text-primary-600">1400+</div>
              <div className="text-xs text-slate-500">活跃 FATers</div>
            </div>
            <div className="space-y-1 px-1">
              <div className="text-xl font-bold text-primary-600">880+</div>
              <div className="text-xs text-slate-500">Coding大师</div>
            </div>
          </div>
        </div>

        {/* Tools Stats Card */}
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center gap-2 mb-4">
             <div className="w-1 h-6 bg-primary-600 rounded-full"></div>
             <h2 className="text-lg font-bold text-slate-800">紧跟前沿，甄选工具</h2>
          </div>
          <div className="flex justify-between items-center px-2">
             <div className="text-center flex-1">
                <div className="text-2xl font-bold text-primary-600">141</div>
                <div className="text-xs text-slate-500">扫描工具</div>
             </div>
             <div className="h-8 w-px bg-slate-100"></div>
             <div className="text-center flex-1">
                <div className="text-2xl font-bold text-primary-600">38</div>
                <div className="text-xs text-slate-500">甄选上架</div>
             </div>
             <div className="h-8 w-px bg-slate-100"></div>
             <div className="text-center flex-1">
                <div className="text-2xl font-bold text-primary-600">37</div>
                <div className="text-xs text-slate-500">用法指南</div>
             </div>
          </div>
        </div>

        {/* Value & Safety Row */}
        <div className="grid grid-cols-2 gap-4">
           {/* Value */}
           <div className="bg-gradient-to-br from-blue-50 to-white p-4 rounded-2xl border border-blue-100 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-bold text-slate-700 mb-2">费用无忧</h3>
                <div className="text-xl font-bold text-primary-600">30万+</div>
                <div className="text-xs text-slate-500 mt-1">为FiTers节省</div>
              </div>
              <div className="text-[10px] text-slate-400 mt-2 bg-white/50 inline-block px-2 py-1 rounded self-start">0垫付 · 0报销</div>
           </div>
           
           {/* Safety */}
           <div className="bg-gradient-to-br from-blue-50 to-white p-4 rounded-2xl border border-blue-100 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-bold text-slate-700 mb-2">安全护航</h3>
                <div className="text-xl font-bold text-primary-600">830<span className="text-sm">次</span></div>
                <div className="text-xs text-slate-500 mt-1">敏感项目拦截</div>
              </div>
              <div className="text-[10px] text-slate-400 mt-2 bg-white/50 inline-block px-2 py-1 rounded self-start">守住安全底线</div>
           </div>
        </div>

        {/* Training Card */}
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center gap-2 mb-4">
             <div className="w-1 h-6 bg-primary-600 rounded-full"></div>
             <h2 className="text-lg font-bold text-slate-800">经验分享，实战培训</h2>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center bg-slate-50 p-3 rounded-lg">
               <span className="text-sm text-slate-600">体验营/专题培训</span>
               <span className="font-bold text-primary-600">11 <span className="text-xs font-normal text-slate-500">期</span></span>
            </div>
            <div className="flex justify-between items-center bg-slate-50 p-3 rounded-lg">
               <span className="text-sm text-slate-600">面对面交流</span>
               <span className="font-bold text-primary-600">500+ <span className="text-xs font-normal text-slate-500">人</span></span>
            </div>
            <div className="flex justify-between items-center bg-slate-50 p-3 rounded-lg">
               <span className="text-sm text-slate-600">5星好评率</span>
               <span className="font-bold text-primary-600">88.6%</span>
            </div>
          </div>
        </div>

        {/* Footer Text */}
        <div className="text-center pt-6 pb-12 opacity-80">
           <p className="text-primary-600 font-extrabold text-xl tracking-wide">2026 Let's Strong Together</p>
        </div>
        
      </div>
    </div>
  );
};

export default FAT2025Summary;
