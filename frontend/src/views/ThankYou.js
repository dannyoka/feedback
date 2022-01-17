import React, { useEffect } from 'react';
import { Typography, Button } from '@mui/material';

export const ThankYou = () => {
  const originURL = localStorage.getItem('originURL');
  return (
    <div>
      <Typography variant="h2">Thank you for your feedback!</Typography>
      <Typography>
        If you would like to return to your last page{' '}
        <Button
          onClick={() => {
            window.open(originURL, '_self');
          }}
        >
          Click here
        </Button>
      </Typography>
      <Typography>
        Or if you are done browsing, feel free to close the tab.
      </Typography>
    </div>
  );
};
