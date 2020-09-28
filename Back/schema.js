const {gql} = require('apollo-server')

const typeDefs = gql`
    type Query {
        pictures: [Picture]!
    }
    
    type Picture {
        id: ID!
        url: String
    }
`;

module.exports = typeDefs