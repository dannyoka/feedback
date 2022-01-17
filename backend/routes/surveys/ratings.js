const Survey = require("../../models/surveys");
const get = require("lodash.get");

const getAverageRating = async () => {
  const averageRatingQuery = await Survey.aggregate([
    { $group: { _id: "", avgRating: { $avg: "$rating" } } },
  ]);
  const averageRating = get(averageRatingQuery[0], "avgRating", 0);
  return averageRating;
};

module.exports = getAverageRating;
