const {ApolloServer} = require('apollo-server')
const typeDefs = require('./schema')
const resolvers = require('./resolvers')
const PictureAPI = require('./datasources/picture')


const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        pictureAPI: new PictureAPI(),
    })
})


server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`)
});