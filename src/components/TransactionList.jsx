import React from "react";

const TransactionList = ({ transactions }) => {
    return (
        <div className="card p-3">
            <h5>Transaction History</h5>
            <ul className="list-group">
                {transactions.map((t, index) => (
                    <li key={index} className="list-group-item">
                        {t.date} - {t.desc} | ${t.amount} | {t.category}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TransactionList;
