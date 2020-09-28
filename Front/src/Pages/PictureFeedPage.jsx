import React, {useState} from "react";
import {useQuery} from "@apollo/client";
import {GET_PICTURES} from "../queries";
import PictureFeed from "../Components/PictureFeed";
import Error from "../Components/Error";
import LoadingSpinner from "../Components/LoadingSpinner";
import Search from "../Components/Search";


const PictureFeedPage = () => {
    const [query, setQuery] = useState('')
    const {data, loading, error, fetchMore} = useQuery(GET_PICTURES, {
        variables: {
            currentPage: 0,
            query: query
        }
    })

    const fetch = () => {
        if(loading) return
         fetchMore({
            variables: {
                currentPage: data.picturesFeed.currentPage,
                query : query
            },
            updateQuery: (prev, {fetchMoreResult}) => {
                if (!fetchMoreResult) return prev
                if (prev.picturesFeed.pictures) {
                    const mergedArray = [...prev.picturesFeed.pictures, ...fetchMoreResult.picturesFeed.pictures]
                    let map = new Map();
                    for(const tag of mergedArray) {
                        map.set(tag.id, tag);
                    }
                    let uniqueArray = [...map.values()]
                    return {
                        picturesFeed: {
                            "__typename":"PicturesFeed",
                            currentPage: fetchMoreResult.picturesFeed.currentPage,
                            pictures: uniqueArray
                        }
                    }
                }
            }
        })
    }

    return (
        <div>
            <Search setQuery={setQuery} />
            {loading && <LoadingSpinner />}
            {error && <Error message={error.networkError.result.errors[0].message} />}
            {data && <PictureFeed pictures={data.picturesFeed.pictures} fetch={fetch} />}
        </div>
    )
}

export default PictureFeedPage