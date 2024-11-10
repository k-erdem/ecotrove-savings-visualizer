// App.tsx
import React from 'react';
import SavingsVisualizerDashboard from './components/SavingsVisualizerDashboard';
import SavingsVisualizer from './components/SavingsVisualizer';
import Slider2 from  './components/Slider2';

const App: React.FC = () => {
  // Sample items and initial calculation mode
  const items = ['Electricity', 'Water', 'Gas', 'Internet'];
  const calculationMode: 'household' | 'small business' = 'household';

  // Handlers for tag and value changes
  const handleTagChange = (tags: string[]) => {
    console.log('Selected tags:', tags);
  };

  const handleValueChange = (value: number) => {
    console.log('Slider/Input value:', value);
  };

  return (
    <div className="w-screen">
      {/* <SavingsVisualizerDashboard
        calculationMode={calculationMode}
        items={items}
        onTagChange={handleTagChange}
        onValueChange={handleValueChange}
      /> */}
      <SavingsVisualizer />
    </div>
  );
};

export default App;