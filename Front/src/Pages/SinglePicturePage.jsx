import React from 'react'
import {useParams} from "react-router-dom"
import {useQuery} from "@apollo/client";
import {GET_SINGLE_PICTURE} from "../queries";
import LoadingSpinner from "../Components/LoadingSpinner";
import Error from "../Components/Error";


const SinglePicturePage = () => {
    const {id} = useParams();
    const {data, loading, error} = useQuery(GET_SINGLE_PICTURE, {
        variables: {
            id
        }
    })

    if (loading) return <LoadingSpinner/>
    if (error) return <Error message={error.networkError.result.errors[0].message}/>


    const openInNewTab = (url) => {
        const newWindow = window.open(url)
        if (newWindow) newWindow.opener = null
    }


    const {picture} = data
    return (
        <div className={'container'}>
            <img alt={'img'} src={picture.fullUrl}/>
            <div className="bottom_container">
                <div className={'info_container'}>
                    <p><b>Likes:</b> {picture.likes}</p>
                    <p>{picture.description}</p>
                </div>
                <div className="link_container">
                    <button
                        onClick={() => openInNewTab(picture.downloadLink)}>Download
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SinglePicturePage