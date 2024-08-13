import React, { useCallback, useEffect, useState } from "react";
import { searchCoin } from "../../services/CryptoApi";

function search({ currency, setCurrency }) {
  const [text, setText] = useState("");
  const [coin, setCoin] = useState([]);

  useEffect(() => {
    //   console.log(text);
    // console.log("object");
    if (!text) return;
    const search = async () => {
      const res = await fetch(searchCoin(text));
      const json = await res.json();
      console.log(json);
      if (json.coins) setCoin(json.coins);
    };
    search();
  }, [text]);

  return (
    <div>
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
    </div>
  );
}

export default search;
