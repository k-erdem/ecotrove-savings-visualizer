import React, { useState } from 'react';
import { Slider, TextField, Select, MenuItem, Input, FormControl, InputLabel, Chip, SelectChangeEvent } from '@mui/material';
import FormHelperText from '@mui/material/FormHelperText';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const Slider2: React.FC = () => {
    
    // Initial slider/input values
    const [value, setValue] = useState<number>(1500);
    const MAX = 5000;
    const MIN = 0;

    // Handle changes on Slider
    const handleSliderChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number);
    };

    // Handle text input change
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value === "" ? 0 : Number(event.target.value);
        setValue(newValue);
    };

    // Setting slider range
    const handleSliderRange = () => {
        if (value < MIN){
            setValue(0);
        } else if (value > MAX){
            setValue(10500);
        }
    }

    return(
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Box sx={{ width: '100%', maxWidth: '500px', mt: 1 }}>
                <Typography 
                    variant="h6" 
                    sx={{ 
                        textAlign: 'center',
                        mt: 2
                    }}
                >
                    Square Foot Selection
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box sx={{ flex: 1 }}>
                        <Slider
                            value={value}
                            step={100}
                            onChange={handleSliderChange}
                            aria-labelledby='squarefoot-slider'
                            min={MIN}
                            max={MAX}
                            valueLabelDisplay="auto"
                        />
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography variant="body2">{MIN} sqft</Typography>
                            <Typography variant="body2">{MAX} sqft</Typography>
                        </Box>
                    </Box>

                    <FormControl sx={{ width: '120px' }} variant="outlined">
                        <OutlinedInput
                            id="outlined-adornment-weight"
                            endAdornment={<InputAdornment position="end">sqft</InputAdornment>}
                            aria-describedby="outlined-weight-helper-text"
                            value={value}
                            onChange={handleInputChange}
                            onBlur={handleSliderRange}
                            inputProps={{
                                'aria-labelledby': "input-slider"
                            }}
                            size="small"
                        />
                        <FormHelperText id="outlined-weight-helper-text"> </FormHelperText>
                    </FormControl>
                </Box>
            </Box>
        </Box>
    );
};

export default Slider2;