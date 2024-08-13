import React from "react";
import chartUp from "../../assets/chart-up.svg";
import chartDown from "../../assets/chart-down.svg";
import { RotatingLines } from "react-loader-spinner";

function TableCoins({ coins, isLoading }) {
  console.log(coins);
  return (
    <div>
      {isLoading ? (
        <RotatingLines strokeColor="#3874ff" strokeWidth="2" />
      ) : (
        <table>
          <thead>
            <tr>
              <th>coin</th>
              <th>Name</th>
              <th>Price</th>
              <th>24H</th>
              <th>Total Volume</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <TableRow coin={coin} key={coin.id} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TableCoins;

const TableRow = ({
  coin: {
    image,
    name,
    symbol,
    total_volume,
    price_change_percentage_24h,
    current_price,
  },
}) => {
  return (
    <tr>
      <td>
        <div>
          <img src={image} alt="" />
          <span>{symbol.toUpperCase()}</span>
        </div>
      </td>
      <td>{name}</td>
      <td>{current_price.toLocaleString()}</td>
      <td>{price_change_percentage_24h.toFixed(2)}%</td>
      <td>{total_volume.toLocaleString()}</td>
      <td>
        <img
          src={price_change_percentage_24h > 0 ? chartUp : chartDown}
          alt={name}
        />
      </td>
    </tr>
  );
};
