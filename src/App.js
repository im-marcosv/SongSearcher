import React,{Fragment, useState, useEffect} from 'react';
import Form from './components/Form';
import Search from './components/Search';
import Spinner from './components/Spinner';
import axios from 'axios';

function App() {
  const [songSearch, saveSongSearch] = useState({});
  const [lyric, saveLyric] = useState('');
  const [error, saveError] = useState(false);
  const [info, saveInfo] = useState({});
  const [loading, isLoading] = useState(false);

  useEffect(() => {
    if(Object.keys(songSearch).length === 0) return;
    const consultAPILyrics= async() => {
      const {artist, song} = songSearch;
      const url= `https://api.lyrics.ovh/v1/${artist}/${song}`;
      const url2= `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
      isLoading(true);
      axios.all([axios.get(url),axios.get(url2)]).then(axios.spread((lyric, info) => {
        setTimeout(() => {
          //Cambiar State de cargando
          isLoading(false);
          saveLyric(lyric.data.lyrics);
          saveInfo(info.data.artists[0]);
        }, 2000);
        
      })).catch(error => {
      saveError(true);
      saveLyric('');
      saveInfo({});
      });
      saveError(false);
      
    };
    consultAPILyrics();
    }, [songSearch] );
    const component = (loading) ? <Spinner /> : <Search info={info} lyric={lyric} />; 
  return (
    <Fragment>
      {error ? <p className="alert alert-danger text-center p2 margin-0">Ooops! Artist or song not found!</p> : null}
      <Form saveSongSearch={saveSongSearch}/>
      {component}
    </Fragment>
  );
}

export default App;
