import React from 'react';

const VideoPlayer = ({ video }) => {
  if (!video) {
    return <div> Loading... </div>
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`
  console.log('video URL', url)
  return (
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-items" src={url} title="Trailer Player"></iframe>
      <div>{video.snippet.title}</div>
      <div>{video.snippet.description}</div>
    </div>
  )
};

export default VideoPlayer;