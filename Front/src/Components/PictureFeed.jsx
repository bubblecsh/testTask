import React from "react";
import InfiniteScroll from "react-infinite-scroller";
import Masonry from "react-masonry-component";
import {NavLink} from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
import '../App.css'


const PictureFeed = ({pictures, fetch}) => {
    return (
            <InfiniteScroll
                pageStart={0}
                loadMore={fetch}
                hasMore={true}
                loader={<LoadingSpinner key={0} />}
            >
                <Masonry>
                    {pictures.map(pic => (
                        <NavLink to={`/picture/${pic.id}`} key={pic.id}>
                            <img style={{margin: '10px'}} alt={'pic'} src={pic.thumbUrl}/>
                        </NavLink>
                    ))}
                </Masonry>
            </InfiniteScroll>
    )
}


export default PictureFeed