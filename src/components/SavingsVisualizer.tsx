import React, { useState } from 'react';
import { Slider, TextField, Select, MenuItem, Input, FormControl, InputLabel, Chip, SelectChangeEvent } from '@mui/material';
import { Card, CardContent, CardHeader} from '@mui/material';
import Slider2 from './/Slider2';
import ToggleUnitType from './/ToggleUnitType';
import Tags from './/Tags';

type VisualizerProps = {
  // unitType: 'household' | 'small business'
  // sqft: number;
  // tagItems: string[];
  // onTagChange?: (tags: string[]) => void;
  // onValueChange?: (value: number) => void;
}

const SavingsVisualizer: React.FC<VisualizerProps> = ({
  // props here
  // TODO: Toggle Unit'e dokundukca, Tags'e gideni bilginin degismesi gerekiyor
}) => {
  // function body here
  return (
    <div>
      <ToggleUnitType />
      <p>Savings Visualizer Rocks !</p>
      <Slider2 />
      <p>Choose the tools you have at home:</p>
      <Tags unitType='residential'/>
    </div>
  )
};

export default SavingsVisualizer;
