const {RESTDataSource, RequestOptions} = require('apollo-datasource-rest')

class PictureAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = 'https://api.unsplash.com'
    }

    willSendRequest(request = RequestOptions) {
        request.headers.set('Authorization', 'Client-ID 8f3B1g1L2nLkBtrFrqI-Rcta7XSNSK68VZIezsOifZo')
    }

    async getPictures(currentPage, query) {
        const nextPage = currentPage + 1
        let response
        let pictures

        if(query === '') {
            response = await this.get(`/photos/?page=${nextPage}&per_page=${20}`)
            pictures = response.map(pic => this.pictureReducer(pic))
        } else {

            response = await this.get(`/search/photos/?query=${query}&page=${nextPage}&per_page=${20}`)
            pictures = response.results.map(pic => this.pictureReducer(pic))
        }
        return {
            currentPage: nextPage,
            pictures
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
            fullUrl: picture.urls.regular,
            likes: picture.likes,
            description: picture.alt_description,
            downloadLink: picture.links.download
        }
    }
}

module.exports = PictureAPI