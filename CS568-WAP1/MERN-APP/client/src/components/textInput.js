import { useRef } from "react";
export default function TextInput({ removeUser, id }) {
  const { fnameInput, lnameInput } = useRef(null);

  return (
    <>
      <label>Firstname: </label>
      <input
        type="text"
        ref={fnameInput}
        placeholder={"John"}
        required={true}
      />
      <br />
      <label>Lastname: </label>
      <input type="text" ref={lnameInput} placeholder={"Doe"} required={true} />
    </>
  );
}
