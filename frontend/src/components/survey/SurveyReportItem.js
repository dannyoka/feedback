import React from 'react';
import { Card, CardContent, CardHeader, Typography, Grid } from '@mui/material';

export const SurveyReportItem = ({ title, content }) => {
  return (
    <Grid item>
      <Card
        style={{
          height: '10rem',
          overflow: 'scroll',
        }}
        variant="outlined"
      >
        <CardHeader title={title}></CardHeader>
        <CardContent>{content}</CardContent>
      </Card>
    </Grid>
  );
};

export const SurveyReportItemList = ({ list, title }) => {
  const renderContent = () => {
    return list.map((item, idx) => {
      return (
        <Typography key={idx}>
          {item._id || 'Undisclosed'}: {item.count}
        </Typography>
      );
    });
  };
  return <SurveyReportItem title={title} content={renderContent()} />;
};

export const GenderBreakdownCard = ({ genderBreakdown }) => {
  return (
    <SurveyReportItemList
      list={genderBreakdown}
      title="Gender Breakdown Card"
    />
  );
};

export const AverageAgeCard = ({ averageAge }) => {
  const renderContent = () => {
    return <Typography>Average Age: {averageAge?.toFixed(2)}</Typography>;
  };
  return (
    <SurveyReportItem title="Average Age Card" content={renderContent()} />
  );
};

export const AverageRatingCard = ({ averageRating }) => {
  const renderContent = () => {
    return <Typography>{averageRating?.toFixed(2)}</Typography>;
  };
  return (
    <SurveyReportItem title="Average Rating Card" content={renderContent()} />
  );
};

export const CountryBreakdownCard = ({ countryBreakdown }) => {
  return (
    <SurveyReportItemList
      list={countryBreakdown}
      title="Country Breakdown Card"
    />
  );
};

export const OriginURLBreakdownCard = ({ originURLBreakdown }) => {
  return (
    <SurveyReportItemList
      list={originURLBreakdown}
      title="Origin URL Breakdown Card"
    />
  );
};

export const TotalCountCard = ({ totalCount }) => {
  const renderContent = () => {
    return <Typography>Total Count: {totalCount}</Typography>;
  };
  return (
    <SurveyReportItem title="Total Count Card" content={renderContent()} />
  );
};
