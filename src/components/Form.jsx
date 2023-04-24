import React, { useState, useEffect } from 'react';

function TableList() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/db.json');
      const data = await response.json();
      setTransactions((prevTransactions) => {
        return [...data.transactions, ...prevTransactions];
      });
    };
    fetchData();
  }, []);

  return (
    <div>
      <table className='table'>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableList;