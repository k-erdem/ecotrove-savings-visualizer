import React, { useState } from 'react';
import { Slider, TextField, Select, MenuItem, Input, FormControl, InputLabel, Chip, SelectChangeEvent } from '@mui/material';
import { Card, CardContent, CardHeader} from '@mui/material';
import Slider2 from './/Slider2';
import ToggleUnitType from './/ToggleUnitType';

// type DashboardProps = {
//   calculationMode: 'household' | 'small business';
//   items: string[];
//   onTagChange?: (tags: string[]) => void;
//   onValueChange?: (value: number) => void;
// };

// const SavingsVisualizerDashboard: React.FC<DashboardProps> = ({
//   calculationMode,
//   items,
//   onTagChange,
//   onValueChange
// }) => {
//   const [mode, setMode] = useState<'household' | 'small business'>(calculationMode);
//   const [value, setValue] = useState<number>(50);
//   const [tags, setTags] = useState<string[]>([]);

//   const handleModeChange = (event: SelectChangeEvent<'household' | 'small business'>) => {
//     setMode(event.target.value as 'household' | 'small business');
//   };

//   const handleSliderChange = (event: Event, newValue: number | number[]) => {
//     setValue(newValue as number);
//     onValueChange && onValueChange(newValue as number);
//   };

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const newValue = Number(event.target.value);
//     setValue(newValue);
//     onValueChange && onValueChange(newValue);
//   };

//   const handleTagClick = (item: string) => {
//     setTags((prevTags) =>
//       prevTags.includes(item) ? prevTags.filter((tag) => tag !== item) : [...prevTags, item]
//     );
//     onTagChange && onTagChange(tags);
//   };

//   return (
//     <div className="p-6 bg-white rounded shadow-md max-w-md mx-auto">
//       {/* Mode Selection */}
//       <FormControl fullWidth>
//         <InputLabel>Calculation Mode</InputLabel>
//         <Select value={mode} onChange={handleModeChange} label="Calculation Mode">
//           <MenuItem value="household">Household</MenuItem>
//           <MenuItem value="small business">Small Business</MenuItem>
//         </Select>
//       </FormControl>

//       {/* Slider with Input */}
//       <div className="my-4">
//         <Slider
//           value={value}
//           onChange={handleSliderChange}
//           aria-labelledby="slider"
//           className="my-2"
//           min={0}
//           max={100}
//         />
//         <Input
//           value={value}
//           onChange={handleInputChange}
//           inputProps={{ min: 0, max: 100, type: 'number' }}
//           className="w-full"
//         />
//       </div>

//       {/* Taggable Item List */}
//       <div className="flex flex-wrap gap-2">
//         {items.map((item) => (
//           <Chip
//             key={item}
//             label={item}
//             onClick={() => handleTagClick(item)}
//             color={tags.includes(item) ? 'primary' : 'default'}
//             clickable
//           />
//         ))}
//       </div>

//       {/* Dynamic Display */}
//       <div className="mt-6 text-center text-lg font-semibold">
//         Dynamic Value: <span className="text-blue-600">{/* Your dynamic value here */}</span>
//       </div>
//     </div>
//   );
// };

// export default SavingsVisualizerDashboard;

type VisualizerProps = {
  // unitType: 'household' | 'small business'
  // sqft: number;
  // tagItems: string[];
  // onTagChange?: (tags: string[]) => void;
  // onValueChange?: (value: number) => void;
}

const SavingsVisualizer: React.FC<VisualizerProps> = ({
  // props here
}) => {
  // function body here
  return (
    <div>
      <ToggleUnitType />
      <p>Savings Visualizer Rocks !</p>
      {/* <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" /> */}
      <Slider2 />
    </div>
  )
};

export default SavingsVisualizer;
