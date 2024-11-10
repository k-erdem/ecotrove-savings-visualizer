import React, {useState} from 'react';
import { Box, Card, CardContent, CardHeader } from '@mui/material';
import Slider2 from './/Slider2';
import ToggleUnitType from './/ToggleUnitType';
import Tags from './/Tags';
import {Typography} from '@mui/material';

const SavingsVisualizer: React.FC = () => {

  const [unitType, setUnitType] = useState<'residential' | 'small-business'>('residential');

  return (
    <Box 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      minHeight="100vh" 
      p={4} 
      bgcolor="background.default"
    >
      
      <Card 
        className="w-full max-w-md sm:w-3/4 md:w-1/2 lg:w-1/4 m-8"
        sx={{
          boxShadow: 6, // Increase shadow for more pronounced edges
          border: '1px solid', // Add a border
          borderColor: 'divider', // Use theme's divider color
        }}
      >
        <CardContent className="space-y-4">
          <Typography variant="h6" component="div" gutterBottom align="center">
            Savings Visualizer
          </Typography>
          <ToggleUnitType unitType={unitType} setUnitType={setUnitType}/>
          <Slider2 />
          <Tags unitType={unitType}/>
        </CardContent>
      </Card>
    </Box>
  )
};

export default SavingsVisualizer;
