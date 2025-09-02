//Importiamo hook react 
import { useEffect, useState } from "react";
//importo axios
import axios from 'axios';

function App() {

  //Stato lista attori 
  const [actors, setActors] = useState([]);

  useEffect(() => {
    //richiesta attori
    axios.get('https://lanciweb.github.io/demo/api/actors/').then(res => {
      console.log('Actors:', res.data)
      //Salvo nello stato
      setActors(res.data)
    })
    //eseguo solo al primo caricamento
  }, []);

}

export default App;
