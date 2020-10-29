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
  let text = useInputValue("");
  let email = useInputValue("");

  return (
    <form>
      <input {...text} />
      <input {...email} />
    </form>
  );
};

export default Form;
