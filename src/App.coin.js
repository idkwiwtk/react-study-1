// coin tracker

import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coin, setCoin] = useState([]);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoin(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>The Coins! ({coin.length})</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coin.map((item, idx) => (
            <option key={idx}>
              {item.name}: ${item.quotes.USD.price}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
