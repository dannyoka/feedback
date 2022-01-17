import React from 'react';
import { Card, CardContent, CardHeader, Typography, Grid } from '@mui/material';

export const SurveyReportItem = ({ title, content }) => {
  return (
    <Grid item>
      <Card
        style={{
          height: '10rem',
        }}
        variant="outlined"
      >
        <CardHeader title={title}></CardHeader>
        <CardContent>{content}</CardContent>
      </Card>
    </Grid>
  );
};

export const GenderBreakdownCard = ({ genderBreakdown }) => {
  const renderContent = () => {
    const { males, females, undisclosed } = genderBreakdown;
    return (
      <>
        <Typography>Male: {males}</Typography>
        <Typography>Female: {females}</Typography>
        <Typography>Undisclosed: {undisclosed}</Typography>
      </>
    );
  };
  return (
    <>
      {genderBreakdown ? (
        <SurveyReportItem
          title="Gender Breakdown Card"
          content={renderContent()}
        />
      ) : (
        'Loading'
      )}
    </>
  );
};

export const AverageAgeCard = ({ averageAge }) => {
  const renderContent = () => {
    return <Typography>Average Age: {averageAge}</Typography>;
  };
  return (
    <SurveyReportItem title="Average Age Card" content={renderContent()} />
  );
};

export const AverageRatingCard = ({ averageRating }) => {
  const renderContent = () => {
    return <Typography>{averageRating}</Typography>;
  };
  return (
    <SurveyReportItem title="Average Rating Card" content={renderContent()} />
  );
};

export const CountryBreakdownCard = ({ countryBreakdown }) => {
  const renderContent = () => {
    return countryBreakdown.map((c, idx) => {
      return (
        <Typography key={idx}>
          {c._id}: {c.count}
        </Typography>
      );
    });
  };
  return (
    <SurveyReportItem
      title="Country Breakdown Card"
      content={renderContent()}
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
