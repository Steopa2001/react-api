//Importiamo hook react
import { useEffect, useState } from "react";
//importo axios
import axios from "axios";

import Header from "./components/Header";

function App() {
  //Stato lista attori
  const [actors, setActors] = useState([]);
  //Stato lista attrici
  const [actresses, setActresses] = useState([]);

  useEffect(() => {
    //richiesta attori
    axios.get("https://lanciweb.github.io/demo/api/actors/").then((res) => {
      console.log("Actors:", res.data);
      //Salvo nello stato
      setActors(res.data);
    });
    //richiesta attrici
    axios.get("https://lanciweb.github.io/demo/api/actresses/").then((res) => {
      console.log("Actresses:", res.data);
      //Salvo nello stato
      setActresses(res.data);
    });
    //eseguo solo al primo caricamento
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        {/* Sezione Attori */}
        <h1 className="text-center mt-4">Actors</h1>
        <p className="text-center">List of actors fetched from an API</p>
        <div className="row">
          {actors.map((actor, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card h-100 p-2">
                {/* Nome Attore */}
                <h2 className="text-center text-white">{actor.name}</h2>

                {/* Immagine attore */}
                <img className="img-actor" src={actor.image} alt={actor.name} />

                {/* Anno di nascita e nazionalità */}
                <div className="d-flex justify-content-center">
                  <h6 className="me-2 text-white">{actor.birth_year}</h6>
                  <h6 className="text-white">{actor.nationality}</h6>
                </div>
                {/* Biografia */}
                <p className="text-white text-center">{actor.biography}</p>
                {/* Noto per */}
                <div className="text-center text-danger mb-2">
                  <span>
                    <em>
                      <strong>Known for:</strong>
                    </em>
                  </span>
                  <br />
                  <span>
                    <em>{actor.known_for}</em>
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
                    <em>{actor.awards}</em>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sezione Attrici */}
        <h1 className="text-center mt-4">Actresses</h1>
        <p className="text-center">List of actors fetched from an API</p>
        <div className="row">
          {actresses.map((actress, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card h-100 p-2">
                {/* Nome Attore */}
                <h2 className="text-center text-white">{actress.name}</h2>

                {/* Immagine attore */}
                <img className="img-actress" src={actress.image} alt={actress.name} />

                {/* Anno di nascita e nazionalità */}
                <div className="d-flex justify-content-center">
                  <h6 className="me-2 text-white">{actress.birth_year}</h6>
                  <h6 className="text-white">{actress.nationality}</h6>
                </div>
                {/* Biografia */}
                <p className="text-white text-center">{actress.biography}</p>
                {/* Noto per */}
                <div className="text-center text-danger mb-2">
                  <span>
                    <em>
                      <strong>Known for:</strong>
                    </em>
                  </span>
                  <br />
                  <span>
                    <em>{actress.known_for}</em>
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
                    <em>{actress.awards}</em>
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
