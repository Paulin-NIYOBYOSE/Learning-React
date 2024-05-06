const Form = () => {
  return (
    <form>
      <div className="mb-3 flex flex-col">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input id="name" type="text" className="control border-2" />
      </div>
    </form>
  );
};

export default Form;
