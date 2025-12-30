import { useState } from 'react'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      {/* Header */}
      <header className="bg-white px-4 py-3 flex justify-between items-center shadow-sm sticky top-0 z-50">
        <div className="flex items-center gap-3">
           {/* Logo Area */}
           <div className="flex items-center gap-2">
             <div className="text-primary-600 font-bold text-lg">FiT技术委员会</div>
             <div className="h-4 w-px bg-gray-300"></div>
             <div className="text-primary-600 font-bold text-xl">FAT</div>
           </div>
        </div>
        <div className="flex items-center gap-2">
           <span className="text-primary-600 text-xs font-medium bg-primary-50 px-2 py-1 rounded">免费</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-md mx-auto w-full p-4 space-y-6">
        
        {/* Hero Card */}
        <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 shadow-sm border border-blue-100 relative overflow-hidden">
           <div className="relative z-10">
             <div className="flex justify-between items-start">
               <div>
                 <h1 className="text-4xl font-bold text-primary-600 mb-1">FAT平台</h1>
                 <div className="text-lg text-slate-600 font-medium">AI工具/用法动态</div>
               </div>
               <div className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-sm transform rotate-3">
                  11月
               </div>
             </div>
             <div className="mt-4 text-right">
                <span className="text-primary-400 text-sm font-semibold">FAT.WOA.COM</span>
             </div>
           </div>
           
           {/* Decorative Elements */}
           <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-100 rounded-full opacity-50 blur-2xl"></div>
           <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-blue-50 rounded-full opacity-60 blur-xl"></div>
        </div>

        {/* Stats Card */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
           <div className="bg-primary-600 text-white px-4 py-2 flex justify-between items-center">
             <span className="font-bold flex items-center gap-2">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                 <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
               </svg>
               AI工具体验营
             </span>
             <span className="text-xs bg-white/20 px-2 py-0.5 rounded">面对面交流</span>
           </div>
           
           <div className="p-5 grid grid-cols-2 gap-6">
              <div className="space-y-1">
                 <div className="text-sm text-slate-500">本月举办</div>
                 <div className="text-3xl font-bold text-primary-600">3 <span className="text-sm text-slate-400 font-normal">场</span></div>
              </div>
              <div className="space-y-1">
                 <div className="text-sm text-slate-500">累计举办</div>
                 <div className="text-3xl font-bold text-primary-600">8 <span className="text-sm text-slate-400 font-normal">场</span></div>
              </div>
              <div className="space-y-1 col-span-2 border-t border-slate-100 pt-4">
                 <div className="flex justify-between items-end">
                    <div>
                      <div className="text-sm text-slate-500">覆盖部门</div>
                      <div className="text-3xl font-bold text-primary-600">7 <span className="text-sm text-slate-400 font-normal">个</span></div>
                    </div>
                    <div className="text-right">
                       <div className="text-3xl font-bold text-primary-600">100+ <span className="text-sm text-slate-400 font-normal">人参与</span></div>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* List Items */}
        <div className="space-y-3">
           {[
             { dept: '微企付产品部', items: '产品一、二、三', color: 'bg-blue-50' },
             { dept: '金融风险管理部', items: '风险评审及监控中心', color: 'bg-indigo-50' },
             { dept: '跨境支付业务', items: '业务拓展中心', color: 'bg-sky-50' }
           ].map((item, idx) => (
             <div key={idx} className="bg-white p-3 rounded-lg shadow-sm border border-slate-100 flex gap-3 hover:shadow-md transition-shadow cursor-pointer">
                <div className={`w-24 h-16 ${item.color} rounded-md flex-shrink-0 flex items-center justify-center`}>
                  {/* Placeholder Image */}
                  <div className="w-8 h-8 bg-white/50 rounded-full"></div>
                </div>
                <div className="flex flex-col justify-center">
                   <div className="font-bold text-slate-700">{item.dept}</div>
                   <div className="text-xs text-slate-500 mt-1">{item.items}</div>
                </div>
             </div>
           ))}
        </div>

      </main>
    </div>
  )
}

export default App
