const Survey = require("../../models/surveys");
const get = require("lodash.get");

const getTotalCount = async () => {
  const totalCountQuery = await Survey.aggregate([
    { $group: { _id: "", count: { $sum: 1 } } },
  ]);
  const totalCount = get(totalCountQuery[0], "count", 0);
  return totalCount;
};

module.exports = getTotalCount;
