import React from "react";

const ExpenseTracker = () => {
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
          </select>
        </div>
      </form>
    </>
  );
};

export default ExpenseTracker;
