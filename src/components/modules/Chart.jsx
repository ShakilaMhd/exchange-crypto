import React from "react";
import styles from "./Chart.module.css";

function Chart({ Chart, setChart }) {
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
