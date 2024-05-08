import React from "react";

import { categories } from "../../App";

interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <select
      className=""
      onChange={(event) => onSelectCategory(event?.target.value)}
    >
      <option value="">All categories</option>
      {categories.map((category) => (
        <option key={category} value={category}></option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
