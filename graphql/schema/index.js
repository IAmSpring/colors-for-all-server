const { buildSchema } = require('graphql');

module.exports = buildSchema(`
type Color {
    _id: ID!
    name: String!
    category: String!
    red: Int!
    green: Int!
    blue: Int!
    hex: String!
}

input ColorInput {
    name: String!
    category: String!
    red: Int!
    green: Int!
    blue: Int!
    hex: String!
}

type RootQuery {
    colors: [Color!]!
}

type RootMutation {
    createColor(colorInput: ColorInput): Color
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`)