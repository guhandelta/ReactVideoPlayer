import React from 'react';
import PlaylistHeader from '../PlaylistHeader';
import PlaylistItems from '../containers/PlaylistItems';
import Nightmode from '../Nightmode';
import StyledPlaylist from '../styles/StyledPlaylist';

const Playlist = props =>( // {} => are not used as what is returned in oonly JSX
    <StyledPlaylist>
        <Nightmode />
        <PlaylistHeader />
        <PlaylistItems />
    </StyledPlaylist>
)

export default Playlist;