// App.tsx
import React from 'react';
import SavingsVisualizerDashboard from './components/Dashboard';
import SavingsVisualizer from './components/SavingsVisualizer';
import Slider2 from  './components/Slider2';

const App: React.FC = () => {

  return (
    <div className="w-screen">
      <SavingsVisualizer />
    </div>
  );
};

export default App;