import React, { useCallback, useEffect, useState } from "react";
import { searchCoin } from "../../services/CryptoApi";
import { RotatingLines } from "react-loader-spinner";
import styles from "./Search.module.css";

function search({ currency, setCurrency }) {
  const [text, setText] = useState("");
  const [coin, setCoin] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setCoin([]);
    if (!text) {
      setIsLoading(false)
      return
    };
    const search = async () => {
      try {
        const res = await fetch(searchCoin(text), {
          signal: controller.signal,
        });
        const json = await res.json();
        console.log(json);
        if (json.coins) {
          setIsLoading(false);
          setCoin(json.coins);
        } else {
          alert(json.status.error_message);
        }
      } catch (error) {
        if (error.name !== "AbortError") alert(error.message);
      }
    };
    setIsLoading(true);
    search();

    return () => controller.abort();
  }, [text]);

  return (
    <div className={styles.searchBox}>
      <input
        type="text"
        placeholder="Search"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="jpy">JPY</option>
      </select>
      <div className={styles.searchResult}>
        {isLoading && (
          <RotatingLines
            width="50px"
            height="50px"
            strokeWidth="2"
            strokeColor="#3874ff"
          />
        )}
        <ul>
          {coin.map((coin) => (
            <li key={coin.id}>
              <img src={coin.thumb} alt={coin.name} />
              <p>{coin.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default search;
