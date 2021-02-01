module.exports = {
  Query: {
    results: (parent, args, { dataSources }, info) => {
      return dataSources.resultAPI.getResults(args);
    },
    resultByCategory: (parent, { category }, { dataSources }, info) => {
      return dataSources.resultAPI.getResultByCategory(category);
    }
  }
};
