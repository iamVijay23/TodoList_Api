import { useState } from "react";

const Form = (props) => {
  const [inputValue, setInputValue] = useState(""); // Use state to manage the input value

  // Handling the form submit 
  const handleSubmit = (e) => {
    e.preventDefault();
    // condition to check the input have some value 
    if (inputValue != "") {
      props.onFormSubmit(inputValue);
      setInputValue(""); // Clear the input field by updating the state

    }
    else{
      alert("Please Add something")
    }
  };
  
  const handleInputChange = (e) => {
    setInputValue(e.target.value); // Update the inputValue state as the user types
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          placeholder="Write Something Here..."
          value={inputValue} // Bind the input field's value to the state
          onChange={handleInputChange} // Handle input changes
        />
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
