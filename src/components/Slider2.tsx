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
    const MAX = 10500;
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
        if (value < 0){
            setValue(0);
        } else if (value > 10500){
            setValue(10500);
        }
    }

    return(
        <div>
            <h2> Square Foot Selection:</h2>
            <Slider
                value = {value}
                step = {100}
                onChange = {handleSliderChange}
                aria-labelledby='squarefoot-slider'
                min = {MIN}
                max = {MAX}
                valueLabelDisplay="auto"
            />
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography
                    variant="body2"
                >
                    {MIN} sqft
                </Typography>
                <Typography
                    variant="body2"
                 >
                    {MAX} sqft
                </Typography>
            </Box>

            {/* Input Box */}
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
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
                />
                <FormHelperText id="outlined-weight-helper-text">Square Foot</FormHelperText>
            </FormControl>

        </div>
    )
};

export default Slider2;