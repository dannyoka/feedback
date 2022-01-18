const Survey = require('../../models/surveys');

const getOriginURLBreakdown = async () => {
  const originURLBreakdownQuery = await Survey.aggregate([
    { $group: { _id: '$originURL', count: { $sum: 1 } } },
    { $sort: { _id: 1 } },
  ]);
  return originURLBreakdownQuery;
};

module.exports = getOriginURLBreakdown;
