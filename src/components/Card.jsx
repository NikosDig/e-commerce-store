import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

function ImgMediaCard({ title, description, image, price,discountedPrice }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={title}
        height="140"
        image={image.url || "/static/images/cards/contemplative-reptile.jpg"} // Use a placeholder if no image
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Box mt={2}>
          <Typography variant="h6" component="div">
            Price: ${price.toFixed(2)}
          </Typography>
          {discountedPrice < price && (
            <Typography variant="body2" color="error">
              Discounted Price: ${discountedPrice.toFixed(2)}
            </Typography>
          )}
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small">View Product</Button>
      </CardActions>
    </Card>
  );
}

export default ImgMediaCard;
