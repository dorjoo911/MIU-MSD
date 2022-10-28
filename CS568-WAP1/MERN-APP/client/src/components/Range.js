export default function Range() {
  return (
    <>
      <label for="vol">Volume (between 0 and 50):</label>
      <input type="range" id="vol" name="vol" min="0" max="50" />
      {/* <input type="submit" value="Submit" /> */}
    </>
  );
}
