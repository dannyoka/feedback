import React, { useState } from 'react';
import {
  FormGroup,
  Input,
  InputLabel,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  Button,
  TextField,
  MenuItem,
  Select,
  Rating,
  Typography,
} from '@mui/material';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { countryNames } from '../../utils/countries';

export const SendFeedbackModal = ({
  open,
  handleOpen,
  errorMessage,
  handleError,
}) => {
  const { pathname } = useLocation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(30);
  const [gender, setGender] = useState('male');
  const [country, setCountry] = useState('United States');
  const [rating, setRating] = useState(5);
  const [suggestions, setSuggestions] = useState('');
  const [origin, setOrigin] = useState(pathname);

  const clearFields = () => {
    setName('');
    setEmail('');
    setAge(5);
    setGender('male');
    setCountry('United States');
    setRating(5);
    setSuggestions('');
    setOrigin('');
  };

  const handleSubmit = async () => {
    const payload = {
      name,
      email,
      age,
      gender,
      country,
      rating,
      suggestions,
      originURL: origin,
    };
    try {
      const response = await axios.post(
        'http://localhost:5000/api/surveys',
        payload
      );
      localStorage.setItem('originURL', origin);
      clearFields();
      handleOpen(false);
      window.open('/thankyou', '_self');
    } catch (err) {
      console.log(err);
      handleError(err);
    }
  };

  const renderForm = () => {
    return (
      <FormGroup>
        <InputLabel required>Name</InputLabel>
        <Input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <InputLabel required>Email</InputLabel>
        <Input
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <InputLabel>Age</InputLabel>
        <Input
          type="number"
          onChange={(e) => setAge(e.target.value)}
          value={age}
        />
        <InputLabel>Gender</InputLabel>
        <Select onChange={(e) => setGender(e.target.value)} value={gender}>
          <MenuItem value={'male'}>Male</MenuItem>
          <MenuItem value={'female'}>Female</MenuItem>
          <MenuItem value={'prefer not to disclose'}>
            Prefer Not To Disclose
          </MenuItem>
        </Select>
        <InputLabel>Country</InputLabel>
        <Select
          value={country}
          onChange={(e) => {
            setCountry(e.target.value);
          }}
        >
          {countryNames.map((c, idx) => {
            return (
              <MenuItem key={idx} value={c}>
                {c}
              </MenuItem>
            );
          })}
        </Select>
        <InputLabel>Rating</InputLabel>
        <Rating
          value={rating}
          onChange={(e, newValue) => {
            setRating(newValue);
          }}
        />
        <InputLabel>Suggestions</InputLabel>
        <TextField
          onChange={(e) => setSuggestions(e.target.value)}
          value={suggestions}
        ></TextField>
      </FormGroup>
    );
  };

  return (
    <div style={{ width: '400px' }}>
      <Dialog
        onClose={() => {
          handleOpen(false);
        }}
        fullWidth
        open={open}
      >
        <DialogTitle>Send Feedback</DialogTitle>
        <DialogContent>
          {!!errorMessage && (
            <div style={{ paddingBottom: '1rem' }}>
              <Typography variant="body" style={{ color: 'red' }}>
                Unable to send feedback
              </Typography>
            </div>
          )}
          {renderForm()}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleOpen(!open)}>Cancel</Button>
          <Button onClick={() => handleSubmit()}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
