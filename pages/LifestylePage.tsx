
import React, { useState } from 'react';
import { CheckCircle2, Circle, Wind, Utensils, Droplets, Smile, ShieldCheck } from 'lucide-react';

const LifestylePage: React.FC = () => {
  const [plateletCount, setPlateletCount] = useState<number | ''>('');
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const categories = [
    {
      title: '日常起居',
      icon: Wind,
      color: 'text-blue-500',
      items: [
        { id: 'l1', content: '家长悉心照顾，规律生活，保证充足睡眠。' },
        { id: 'l2', content: '室内每日通风消毒，不去人群密集场所。' },
        { id: 'l3', content: '白细胞低或化疗期间，外出佩戴口罩。' }
      ]
    },
    {
      title: '卫生护理',
      icon: Droplets,
      color: 'text-cyan-500',
      items: [
        { id: 'h1', content: '饭前便后洗手，保持双手清洁。' },
        { id: 'h2', content: '便后温水清洗肛周，女童从前向后擦拭。' },
        { id: 'h3', content: 'PICC/输液港管路定期维护与评估。' }
      ]
    },
    {
      title: '饮食营养',
      icon: Utensils,
      color: 'text-orange-500',
      items: [
        { id: 'f1', content: '食物需熟透，餐具每日消毒，避免外卖。' },
        { id: 'f2', content: '中性粒细胞缺乏时，食物须高温蒸煮。' },
        { id: 'f3', content: '避免油腻辛辣，注意膳食纤维，防止便秘。' },
        { id: 'f4', content: '门冬酰胺酶化疗期间应保持低脂饮食。' }
      ]
    }
  ];

  const toggleItem = (id: string) => {
    const next = new Set(checkedItems);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setCheckedItems(next);
  };

  return (
    <div className="space-y-6 pb-4">
      {/* Platelet Smart Tool */}
      <section className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
        <div className="flex items-center space-x-2 mb-4">
          <ShieldCheck className="text-green-500" />
          <h2 className="text-lg font-bold">口腔护理助手</h2>
        </div>
        <div className="space-y-4">
          <div>
            <label className="text-xs text-gray-500 mb-1 block">输入当前血小板计数 (×10⁹/L)</label>
            <input 
              type="number"
              placeholder="例如：25"
              value={plateletCount}
              onChange={(e) => setPlateletCount(e.target.value === '' ? '' : Number(e.target.value))}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
            />
          </div>
          {plateletCount !== '' && (
            <div className={`p-4 rounded-xl border ${Number(plateletCount) >= 30 ? 'bg-blue-50 border-blue-100' : 'bg-orange-50 border-orange-100'}`}>
              <p className="text-sm font-semibold mb-1">
                {Number(plateletCount) >= 30 ? '✅ 建议：正常刷牙' : '⚠️ 建议：生理盐水漱口'}
              </p>
              <p className="text-xs text-gray-600">
                {Number(plateletCount) >= 30 
                  ? '晨起及睡前可用超软毛牙刷刷牙。' 
                  : '停止刷牙，改用生理盐水或医用漱口水含漱1分钟以上。'}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Checklist Sections */}
      {categories.map((cat, idx) => (
        <section key={idx} className="space-y-3">
          <div className="flex items-center space-x-2 px-1">
            <cat.icon size={20} className={cat.color} />
            <h3 className="font-bold text-gray-800">{cat.title}</h3>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            {cat.items.map((item, itemIdx) => (
              <div 
                key={item.id} 
                onClick={() => toggleItem(item.id)}
                className={`flex items-start space-x-3 p-4 transition-colors cursor-pointer ${
                  itemIdx !== cat.items.length - 1 ? 'border-b border-gray-50' : ''
                } ${checkedItems.has(item.id) ? 'bg-gray-50/50' : ''}`}
              >
                {checkedItems.has(item.id) ? (
                  <CheckCircle2 className="text-green-500 mt-0.5 flex-shrink-0" size={20} />
                ) : (
                  <Circle className="text-gray-300 mt-0.5 flex-shrink-0" size={20} />
                )}
                <span className={`text-[15px] leading-snug ${checkedItems.has(item.id) ? 'text-gray-400 line-through' : 'text-gray-700'}`}>
                  {item.content}
                </span>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Psychological Section */}
      <section className="bg-gradient-to-br from-pink-50 to-orange-50 rounded-2xl p-5 border border-pink-100 flex items-center space-x-4">
        <div className="bg-white p-3 rounded-full shadow-sm">
          <Smile className="text-pink-500" size={28} />
        </div>
        <div>
          <h4 className="font-bold text-pink-900">情绪支持</h4>
          <p className="text-xs text-pink-700 mt-1">关注患儿情绪变化，及时给予安抚和情感支持，必要时寻求专业帮助。</p>
        </div>
      </section>
    </div>
  );
};

export default LifestylePage;
