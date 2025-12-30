import React, { useState } from 'react';

const CoConstruction2026 = ({ onNext }) => {
  const [selectedType, setSelectedType] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    console.log('Submitting 2026 requirement:', { type: selectedType, content });
    
    // Simulate delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    onNext(); // Go to next page (Medal/Reward)
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-br from-orange-400 to-red-500 text-white p-8 rounded-b-3xl shadow-lg mb-6 relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-2">2026 Let's Strong Together</h1>
          <p className="text-orange-100 text-lg font-medium">让工作充满“太阳味”</p>
        </div>
        {/* Decorative circle */}
        <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
      </div>

      <div className="px-6 flex-grow">
        <div className="bg-white rounded-2xl p-6 shadow-md mb-6">
          <h2 className="text-xl font-bold text-slate-800 mb-4">FAT 2026 提质体效</h2>
          <p className="text-slate-600 mb-6 leading-relaxed text-sm">
            2026年，FAT的目标是全面提升质量与效率。我们需要您的声音，邀请您共同建设更好的FAT平台。
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-slate-700 font-semibold mb-3">您最希望在 FAT 获得什么？</label>
              <div className="grid grid-cols-2 gap-3">
                {['用法知识', '培训实操', '协同共建', '其他'].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setSelectedType(type)}
                    className={`p-3 rounded-xl border text-center text-sm transition-all ${
                      selectedType === type
                        ? 'border-orange-500 bg-orange-50 text-orange-700 font-medium ring-1 ring-orange-500'
                        : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-slate-700 font-semibold mb-3">您的具体建议或需求</label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="请畅所欲言..."
                className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all h-32 resize-none text-sm"
                required
              ></textarea>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={!selectedType || !content || isSubmitting}
                className={`w-full py-4 rounded-full font-bold text-white shadow-lg transition-all transform active:scale-95 flex items-center justify-center ${
                  !selectedType || !content || isSubmitting
                    ? 'bg-slate-300 cursor-not-allowed shadow-none'
                    : 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 shadow-orange-500/30'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    提交中...
                  </span>
                ) : (
                  '提交并领取勋章 ->'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CoConstruction2026;
