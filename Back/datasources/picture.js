const {RESTDataSource, RequestOptions} = require('apollo-datasource-rest')

class PictureAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = 'https://api.unsplash.com'
    }

    willSendRequest(request = RequestOptions) {
        request.headers.set('Authorization', 'Client-ID 8f3B1g1L2nLkBtrFrqI-Rcta7XSNSK68VZIezsOifZo')
    }

    async getPictures(currentPage) {
        const nextPage = currentPage + 1
        const response = await this.get(`/photos/?page=${nextPage}&per_page=${20}`)
        return {
            currentPage: nextPage,
            pictures: response
        }
    }

    async getSinglePicture(id) {
        const response = await this.get(`/photos/${id}`)
        return this.pictureReducer(response)
    }

    pictureReducer(picture) {
        return {
            id: picture.id || 0,
            thumbUrl: picture.urls.thumb,
            fullUrl: picture.urls.full,
            likes: picture.likes,
            description: picture.description,
            downloadLink: picture.links.download
        }
    }
}

module.exports = PictureAPI