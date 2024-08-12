import { useEffect, useState } from "react";
import TableCoins from "../modules/TableCoins";

function HomePage() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const options = { method: "GET", headers: { accept: "application/json" } };

    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&x_cg_demo_api_key=CG-ANWjXMCWFzwHACqqhkpaSuX5",
      options
    )
      .then((res) => res.json())
      .then((json) => setCoins(json))
      .catch((err) => console.error(err));
  }, []);
    return <div><TableCoins coins={coins} /></div>;
}

export default HomePage;
