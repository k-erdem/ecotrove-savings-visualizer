import StorefrontIcon from '@mui/icons-material/Storefront';
import HouseIcon from '@mui/icons-material/House';
import React, { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const ToggleUnitType: React.FC = () => {

    const [unitType, setUnitType] = useState<string | null>('residential');

    const handleUnitType = (event : React.MouseEvent<HTMLElement>, newValue: 'residential' | 'small-business') => {
      setUnitType(newValue)
    };

    return (
        <div>
            <h3> Choose Your Unit Type:</h3>
            <ToggleButtonGroup
                value={unitType}
                exclusive
                onChange={handleUnitType}
             >
                <ToggleButton value="residential">
                  <HouseIcon />
                </ToggleButton>
                <ToggleButton value="small-business">
                  <StorefrontIcon/>
                </ToggleButton>
             </ToggleButtonGroup>
             <p>Chosen unit type is: {unitType}</p>
        </div>
    )
};

export default ToggleUnitType;