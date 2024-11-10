import React, { useState } from "react";
import Chip from '@mui/material/Chip';
import { Typography } from "@mui/material";
interface Tag {
    id: number;
    label: string;
    value: number;
}

const tagList: Tag[] = [
    { id: 1, label: 'React', value: 10 },
    { id: 2, label: 'TypeScript', value: 8 },
    { id: 3, label: 'Material-UI', value: 6 },
    { id: 4, label: 'Tailwind CSS', value: 5 },
    { id: 5, label: 'Node.js', value: 7 },
    { id: 6, label: 'Express', value: 4 },
    { id: 7, label: 'MongoDB', value: 6 },
    { id: 8, label: 'GraphQL', value: 8 },
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

    return(
        <>
            <p> Choose Your Appliances</p>
            {/* Traverse through the available chips */}
            {tagList.map( (tag) => (
                <Chip
                    key={tag.id}
                    label={tag.label}
                    onClick={() => handleTagClick(tag.id)}
                    clickable
                    color={tags.includes(tag.id) ? "primary" : "default"}
                />
            ))};

            <Typography variant="h4" component="div" className="mt-6 p-4 bg-blue-100 rounded-lg text-center">
                Total Score: {savingsRate}
            </Typography>
            <Typography variant="h4" component="div" className="mt-6 p-4 bg-blue-100 rounded-lg text-center">
                Unit Type: {unitType}
            </Typography>
        </>
    );
};

export default Tags;