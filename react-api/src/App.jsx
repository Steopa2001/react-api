//Importiamo hook react
import { useEffect, useState } from "react";
//importo axios
import axios from "axios";

import Header from "./components/Header";

function App() {
  // //Stato lista attori
  // const [actors, setActors] = useState([]);
  // //Stato lista attrici
  // const [actresses, setActresses] = useState([]);

  // Stato lista unificata di attori e attrici
  const [allArtists, setAllArtists] = useState([]);

  // Stato per la ricerca
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
let combinedArtists = [];

//Unisco le chiamate ajax in modo che quando cerco l'attore/attrice per nome non mi faccia vedere il doppione
  axios.get("https://lanciweb.github.io/demo/api/actors/")
    .then(res => {
      combinedArtists = [...res.data.map(a => ({ ...a, type: "Actor" }))];
      return axios.get("https://lanciweb.github.io/demo/api/actresses/");
    })
    .then(res => {
      combinedArtists = [...combinedArtists, ...res.data.map(a => ({ ...a, type: "Actress" }))];
      // aggiorno lo stato UNA SOLA VOLTA
      setAllArtists(combinedArtists); 
    })
    //eseguo solo al primo caricamento
  }, []);

  // Filtraggio in base al termine di ricerca
  const filteredArtists = allArtists.filter((artist) =>
    artist.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />
      <div className="container">
        {/* Sezione Attori e Attrici*/}
        <h1 className="text-center mt-4">Actors & Actresses</h1>
        <p className="text-center">Combined list of actors and actresses</p>

        {/* Input ricerca */}
        <div className="mb-4 text-center">
          <input
            type="text"
            placeholder="Cerca il nome dell'attore/attrice..."
            className="form-control w-50 mx-auto"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="row">
          {filteredArtists.map((artist, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card h-100 p-2">
                {/* Nome Attore */}
                <h2 className="text-center text-white">{artist.name}</h2>

                {/* Immagine attore */}
                <img
                  className="img-artist"
                  src={artist.image}
                  alt={artist.name}
                />

                {/* Anno di nascita e nazionalità */}
                <div className="d-flex justify-content-center">
                  <h6 className="me-2 text-white">{artist.birth_year}</h6>
                  <h6 className="text-white">{artist.nationality}</h6>
                </div>
                {/* Biografia */}
                <p className="text-white text-center">{artist.biography}</p>
                {/* Noto per */}
                <div className="text-center text-danger mb-2">
                  <span>
                    <em>
                      <strong>Known for:</strong>
                    </em>
                  </span>
                  <br />
                  <span>
                    <em>{artist.known_for}</em>
                  </span>
                </div>
                {/* Riconoscimenti */}
                <div className="text-center text-warning">
                  <span>
                    <em>
                      <strong>Awards:</strong>
                    </em>
                  </span>
                  <br />
                  <span>
                    <em>{artist.awards}</em>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
