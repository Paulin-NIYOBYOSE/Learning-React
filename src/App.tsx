// import Form from "./components/Form";
import ExpenseList from "./components/ExpenseTracker/ExpenseList";
import ExpenseTracker from "./components/ExpenseTracker/ExpenseForm";
import { useState } from "react";
import ExpenseFilter from "./components/ExpenseTracker/ExpenseFilter";
function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "aaa", amount: 10, category: "Utilities" },
    { id: 3, description: "aaa", amount: 10, category: "Utilities" },
    { id: 4, description: "aaa", amount: 10, category: "Groceries" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <>
      {/* <Form /> */}
      <ExpenseTracker />
      <ExpenseFilter
        onSelectCategory={(category) => setSelectedCategory(category)}
      />
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </>
  );
}

export default App;
