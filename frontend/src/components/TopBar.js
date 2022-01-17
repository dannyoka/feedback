import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Feedback } from '@mui/icons-material';

export const TopBar = () => {
  const linkStyles = {
    cursor: 'pointer',
    paddingRight: '1rem',
  };
  return (
    <div>
      <AppBar position="sticky">
        <Toolbar>
          <Typography
            style={linkStyles}
            onClick={() => window.open('/', '_self')}
          >
            Ancestry
          </Typography>
          <Typography
            style={linkStyles}
            onClick={() => window.open('/about', '_self')}
          >
            About
          </Typography>
          <Typography
            style={linkStyles}
            onClick={() => window.open('/legal', '_self')}
          >
            Legal
          </Typography>
          <Typography
            style={linkStyles}
            onClick={() => window.open('/feedback', '_self')}
          >
            Feedback
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export const BottomBar = ({ handleOpen }) => {
  return (
    <AppBar
      position="sticky"
      style={{ bottom: 0, top: 'auto', position: 'absolute' }}
    >
      <Toolbar style={{ display: 'flex', flexDirection: 'row-reverse' }}>
        <Feedback
          style={{ cursor: 'pointer' }}
          onClick={() => {
            handleOpen(true);
          }}
        />
      </Toolbar>
    </AppBar>
  );
};
