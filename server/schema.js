const { gql } = require("apollo-server");

module.exports = gql`
  type Query {
    results(question: String): [Result]
    resultByCategory(category: String): Result
  }
  type Result {
    category: String
    type: String
    difficulty: String
    question: String
    correct_answer: String
    incorrect_answers: String
  }
`;
