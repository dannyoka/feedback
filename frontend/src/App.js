import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, About, Legal, Feedback, ThankYou } from './views';
import { SendFeedbackModal } from './components/modals/SendFeedback';
import { TopBar } from './components/TopBar';
import { Fab } from '@mui/material';
import { Feedback as FeedbackIcon } from '@mui/icons-material';

const App = () => {
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  return (
    <>
      <Router>
        <TopBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/thankyou" element={<ThankYou />} />
        </Routes>
        <Fab style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
          <FeedbackIcon color="primary" onClick={() => setOpen(!open)} />
        </Fab>
        <SendFeedbackModal
          open={open}
          handleOpen={setOpen}
          errorMessage={errorMessage}
          handleError={setErrorMessage}
        ></SendFeedbackModal>
      </Router>
    </>
  );
};

export default App;
