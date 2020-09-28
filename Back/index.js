const {ApolloServer} = require('apollo-server')
const typeDefs = require('./schema')
const resolvers = require('./resolvers')
const PictureAPI = require('./datasources/picture')


const corsOptions = {
    origin: '*',
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
    cors: corsOptions,
    dataSources: () => ({
        pictureAPI: new PictureAPI(),
    })
})


server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});