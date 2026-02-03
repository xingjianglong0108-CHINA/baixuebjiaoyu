
import React, { useState } from 'react';
import { 
  Home, 
  Heart, 
  Stethoscope, 
  AlertTriangle, 
  ChevronRight,
  Info
} from 'lucide-react';
import { Tab } from './types';
import OverviewPage from './pages/OverviewPage';
import LifestylePage from './pages/LifestylePage';
import TreatmentPage from './pages/TreatmentPage';
import EmergencyPage from './pages/EmergencyPage';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.OVERVIEW);

  const renderContent = () => {
    switch (activeTab) {
      case Tab.OVERVIEW: return <OverviewPage />;
      case Tab.LIFESTYLE: return <LifestylePage />;
      case Tab.TREATMENT: return <TreatmentPage />;
      case Tab.EMERGENCY: return <EmergencyPage />;
      default: return <OverviewPage />;
    }
  };

  const navItems = [
    { id: Tab.OVERVIEW, label: '概览', icon: Home },
    { id: Tab.LIFESTYLE, label: '护理', icon: Heart },
    { id: Tab.TREATMENT, label: '康复', icon: Stethoscope },
    { id: Tab.EMERGENCY, label: '应急', icon: AlertTriangle },
  ];

  return (
    <div className="min-h-screen flex flex-col max-w-md mx-auto bg-[#F2F2F7] relative">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#F2F2F7]/80 ios-blur border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <h1 className="text-[17px] font-semibold text-black">
          {navItems.find(i => i.id === activeTab)?.label}
        </h1>
        <button className="text-[#007AFF]">
          <Info size={22} />
        </button>
      </header>

      {/* Content */}
      <main className="flex-1 overflow-y-auto pb-24 px-4 pt-4">
        {renderContent()}
      </main>

      {/* Tab Bar */}
      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/80 ios-blur border-t border-gray-200 safe-bottom">
        <div className="flex justify-around items-center h-16">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center justify-center space-y-1 w-full h-full transition-colors ${
                activeTab === item.id ? 'text-[#007AFF]' : 'text-[#8E8E93]'
              }`}
            >
              <item.icon size={22} fill={activeTab === item.id ? "currentColor" : "none"} strokeWidth={activeTab === item.id ? 2.5 : 2} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default App;
