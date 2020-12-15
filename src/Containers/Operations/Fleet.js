import React from 'react';
import {ResponsiveEmbed} from 'react-bootstrap'

const Fleet = () => {
    return (
        <div>
            <ResponsiveEmbed aspectRatio="16by9">
                <embed src="http://remote.fsairlines.net/v1/fleet.php?rvi=48370&title=off" />
                </ResponsiveEmbed>
                </div>
    )
};

export default Fleet;