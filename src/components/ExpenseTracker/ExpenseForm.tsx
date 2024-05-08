import React from "react";
import { categories } from "../../App";

const ExpenseForm = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">this is a form</h1>
      <form action="">
        <div>
          <label htmlFor="description" className="">
            Description
          </label>
          <input id="description" type="text" className="" />
        </div>

        <div>
          <label htmlFor="description" className="">
            Amount
          </label>
          <input id="amount" type="number" className="" />
        </div>

        <div>
          <label htmlFor="category" className="">
            Category
          </label>
          <select name="" id="category" className="">
            <option value=""></option>
            {categories.map((category) => (
              <option key={category} value={category}></option>
            ))}
          </select>
        </div>
        <button className="h-10 w-40 bg-green-400 text-white rounded-lg">
          Submit
        </button>
      </form>
    </>
  );
};

export default ExpenseForm;
