import React from 'react';
import styled from 'styled-components';
import Video from 'react-video-cover';

import sheSaid from '../../images/she-said-480.mov';

const VideoContainer  = styled('video')`
    width: 100vw;
    height: calc(100vh - 50px);
    background: black;
`;

class VideoPlayer extends React.Component {
    
    render() {
      const videoOptions = {
        src: {sheSaid},
        ref: videoRef => {
          this.videoRef = videoRef;
        },
        onClick: () => {
          if (this.videoRef && this.videoRef.paused) {
            this.videoRef.play();
          } else if (this.videoRef) {
            this.videoRef.pause();
          }
        },
        title: 'click to play/pause',
      };
      return (
        <div >
          {/* <Video
            videoOptions={videoOptions}
          /> */}
          {/* <video src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4" /> */}
             <VideoContainer controls autoPlay>
                <source src={sheSaid} type="video/mp4" />
                Your browser does not support the video tag.
            </VideoContainer>
        </div>
      );
    }
}

export default VideoPlayer;