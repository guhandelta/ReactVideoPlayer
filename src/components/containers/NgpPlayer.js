import React, { useState, useEffect } from 'react'; 
import { ThemeProvider } from 'styled-components';
import Video from '../Video';
import Playlist from '../containers/Playlist';
import StyledNgpPlayer from '../styles/StyledNgpPlayer';

const theme = {
    bgcolor: "#353535",
    bgcolorItem: "#414141",
    bgcolorItemActive: "#405c63",
    bgcolorPlayed: "#526d4e",
    border: "none",
    borderPlayed: "none",
    color: "#fff"
};

const themeLight = {
    bgcolor: "#fff",
    bgcolorItem: "#fff",
    bgcolorItemActive: "#80a7b1",
    bgcolorPlayed: "#7d9979",
    border: "1px solid #353535",
    borderPlayed: "none",
    color: "#353535"
};
// theme is provided as a prop to the ThemeProvider
const NgpPlayer = props => {

    const videos = JSON.parse(document.querySelector('[name="videos"]').value);

    const [state, setstate] = useState({
        videos: videos.playlist,
        activeVideo: videos.playlist[0],
        nightMode: true,
        playlistId: videos.playlistId,
        autoplay: false
    })

    const nightModeCallback = () => {

    }
    const endCallback = () => {

    }
    const progressCallback = () => {

    }

    return(
        <ThemeProvider theme={state.nightMode ? theme : themeLight }>        
            { state.videos !== null ?
                <StyledNgpPlayer>
                    <Video 
                        active={state.activeVideo}
                        autoplay={state.autoplay}
                        endCallback={endCallback}
                        progressCallback={progressCallback}
                    />
                    <Playlist
                        videos={state.videos}
                        active={state.activeVideo}
                        nightModeCallback={nightModeCallback}
                        nightMode={state.nightMode}
                    />
                </StyledNgpPlayer>
            : null}
        </ThemeProvider>
    )
}

export default NgpPlayer;