const {gql} = require('apollo-server')

const typeDefs = gql`
    type Query {
        pictures: [Picture]!
        picturesFeed(currentPage: Int): PicturesFeed
        picture(id: ID!): Picture
    }

    type Picture {
        id: ID!
        url: String
        likes: Int
        description: String
    }

    type PicturesFeed {
        currentPage: Int
        pictures: [Picture]!
    }
`;

module.exports = typeDefs