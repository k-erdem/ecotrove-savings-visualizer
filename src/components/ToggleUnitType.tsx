import StorefrontIcon from '@mui/icons-material/Storefront';
import HouseIcon from '@mui/icons-material/House';
import React, { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Box, Typography, Stack } from '@mui/material';

const ToggleUnitType: React.FC<{ unitType: 'residential' | 'small-business', setUnitType: React.Dispatch<React.SetStateAction<'residential' | 'small-business'>> }> = ({ unitType, setUnitType }) => {

    const handleUnitType = (event: React.MouseEvent<HTMLElement>, newValue: 'residential' | 'small-business') => {
        setUnitType(newValue);
    };

    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            maxWidth: '500px',
            margin: 'auto'
        }}>
            <ToggleButtonGroup
                value={unitType}
                exclusive
                onChange={handleUnitType}
                size={'small'}
                sx={{ gap: 1 }}
            >
                <ToggleButton value="residential">
                    <HouseIcon />
                    <Typography variant="caption">
                        Residential
                    </Typography>
                </ToggleButton>
                <ToggleButton value="small-business">
                    <StorefrontIcon/>
                    <Typography variant="caption">
                        Small Business
                    </Typography>
                </ToggleButton>
            </ToggleButtonGroup>
        </Box>
    )
};

export default ToggleUnitType;