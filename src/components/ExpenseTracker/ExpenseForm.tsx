import { categories } from "../../App";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  description: z.string().min(3),
  amount: z.number().min(18),
});

type FormData = z.infer<typeof schema>;

const ExpenseForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  return (
    <>
      <h1 className="text-3xl font-bold underline">this is a form</h1>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <div>
          <label htmlFor="description" className="">
            Description
          </label>
          <input
            id="description"
            type="text"
            className=""
            {...register("description")}
          />
          {errors.description && <p>{errors.description.message}</p>}
        </div>

        <div>
          <label htmlFor="description" className="">
            Amount
          </label>
          <input
            {...register("amount")}
            id="amount"
            type="number"
            className=""
          />
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
