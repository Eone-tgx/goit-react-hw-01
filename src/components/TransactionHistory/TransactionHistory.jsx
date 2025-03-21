import css from "./TransactionHistory.module.css";

function TransactionHistory({ items }) {
  return (
    <div className={css.tableWrapper}>
      <table className={css.transactionTable}>
        <thead>
          <tr className={css.tableTitle}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <tr key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionHistory;
