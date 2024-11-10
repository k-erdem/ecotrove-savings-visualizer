import React, { useState } from "react";
import Chip from '@mui/material/Chip';
import { Typography, Box } from "@mui/material";
interface Tag {
    id: number;
    label: string;
    value: number;
}

const tagList: Tag[] = [
    { id: 1, label: 'Central A/C', value: 6 },
    { id: 2, label: 'Central Heating', value: 4 },
    { id: 3, label: 'Freezer', value: 5 },
    { id: 4, label: 'Space Heater', value: 5 },
    { id: 5, label: 'Dryer', value: 3 },
    { id: 6, label: 'Washer', value: 3 },
    { id: 7, label: 'Refrigerator', value: 5 },
    { id: 8, label: 'Electric Vehicle', value: 6 },
];
type TagProps = {
    unitType: "residential" | "small-business"
}

const Tags: React.FC<TagProps> = ({unitType}) => {

    const [tags, setTags] = useState<number[]>([]);

    const handleTagClick = (tagId: number) => {
        setTags(prevSelectedTags => 
          prevSelectedTags.includes(tagId)
            ? prevSelectedTags.filter(id => id !== tagId)
            : [...prevSelectedTags, tagId]
        );
    };

    const savingsRate = tagList
        .filter(tag => tags.includes(tag.id))
        .reduce((sum, tag) => sum + tag.value, 0)
        * (unitType === "residential" ? 1 : 1.15);

    return(
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                mt: 1,
                p: 2
            }}
        >
            <Box sx={{ width: '100%', maxWidth: '800px' }}>
                    <Typography variant="h6" sx={{ textAlign: 'center', mb: 2 }}>
                        Choose Your Appliances:
                    </Typography>
                    {tagList.map((tag) => (
                        <Chip
                            key={tag.id}
                            label={tag.label}
                            onClick={() => handleTagClick(tag.id)}
                            clickable
                            color={tags.includes(tag.id) ? "primary" : "default"}
                            sx={{ 
                                margin: { xs: '8px 4px', sm: '8px 4px', md: '4px 4px' }
                            }}
                        />
                    ))}

                <Box sx={{ mt: 2 }}>
                    <Typography 
                        variant="h6" 
                        sx={{ 
                            p: 2, 
                            borderRadius: 2, 
                            textAlign: 'center', 
                            color: 'text.secondary'
                        }}
                    >
                        Potential Savings: {savingsRate}%
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Tags;