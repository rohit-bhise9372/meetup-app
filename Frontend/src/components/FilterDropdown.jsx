
function FilterDropdown({ type, setType }) {
  return (
    <select
      className="form-select"
      value={type}
      onChange={(e) => setType(e.target.value)}
    >
      <option value="Both">Both</option>
      <option value="Online">Online</option>
      <option value="Offline">Offline</option>
    </select>
  );
}

export default FilterDropdown;

