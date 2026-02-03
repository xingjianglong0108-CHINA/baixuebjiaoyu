
import React from 'react';
import { Calendar, Syringe, Clock, Activity } from 'lucide-react';

const TreatmentPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <section className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
        <div className="flex items-center space-x-2 mb-4 text-[#007AFF]">
          <Calendar size={20} />
          <h2 className="text-lg font-bold">随诊计划表</h2>
        </div>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold flex-shrink-0">1</div>
            <div>
              <p className="font-semibold text-gray-800">停药第一年</p>
              <p className="text-sm text-gray-500">每3~6个月复诊一次，进行全面评估。</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold flex-shrink-0">2</div>
            <div>
              <p className="font-semibold text-gray-800">停药第二年</p>
              <p className="text-sm text-gray-500">每3~6个月复查血常规，每年一次体格检查。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
        <div className="flex items-center space-x-2 mb-4 text-[#FF9500]">
          <Syringe size={20} />
          <h2 className="text-lg font-bold">疫苗接种指南</h2>
        </div>
        <div className="relative pl-6 border-l-2 border-orange-100 space-y-8">
          <div className="relative">
            <div className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-orange-400 border-2 border-white"></div>
            <p className="text-sm font-bold text-gray-800">化疗期间至结束后6个月</p>
            <p className="text-xs text-orange-600 mt-1">不建议接种任何疫苗</p>
          </div>
          <div className="relative">
            <div className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-green-400 border-2 border-white"></div>
            <p className="text-sm font-bold text-gray-800">结束后6个月</p>
            <p className="text-xs text-green-600 mt-1">免疫功能恢复后，可接种灭活疫苗</p>
          </div>
          <div className="relative">
            <div className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-blue-400 border-2 border-white"></div>
            <p className="text-sm font-bold text-gray-800">结束后12个月</p>
            <p className="text-xs text-blue-600 mt-1">评估后决定是否接种减毒活疫苗</p>
          </div>
        </div>
        <div className="mt-6 p-4 bg-gray-50 rounded-xl">
          <p className="text-[11px] text-gray-400 leading-relaxed italic">
            * 所有接种计划必须与您的主治医生详细讨论。
          </p>
        </div>
      </section>

      <section className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
        <div className="flex items-center space-x-2 mb-3">
          <Activity className="text-purple-500" size={20} />
          <h2 className="text-lg font-bold">长期关注</h2>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed">
          化疗结束后，仍需定期对认知、心理、内分泌及生殖等发育情况进行评估，以保证患儿远期生活质量。
        </p>
      </section>
    </div>
  );
};

export default TreatmentPage;
