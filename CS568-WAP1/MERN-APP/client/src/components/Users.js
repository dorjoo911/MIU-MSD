// import React from "react";
// import TextInput from "./textInput";
// import DateInput from "./DateInput";
// import Telephone from "./Telephone";
// import ColorPicker from "./ColorPicker";
// import Range from "./Range";
// import Dropdown from "./Dropdown";
// import RadioBtn from "./RadioBtn";
// import NumberInput from "./NumberInput";

export default function Users({
  fname,
  lname,
  dob,
  about,
  education,
  email,
  gender,
  hobbies,
  removeUser,
  id,
}) {
  return (
    <>
      <div>
        <b>{fname}</b>
        <b>{lname}</b>
        <b>{dob}</b>
        <b>{gender} </b>
        <b>{email} </b>
        <b>{education} </b>
        <b>
          {hobbies[0]} {hobbies[1]}
        </b>
        <b>
          <button
            onClick={() => {
              removeUser(id);
            }}
          >
            delete
          </button>
        </b>
      </div>
    </>
  );
}
