import React from 'react'
import Lyric from './Lyric';
import Info from './Info';

const Search = ({info, lyric}) => {
    return ( 
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <Info info={info} />
            </div>
            <div className="col-md-6">
                <Lyric lyric={lyric} />
            </div>
        </div>
    </div>
     );
}
 
export default Search;