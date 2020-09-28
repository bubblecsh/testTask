const {gql} = require('apollo-server')

const typeDefs = gql`
    type Query {
        pictures: [Picture]!
        picturesFeed(currentPage: Int, query: String): PicturesFeed
        picture(id: ID!): Picture
    }

    type Picture {
        id: ID!
        thumbUrl: String,
        fullUrl: String,
        likes: Int
        description: String,
        downloadLink: String
    }

    type PicturesFeed {
        currentPage: Int
        pictures: [Picture]!
    }
`;

module.exports = typeDefs