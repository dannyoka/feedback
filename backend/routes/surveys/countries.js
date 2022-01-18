const Survey = require('../../models/surveys');

const getCountryBreakdown = async () => {
  const countryBreakdownQuery = await Survey.aggregate([
    { $group: { _id: '$country', count: { $sum: 1 } } },
    { $sort: { _id: 1 } },
  ]);
  return countryBreakdownQuery;
};

module.exports = getCountryBreakdown;
