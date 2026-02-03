
import React from 'react';
import { AlertCircle, Phone, MapPin, ExternalLink } from 'lucide-react';

const EmergencyPage: React.FC = () => {
  const redFlags = [
    {
      title: '重度骨髓抑制',
      desc: '化疗后白细胞明显减少，并伴有发热。',
      severity: 'high'
    },
    {
      title: '精神与生命体征异常',
      desc: '神志不清、胸闷、呼吸困难、严重腹痛或频繁呕吐。',
      severity: 'high'
    },
    {
      title: '明显出血倾向',
      desc: '严重鼻出血、皮肤大面积瘀斑、牙龈出血或便血、血尿等。',
      severity: 'high'
    },
    {
      title: '活动障碍',
      desc: '肢体麻痹、活动异常、尿量明显减少。',
      severity: 'medium'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-red-50 border border-red-100 rounded-2xl p-5">
        <div className="flex items-center space-x-2 text-red-600 mb-2">
          <AlertCircle size={22} fill="currentColor" className="text-white" />
          <h2 className="text-lg font-bold">紧急就医指征</h2>
        </div>
        <p className="text-sm text-red-700 leading-relaxed">
          如病情加重，尤其是出现下列情况，应尽快到有条件的医院进行救治！
        </p>
      </div>

      <div className="space-y-3">
        {redFlags.map((flag, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-start space-x-4">
            <div className={`w-2 h-12 rounded-full flex-shrink-0 ${flag.severity === 'high' ? 'bg-red-500' : 'bg-orange-500'}`}></div>
            <div>
              <h3 className="font-bold text-gray-900">{flag.title}</h3>
              <p className="text-sm text-gray-500 mt-1 leading-snug">{flag.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <section className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 space-y-4">
        <h3 className="font-bold text-gray-900">就医准备</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
            <div className="flex items-center space-x-3">
              <Phone size={18} className="text-gray-400" />
              <span className="text-sm font-medium">紧急咨询电话</span>
            </div>
            <a href="tel:0772-1234567" className="text-[#007AFF] text-sm font-bold">拨打</a>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
            <div className="flex items-center space-x-3">
              <MapPin size={18} className="text-gray-400" />
              <span className="text-sm font-medium">柳州市人民医院</span>
            </div>
            <ExternalLink size={16} className="text-[#007AFF]" />
          </div>
        </div>
      </section>

      <div className="p-4 bg-blue-50/50 rounded-2xl border border-blue-100">
        <p className="text-[11px] text-blue-600 leading-relaxed">
          温馨提示：本助手仅作为健康生活方式指导，不能替代医务人员开具的正式医疗处方。
        </p>
      </div>
    </div>
  );
};

export default EmergencyPage;
