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

  useEffect(() => {
    //richiesta attori
    axios.get("https://lanciweb.github.io/demo/api/actors/").then((res) => {
      console.log("Actors:", res.data);
      // //Salvo nello stato
      // setActors(res.data);

      // Aggiungo gli attori allo stato
        setAllArtists(prev => [...prev, ...res.data]);
    });
    //richiesta attrici
    axios.get("https://lanciweb.github.io/demo/api/actresses/").then((res) => {
      console.log("Actresses:", res.data);
      // //Salvo nello stato
      // setActresses(res.data);

      // Aggiungo le attrici allo stato
        setAllArtists(prev => [...prev, ...res.data]);
    });
    //eseguo solo al primo caricamento
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        {/* Sezione Attori e Attrici*/}
        <h1 className="text-center mt-4">Actors & Actresses</h1>
        <p className="text-center">Combined list of actors and actresses</p>
        <div className="row">
          {allArtists.map((artist, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card h-100 p-2">
                {/* Nome Attore */}
                <h2 className="text-center text-white">{artist.name}</h2>

                {/* Immagine attore */}
                <img className="img-artist" src={artist.image} alt={artist.name} />

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
