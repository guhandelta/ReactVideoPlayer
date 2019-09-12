import React from 'react';
import PlaylistHeader from '../PlaylistHeader';
import PlaylistItems from '../containers/PlaylistItems';
import Nightmode from '../Nightmode';

const Playlist = props =>( // {} => are not used as what is returned in oonly JSX
    <>
        <Nightmode />
        <PlaylistHeader />
        <PlaylistItems />
    </>
)

export default Playlist;