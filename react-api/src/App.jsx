//Importiamo hook react
import { useEffect, useState } from "react";
//importo axios
import axios from "axios";

function App() {
  //Stato lista attori
  const [actors, setActors] = useState([]);

  useEffect(() => {
    //richiesta attori
    axios.get("https://lanciweb.github.io/demo/api/actors/").then((res) => {
      console.log("Actors:", res.data);
      //Salvo nello stato
      setActors(res.data);
    });
    //eseguo solo al primo caricamento
  }, []);

  return (
    <div className="container">
      <h1>Actors</h1>
      <div className="row">
        {actors.map((actor, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card">
              {/* Immagine attore */}
              <img
              src={actor.image}
              alt={actor.name}
              />
            </div>
          </div>
        ))}
        <div className="col"></div>
      </div>
    </div>
  )

}

export default App;
