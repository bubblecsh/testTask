const resolvers = {
    Query: {
        picturesFeed: (_, {currentPage, query}, {dataSources}) =>
            dataSources.pictureAPI.getPictures(currentPage, query),
        picture: (_, {id}, {dataSources}) =>
            dataSources.pictureAPI.getSinglePicture(id),
    },
};

module.exports = resolvers