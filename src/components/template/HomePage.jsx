import { useEffect, useState } from "react";
import TableCoins from "../modules/TableCoins";
import { getCoinList } from "../../services/CryptoApi";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // const options = { method: "GET", headers: { accept: "application/json" } };
    // fetch(getCoinList(), options)
    //   .then((res) => res.json())
    //   .then((json) => setCoins(json))
    //   .catch((err) => console.error(err));

    const getData = async () => {
      const res = await fetch(getCoinList());
      const json = await res.json();
      setCoins(json);
      setIsLoading(false)
    };
    getData();
  }, []);
  return (
    <div>
      <TableCoins coins={coins} isLoading={isLoading} />
    </div>
  );
}

export default HomePage;
