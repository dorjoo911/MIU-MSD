export default function RadioBtn() {
  return (
    <>
      <input type="radio" id="Male" name="fav_language" value="Male" />
      <label for="Male">Male</label>

      <input type="radio" id="Female" name="fav_language" value="Female" />
      <label for="Female">Female</label>

      <input type="radio" id="Other" name="fav_language" value="Other" />
      <label for="Other">Other</label>
    </>
  );
}
