
import React from 'react';

const OverviewPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <section className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold mb-3 text-gray-900">什么是急性白血病？</h2>
        <p className="text-[15px] leading-relaxed text-gray-600">
          急性白血病是造血系统的恶性疾病，发病率居儿童恶性肿瘤首位。它会导致骨髓内白血病细胞异常增生，抑制正常造血，表现为贫血、发热及出血。
        </p>
      </section>

      <section className="grid grid-cols-2 gap-4">
        <div className="bg-[#E5F1FF] rounded-2xl p-4 border border-blue-100">
          <p className="text-xs font-semibold text-blue-600 mb-1 uppercase tracking-wider">急性淋巴细胞</p>
          <p className="text-2xl font-bold text-blue-900">80%<span className="text-sm font-normal ml-1">存活率</span></p>
          <p className="text-[10px] text-blue-700 mt-2">规范化分层治疗后长期生存</p>
        </div>
        <div className="bg-[#E6F8EF] rounded-2xl p-4 border border-green-100">
          <p className="text-xs font-semibold text-green-600 mb-1 uppercase tracking-wider">急性早幼粒细胞</p>
          <p className="text-2xl font-bold text-green-900">90%<span className="text-sm font-normal ml-1">治愈率</span></p>
          <p className="text-[10px] text-green-700 mt-2">早期确诊与规范治疗是关键</p>
        </div>
      </section>

      <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
        <img src="https://picsum.photos/seed/care/600/300" alt="Care" className="w-full h-40 object-cover" />
        <div className="p-5">
          <h3 className="font-bold text-gray-900 mb-2">重要提示</h3>
          <p className="text-sm text-gray-600 leading-relaxed">一旦确诊，应尽早前往具有诊治能力的儿童医院或三甲医院积极接受治疗。生活方式干预是渡过化疗期的重要措施。</p>
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;
