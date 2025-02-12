import React, { useState } from "react";

const TransactionForm = ({ addTransaction }) => {
    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!desc || !amount || !category) return;
        addTransaction({ desc, amount: parseFloat(amount), category, date: new Date().toLocaleDateString() });
        setDesc("");
        setAmount("");
        setCategory("");
    };

    return (
        <div className="card p-3 mb-3">
            <h5>Add Transaction</h5>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Description" className="form-control mb-2" value={desc} onChange={(e) => setDesc(e.target.value)} />
                <input type="number" placeholder="Amount" className="form-control mb-2" value={amount} onChange={(e) => setAmount(e.target.value)} />
                <select className="form-control mb-2" value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Select Category</option>
                    <option value="Food">Food</option>
                    <option value="Transport">Transport</option>
                    <option value="Rent">Rent</option>
                </select>
                <button className="btn btn-primary w-100">Add</button>
            </form>
        </div>
    );
};

export default TransactionForm;
