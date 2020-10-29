import React, { useState } from "react";
const useInputValue = (initialValue) => {
  const [value, setValue] = useState("");
  return {
    value,
    onChange: (e) => setValue(e.target.value),
  };
};

const Form = ({ onSubmit }) => {
  //   const [value, setValue] = useState("");
  //   return <input value={value} onChange={(e) => setValue(e.target.value)} />;
  let text = useInputValue("");
  // let email = useInputValue("")

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(text.value);
      }}
    >
      <input {...text} />
      {/* <input {...email} /> */}
    </form>
  );
};

export default Form;
