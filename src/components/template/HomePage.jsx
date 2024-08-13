import { useEffect, useState } from "react";
import TableCoins from "../modules/TableCoins";
import { getCoinList } from "../../services/CryptoApi";
import Pagination from "../modules/Pagination";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    // const options = { method: "GET", headers: { accept: "application/json" } };
    // fetch(getCoinList(), options)
    //   .then((res) => res.json())
    //   .then((json) => setCoins(json))
    //   .catch((err) => console.error(err));

    const getData = async () => {
      const res = await fetch(getCoinList(page));
      const json = await res.json();
      setCoins(json);
      setIsLoading(false);
    };
    getData();
  }, [page]);
  return (
    <div>
      <Pagination page={page} setPage={setPage} />
      <TableCoins coins={coins} isLoading={isLoading} />
    </div>
  );
}

export default HomePage;
