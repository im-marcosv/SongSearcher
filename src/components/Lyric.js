import React, {Fragment} from 'react';

const Lyric = ({lyric}) => {
    if(lyric.length === 0) return null;
    return (
        <Fragment>
            <h2>Song lyric</h2>
            <p className="lyric">{lyric}</p>
        </Fragment>
    );
};
 
export default Lyric;