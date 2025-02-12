import React from "react";
import { CSVLink } from "react-csv";

const ExportCSV = ({ transactions }) => {
    const headers = [{ label: "Date", key: "date" }, { label: "Description", key: "desc" }, { label: "Amount", key: "amount" }, { label: "Category", key: "category" }];
    return <CSVLink className="btn btn-success mt-2" data={transactions} headers={headers} filename="transactions.csv">Export CSV</CSVLink>;
};

export default ExportCSV;
