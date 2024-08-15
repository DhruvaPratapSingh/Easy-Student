import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { platforms } from '../utils/contest';
const Contest = () => {
  const [filter, setFilter] = React.useState('');

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredCards = filter
    ? platforms.filter((card) => card.title === filter)
    : platforms;

  const uniqueTitles = [...new Set(platforms.map((card) => card.title))];

  return (
    <div className="container mx-auto my-5">
      <div className="flex justify-between items-center mb-5">
        <div></div> {/* This empty div ensures the Select box stays on the right */}
        <Box sx={{ minWidth: 120 }} className="ml-auto">
          <FormControl fullWidth>
            <InputLabel id="card-select-label">Search Platform</InputLabel>
            <Select
              labelId="card-select-label"
              id="card-select"
              value={filter}
              label="Platform"
              onChange={handleChange}
            >
              <MenuItem value="">All</MenuItem>
              {uniqueTitles.map((title, index) => (
                <MenuItem key={index} value={title}>{title}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
        {filteredCards.map((card) => (
          <Card key={card.id} className="max-w-sm mx-auto object-fit">
            <CardMedia
              className="h-36"
              image={card.image}
              title={card.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Contest;
