import gql from "graphql-tag";

export const GET_PICTURES = gql`
    query($currentPage: Int, $query: String){
        picturesFeed(currentPage: $currentPage, query: $query){
            currentPage,
            pictures {
                id,
                thumbUrl
            }
        }
    }`

export const GET_SINGLE_PICTURE = gql`
    query($id: ID!){
        picture(id: $id){
            id
            fullUrl
            likes
            description
            downloadLink
        }
    }
`