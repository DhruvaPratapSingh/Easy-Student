import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import cardData from './cardData';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const CompanyCategory = () => {
  const [filter, setFilter] = React.useState('');

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredCards = filter 
    ? cardData.filter((card) => card.title === filter) 
    : cardData;

  const uniqueTitles = [...new Set(cardData.map((card) => card.title))];

  return (
    <div className="container mx-auto my-5">
      <h2 className='font-bold text-center text-2xl'>Company Wise Prep Guide</h2>
      <div className="flex justify-between items-center mb-5">
        <div></div> {/* This empty div ensures the Select box stays on the right */}
        <Box sx={{ minWidth: 120 }} className="ml-auto">
          <FormControl fullWidth>
            <InputLabel id="card-select-label">Search Job</InputLabel>
            <Select
              labelId="card-select-label"
              id="card-select"
              value={filter}
              label="Card Title"
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
          <Card key={card.id} className="max-w-sm mx-auto border border-gray-300 hover:border-blue-600 hover:bg-blue-100 p-1">
            <CardMedia
              component="img"
              className="h-36 object-cover rounded-lg"
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
              <Link to={card.titleLink}> {/* This should correctly use the titleLink */}
                <Button size="small">
                  Open it
                </Button>
              </Link>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CompanyCategory;
