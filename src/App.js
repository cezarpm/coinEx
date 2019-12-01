import React, {useState, useEffect} from "react";
import axios from "axios";

import Header from "./components/Header/Header";
import CardList from "./components/CardList/CardList";
import "./App.css";

const App = () => {
  const [loadedCoins, setLoadedCoins] = useState([]);

  useEffect(() => {
    const fetchCoins = async () => {
      const response = await axios
        .get(`https://api.coinlore.com/api/ticker/?id=90`)
        .then(data => data.data[0])
        .catch(error => error);

      setLoadedCoins(response);
    };

    fetchCoins();
  });

  return (
    <>
      <Header />
      <main>
        <CardList coins={loadedCoins} />
      </main>
    </>
  );
};

export default App;
