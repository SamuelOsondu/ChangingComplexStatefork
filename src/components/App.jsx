import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });

  function fullNameHandler(event) {
    console.log(event.target);
    const { value, name } = event.target;
    setFullName((preValue) => {
      if (name === "fName") {
        return { fName: value, lName: preValue.lName };
      } else if (name === "lName") {
        return { fName: preValue.fName, lName: value };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          onChange={fullNameHandler}
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          name="lName"
          onChange={fullNameHandler}
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button type="Submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
