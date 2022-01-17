import React, { useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import {
  AverageAgeCard,
  AverageRatingCard,
  CountryBreakdownCard,
  GenderBreakdownCard,
  TotalCountCard,
} from './SurveyReportItem';
export const SurveyReport = ({ data }) => {
  const {
    genderBreakdown,
    averageAge,
    countryBreakdown,
    averageRating,
    totalCount,
  } = data;
  return (
    <div>
      <Typography variant="h4">Feedback Report</Typography>
      <Grid
        flexDirection="row"
        justifyContent={'start'}
        spacing={2}
        overflow
        container
      >
        <GenderBreakdownCard genderBreakdown={genderBreakdown} />
        <AverageAgeCard averageAge={averageAge} />
        <AverageRatingCard averageRating={averageRating} />
        <CountryBreakdownCard countryBreakdown={countryBreakdown || []} />
        <TotalCountCard totalCount={totalCount} />
      </Grid>
    </div>
  );
};
