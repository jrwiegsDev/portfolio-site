// Hidden field that only bots fill in. Kept off-screen (rather than display: none,
// which many bots skip) and hidden from screen readers and keyboard navigation.
function HoneypotField({ value, onChange }) {
  return (
    <div className="form-honeypot" aria-hidden="true">
      <label htmlFor="website">Leave this field empty</label>
      <input
        type="text"
        id="website"
        name="website"
        value={value}
        onChange={onChange}
        tabIndex={-1}
        autoComplete="off"
      />
    </div>
  );
}

export default HoneypotField;
