import _ from 'lodash'
import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import VideoPlayer from './VideoPlayer'
import VideoList from './VideoList'

const API_KEY = 'AIzaSyDAT4-UeGntGNdKtc4Ne9vPHYPznQQA7_A';


export default class VideoContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null
    };
  }

  componentDidMount() {
    this.videoSearch(this.props.term);
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div>
        <VideoPlayer video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos} />
      </div>
    );
  }
}
