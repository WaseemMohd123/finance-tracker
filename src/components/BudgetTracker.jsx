import React, { useState } from "react";

const BudgetTracker = ({ transactions }) => {
    const [budget, setBudget] = useState(1000);
    const totalSpent = transactions.reduce((acc, t) => acc + t.amount, 0);

    return (
        <div className="card p-3">
            <h5>Budget Tracker</h5>
            <input type="number" className="form-control mb-2" value={budget} onChange={(e) => setBudget(e.target.value)} />
            <p>Spent: ${totalSpent} / Budget: ${budget}</p>
        </div>
    );
};

export default BudgetTracker;
