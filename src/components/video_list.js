import React from "react";
import VideoListItem from "./video_list_item";

//Can be a function rather than class because we aren't accessing any state
const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return <VideoListItem key={video.etag} video={video} />
    });

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;
