import React from "react";

interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}
const ExpenseList = ({ expenses, onDelete }: Props) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expenses) => (
            <tr key={expenses.id}>
              <td>{expenses.description}</td>
              <td>{expenses.amount}</td>
              <td>{expenses.category}</td>
              <td>
                <button
                  onClick={() => onDelete(expenses.id)}
                  className="bg-black text-white h-10 w-40"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <td>Total</td>
          <td>{expenses.reduce}</td>
          <td>{}</td>
          <td>{}</td>
        </tfoot>
      </table>
    </>
  );
};

export default ExpenseList;
