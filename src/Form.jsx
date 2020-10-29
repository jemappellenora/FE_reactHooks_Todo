import React, { useState } from "react";
const useInputValue = (initialValue) => {
  const [value, setValue] = useState("");
  return {
    value,
    onChange: (e) => setValue(e.target.value),
  };
};

const Form = () => {
  //   const [value, setValue] = useState("");
  //   return <input value={value} onChange={(e) => setValue(e.target.value)} />;
  let name = useInputValue("");
  let email = useInputValue("");
  let number = useInputValue("");

  return (
    <form>
      <input {...name} />
      <input {...email} />
      <input {...number} />
    </form>
  );
};

export default Form;