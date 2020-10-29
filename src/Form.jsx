import React, { useState } from "react";
const useInputValue = (initialValue) => {
  const [value, setValue] = useState("");
  return {
    value,
    onChange: (e) => setValue(e.target.value),
    resetValue: () => setValue(""),
  };
};

const Form = ({ onSubmit }) => {
  //   const [value, setValue] = useState("");
  //   return <input value={value} onChange={(e) => setValue(e.target.value)} />;
  let { resetValue, ...text } = useInputValue("");
  // let email = useInputValue("")

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(text.value);
        resetValue();
      }}
    >
      <input {...text} />
      {/* <input {...email} /> */}
    </form>
  );
};

export default Form;
