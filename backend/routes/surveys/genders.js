const Survey = require("../../models/surveys");
const get = require("lodash.get");

const getGenderBreakdown = async () => {
  const genderAggregation = await Survey.aggregate([
    { $group: { _id: "$gender", count: { $sum: 1 } } },
  ]);
  const males = get(
    genderAggregation.find((g) => g._id === "male"),
    "count",
    0
  );

  const females = get(
    genderAggregation.find((g) => g._id === "female"),
    "count",
    0
  );

  const undisclosed = get(
    genderAggregation.find((g) => g._id !== "male" && g._id !== "female"),
    "count",
    0
  );
  return { males, females, undisclosed };
};

module.exports = getGenderBreakdown;
