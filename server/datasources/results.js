const results = require("../data/results.json");
const { DataSource } = require("apollo-datasource");
const _ = require("lodash");

class ResultAPI extends DataSource {
  constructor() {
    super();
  }

  initialize(config) {}

  getResults(args) {
    return _.filter(results, args);
  }

  getResultByCategory(category) {
    const result = _.filter(results, { category: category });
    return result[0];
  }
}

module.exports = ResultAPI;
