import React, { useEffect, useState } from "react";
import api from "../../services/api";
import styles from "./Balance.module.css";

function Balance() {
  const [balance, setBalance] = useState("0");
  const getBalance = () => {
    api.getEtherBalance().then((res) => {
      setBalance(res.data.result / 1000000000000000000);
    });
  };
  useEffect(() => {
    getBalance();
  }, []);
  return (
    <div className={styles.titleContainer}>
      <h2 className={styles.title}>
        Ether Balance: <p className={styles.balanceNum}>{balance}</p>
      </h2>
    </div>
  );
}

export default Balance;
