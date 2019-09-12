// Send in Playlist component and create a new component by applying Link fn() to it, to boost the outer component with other functionalities
import React from 'react';
import { Link } from 'react-router-dom';

const withLink = WrappedComponent => props => {
    // Take in the props => modify the props => apply the Link fn() to the name
    const newProps = {
        ...props, // Clone the props
        video:{   // Video Object with all the data abt the video
            ...props.video, // Clone the Video Object
            title: (
                <Link to={{ pathname:`/${props.video.id}`, autoplay: true }}>
                    {props.video.title}
                </Link>
            )
        }
    };

    return <WrappedComponent {...newProps} />;
}

export default withLink;