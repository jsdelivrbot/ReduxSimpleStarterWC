import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";

import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";

const API_KEY = "AIzaSyAuQCVeNfKhtRk9KlChQPT1nO27DPO_5Ss";



//Data is "Parent Down" in React (not child up)

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: "surfboards"}, (videos) => {
            this.setState({ videos }); // {videos: videos} can become { videos }
        });
    };

    // videos is called prop here. i.e. prop videos.
    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} /> 
            </div>        
        );
    };
}

ReactDOM.render(<App />, document.querySelector(".container"));
