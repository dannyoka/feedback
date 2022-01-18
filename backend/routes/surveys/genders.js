const Survey = require("../../models/surveys");
const get = require("lodash.get");

const getGenderBreakdown = async () => {
  const genderAggregationQuery = await Survey.aggregate([
    { $group: { _id: "$gender", count: { $sum: 1 } } },
  ]);
  return genderAggregationQuery;
};

module.exports = getGenderBreakdown;
