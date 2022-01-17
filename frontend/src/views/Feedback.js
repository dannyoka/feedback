import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SurveyList, SurveyReport } from '../components/survey';

export const Feedback = () => {
  const [surveys, setSurveys] = useState([]);
  const [report, setReport] = useState({});
  const [loading, setLoading] = useState(true);
  const fetchSurveys = async () => {
    const response = await axios.get('http://localhost:5000/api/surveys/');
    setSurveys(response.data);
    setLoading(false);
  };
  const fetchReport = async () => {
    const response = await axios.get(
      'http://localhost:5000/api/surveys/report'
    );
    setReport(response.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchSurveys();
    fetchReport();
  }, []);

  return (
    <div>
      {loading ? (
        'Loading'
      ) : !!surveys.length ? (
        <>
          <SurveyReport data={report} />
          <SurveyList surveys={surveys} />
        </>
      ) : (
        'No surveys available'
      )}
    </div>
  );
};
