export default function Telephone() {
  return (
    <>
      <label for="phone">Enter a phone number:</label>
      <br></br>
      <input
        type="tel"
        id="phone"
        name="phone"
        placeholder="123-45-678"
        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        required
      />
      <br></br>
      <small>Format: 123-45-678</small>
      <br></br>
      {/* <input type="submit" value="Submit" /> */}
    </>
  );
}
