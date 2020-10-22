import React, { useEffect, useState } from "react";
import api from "../../services/api";
import TransactionItem from "./TransactionItem/TransactionItem";
import styles from "./Transactions.module.css";

function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [transactionType, setTransactionType] = useState("");
  useEffect(() => {
    if (transactionType === "Transactions") {
      api.getListNormalTransaction().then((res) => {
        setTransactions([...res.data.result]);
      });
    }
    if (transactionType === "Internal") {
      api.getInternalTransactions().then((res) => {
        setTransactions([...res.data.result]);
      });
    }
    if (transactionType === "Token") {
      api.getErcToken().then((res) => {
        setTransactions([...res.data.result]);
      });
    }
  }, [transactionType]);

  const showTransactionsFn = () => {
    setTransactionType("Transactions");
  };

  const showInternalFn = () => {
    setTransactionType("Internal");
  };

  const shoTokenFn = () => {
    setTransactionType("Token");
  };
  return (
    <div>
      <ul className={styles.container}>
        <li>
          <button className={styles.button} onClick={showTransactionsFn}>
            Transactions
          </button>
        </li>
        <li>
          <button className={styles.button} onClick={showInternalFn}>
            Internal Txns
          </button>
        </li>
        <li>
          <button className={styles.button} onClick={shoTokenFn}>
            ERC20 Token Txns
          </button>
        </li>
      </ul>
      <div className={styles.tableContainer}>
        {<TransactionItem transactions={transactions} />}
      </div>
    </div>
  );
}

export default Transactions;
