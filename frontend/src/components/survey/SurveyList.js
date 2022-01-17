import React from 'react';
import { Typography } from '@mui/material';
import { SurveyCard } from './SurveyCard';

export const SurveyList = ({ surveys }) => {
  const renderSurveys = () => {
    return surveys.map((s, idx) => {
      return <SurveyCard key={idx} survey={s} />;
    });
  };

  return (
    <>
      <Typography variant="h4">Surveys List</Typography>
      {surveys.length ? renderSurveys(surveys) : 'No surveys available'}
    </>
  );
};
