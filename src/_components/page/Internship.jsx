import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import cardData from "../utils/cardData";

const Internship = () => {
  return (
    <div className="container mx-auto my-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
        {cardData.map((card) => (
          <Card key={card.id} className="max-w-sm mx-auto">
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
              <Link to={`/learn_more/${card.id}`}><Button size="small">Learn More</Button></Link>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Internship;
