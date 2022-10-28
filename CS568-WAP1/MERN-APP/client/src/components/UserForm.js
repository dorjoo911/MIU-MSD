import React from "react";
import TextInput from "./textInput";
import DateInput from "./DateInput";
import Telephone from "./Telephone";
import ColorPicker from "./ColorPicker";
import Range from "./Range";
import Dropdown from "./Dropdown";
import RadioBtn from "./RadioBtn";
import NumberInput from "./NumberInput";

export default function UserForm() {
  return (
    <div className="userForm">
      <h2>User Form</h2>
      <form action="/action_page.php">
        <div>
          <TextInput />
        </div>
        <br></br>
        <div>
          <DateInput />
        </div>
        <br></br>
        <div>
          <Telephone />
        </div>
        <br></br>
        <div>
          <ColorPicker />
        </div>
        <br></br>
        <div>
          <Range />
        </div>
        <br></br>
        <div>
          <Dropdown />
        </div>
        <br></br>
        <div>
          <RadioBtn />
        </div>
        <br></br>
        <div>
          <NumberInput />
        </div>
        <br></br>
        <div>
          <textarea placeholder="any text"></textarea>
        </div>
        <button>Add new User</button>
      </form>
    </div>
  );
}
