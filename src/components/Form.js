import React, {useState} from 'react';

const Form = ({saveSongSearch}) => {
    const [search, saveSearch] = useState({
        artist: '',
        song: ''
    });
    const [error, saveError] = useState(false);

    //Función a cada input para leer su contenido
    const updateState = e => {
        saveSearch({
            ...search,
            [e.target.name] : e.target.value
        })
    }

    //Extraer artista y canción
    const {artist, song} = search;

    //Consultar las APIS
    const handleSubmit = e => {
        e.preventDefault();

        //Validar form
        if(song.trim() === '' || artist.trim() === ''){
            saveError(true);
            return;
        }
        saveError(false);

        saveSongSearch(search);

    }

    return ( 
        <div className="bg-info mb-5">
            {error ? <p className="alert alert-danger text-center p2">Oops! All fields are requied! </p> : null}
            <div className="container">
                <div className="row">
                    <form className="col card text-white bg-transparent mb-5 pt-5 pb-2" onSubmit={handleSubmit}>
                        <fieldset>
                            <legend className="text-center">SONG LYRICS AND ARTIST INFORMATION</legend>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="artist">Artist</label>
                                        <input type="text" className="form-control" name="artist" placeholder="Artist name" onChange={updateState} value={artist}/>
                                    </div>
                                </div> 
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="song">Song</label>
                                        <input type="text" className="form-control" name="song" placeholder="Song title" onChange={updateState} value={song}/>
                                    </div>
                                </div> 
                            </div>
                            <button type="submit" className="btn btn-primary float-right">Search</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div> 
    );
}
 
export default Form;