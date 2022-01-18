const express = require('express');
const Survey = require('../../models/surveys');
const getGenderBreakdown = require('./genders');
const getAverageRating = require('./ratings');
const getAverageAge = require('./age');
const getCountryBreakdown = require('./countries');
const getTotalCount = require('./common');
const getOriginURLBreakdown = require('./originURL');

const surveyRoutes = () => {
  const router = express.Router();

  router.get('/', async (req, res) => {
    const surveys = await Survey.find();
    res.status(200).send(surveys);
  });

  router.post('/', async (req, res) => {
    try {
      const {
        name,
        email,
        age,
        gender,
        country,
        rating,
        suggestions,
        originURL,
      } = req.body;
      survey = new Survey({
        name,
        email,
        age,
        rating,
        gender,
        country,
        suggestions,
        originURL,
      });
      await survey.save();
      console.log('survey created: ', survey);
      res.send(survey);
    } catch (err) {
      console.log(err);
      res.status(400).send(err.message);
    }
  });
  router.get('/report', async (req, res) => {
    const genderBreakdown = await getGenderBreakdown();
    const averageRating = await getAverageRating();
    const averageAge = await getAverageAge();
    const countryBreakdown = await getCountryBreakdown();
    const totalCount = await getTotalCount();
    const originURLBreakdown = await getOriginURLBreakdown();
    res.status(200).send({
      genderBreakdown,
      averageRating,
      averageAge,
      countryBreakdown,
      totalCount,
      originURLBreakdown,
    });
  });
  return router;
};
module.exports = surveyRoutes;
