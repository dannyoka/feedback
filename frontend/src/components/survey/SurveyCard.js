import React from 'react';
import { Card, CardContent, Typography, Rating } from '@mui/material';

export const SurveyCard = ({ survey }) => {
  const { name, rating, suggestions } = survey;
  return (
    <Card>
      <CardContent style={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body">{suggestions}</Typography>
        <Rating value={rating} readOnly />
      </CardContent>
    </Card>
  );
};
