import React, { useState } from "react";
import styles from "./Chart.module.css";
import { ConvertData } from "../helpers/ConvertData";

function Chart({ chart, setChart }) {
  const [type, setType] = useState("market_caps")
  console.log(ConvertData(chart, type));
  return (
    <div className={styles.container}>
      <span className={styles.cross} onClick={() => setChart(null)}>
        X
      </span>
      <div className={styles.chart}></div>
    </div>
  );
}

export default Chart;
