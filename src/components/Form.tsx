import { useForm } from "react-hook-form";
const Form = () => {
  const { register, handleSubmit } = useForm();
  // const onSubmit = data => console.log(data)
  // const nameRef = useRef<HTMLInputElement>(null);
  // const ageRef = useRef<HTMLInputElement>(null);
  // const person = { name: "", age: 0 };
  // const handleSubmit = (event: FormEvent) => {
  //   event.preventDefault();
  //   if (nameRef.current !== null) person.name = nameRef.current.value;
  //   if (ageRef.current !== null) person.age = parseInt(ageRef.current.value);
  //   console.log(person);
  // };
  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <div className="mb-3 flex flex-col">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          // ref={nameRef}
          {...register("name")}
          id="name"
          type="text"
          className="control border-2"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="age">Age</label>
        <input
          // ref={ageRef}
          {...register("age")}
          id="age"
          type="number"
          className="control border-2"
        />
      </div>
      <button className="button bg-green-600 h-10 w-40 rounded-lg text-white">
        Submit
      </button>
    </form>
  );
};

export default Form;
