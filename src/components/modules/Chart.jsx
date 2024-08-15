import React, { useState } from "react";
import styles from "./Chart.module.css";
// import ResponsiveContainer, { LineChart } from 'recharts';

import { ConvertData } from "../helpers/ConvertData";

function Chart({ chart, setChart }) {
  const [type, setType] = useState("market_caps");
  console.log(ConvertData(chart, type));
  return (
    <div className={styles.container}>
      <span className={styles.cross} onClick={() => setChart(null)}>
        X
      </span>
      <div className={styles.chart}>
        <div className={styles.graph}>
          {/* <ResponsiveContainer width="100%" height="100%">
            <LineChart width={400} height={400} data={ConvertData(chart, type)}>
              <CartesianGrid stroke="#404042" />
            </LineChart>
          </ResponsiveContainer> */}
        </div>
      </div>
    </div>
  );
}

export default Chart;
