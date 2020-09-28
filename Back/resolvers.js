const resolvers = {
    Query: {
        picturesFeed: (_, {currentPage}, {dataSources}) =>
            dataSources.pictureAPI.getPictures(currentPage),
        picture: (_, {id}, {dataSources}) =>
            dataSources.pictureAPI.getSinglePicture(id),
    },
};

module.exports = resolvers