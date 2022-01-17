const Survey = require("../../models/surveys");
const get = require("lodash.get");

const getAverageAge = async () => {
  const averageAgeQuery = await Survey.aggregate([
    { $group: { _id: "", avgAge: { $avg: "$age" } } },
  ]);
  const averageAge = get(averageAgeQuery[0], "avgAge", 0);
  return averageAge;
};

module.exports = getAverageAge;
