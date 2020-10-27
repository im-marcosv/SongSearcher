import React from 'react'

const Info = ({info}) => {
    if(Object.keys(info).length === 0) return null;
    const {strArtistThumb, strGenre, strBiographyEN, strCountry} = info;
    return ( 
        <div className="card border-light">
            <div className="card-header bg-primary text-light font-weight-bold">
                Artist information
            </div>
            <div className="card-body">
                <img src={strArtistThumb} alt="Artist thumb"/>
                <p className="card-text">Genre: {strGenre}</p>
                <p className="card-text">Country: {strCountry}</p>
                <h2 className="card-text">Biography</h2>
                <p className="card-text">{strBiographyEN}</p>
                <p className="card-text">
                    <a href={`https://${info.strFacebook}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href={`https://${info.strTwitter}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href={`${info.strLastFMChart}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-lastfm"></i>
                    </a>
                </p>
            </div>
        </div>
     );
}
 
export default Info;