import React, { useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import {
  AverageAgeCard,
  AverageRatingCard,
  CountryBreakdownCard,
  GenderBreakdownCard,
  OriginURLBreakdownCard,
  TotalCountCard,
} from './SurveyReportItem';
export const SurveyReport = ({ data }) => {
  const {
    genderBreakdown,
    averageAge,
    countryBreakdown,
    averageRating,
    totalCount,
    originURLBreakdown,
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
        <GenderBreakdownCard genderBreakdown={genderBreakdown || []} />
        <AverageAgeCard averageAge={averageAge || 0} />
        <AverageRatingCard averageRating={averageRating || 0} />
        <CountryBreakdownCard countryBreakdown={countryBreakdown || []} />
        <OriginURLBreakdownCard originURLBreakdown={originURLBreakdown || []} />
        <TotalCountCard totalCount={totalCount || 0} />
      </Grid>
    </div>
  );
};
