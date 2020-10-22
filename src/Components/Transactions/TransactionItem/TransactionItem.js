import React from "react";
import moment from "moment";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./TransactionItem.module.css";

function TransactionItem({ transactions }) {
  const dateCreator = (date) => {
    const exDate = date * 1000;

    const finalDate = moment(exDate).startOf("minutes").fromNow();

    return finalDate;
  };

  let num = 0;
  return (
    <>
      <Table
        className={styles.table}
        minimal="sm"
        striped
        bordered
        hover
        size="sm"
      >
        <thead>
          <tr>
            <th>#</th>
            <th className={styles.hash}>Txn Hash</th>
            <th className={styles.block}>Block</th>
            <th className={styles.age}>Age</th>
            <th className={styles.from}>From</th>
            <th className={styles.to}>To</th>
            <th className={styles.value}>Value</th>
          </tr>
        </thead>

        <tbody>
          {transactions.length > 0 ? (
            transactions.map((transaction) => {
              num += 1;
              return (
                <tr key={transaction.value}>
                  <td>{num}</td>
                  <td>
                    <p className={styles.hash}>{transaction.blockHash}</p>
                  </td>
                  <td>
                    <p className={styles.block}>{transaction.blockNumber}</p>
                  </td>
                  <td>
                    <p className={styles.age}>
                      {dateCreator(transaction.timeStamp)}
                    </p>
                  </td>
                  <td>
                    <p className={styles.from}>{transaction.from}</p>
                  </td>
                  <td>
                    <p className={styles.to}>{transaction.to}</p>
                  </td>
                  <td>
                    <p className={styles.value}>
                      {transaction.value / 1000000000000000000}
                    </p>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td>1</td>
              <td>No Info</td>
              <td>---</td>
              <td>---</td>
              <td>---</td>
              <td>---</td>
              <td>---</td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
}

export default TransactionItem;
