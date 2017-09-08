import React from "react";

//= (props) // then videos = props.videos
//or = ({video}) does the same thing

const VideoListItem = ({video}) => {
    return (
        <li className={"list-group-item"}>
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" />
                </div>
                <div className="media-body">

                </div>
            </div>
        </li>
    )
};

export default VideoListItem;