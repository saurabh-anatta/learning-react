import Categories from "../Categories";

interface Prop {
  onFilter: (category: string) => void;
}

function ExpenseFilter({ onFilter }: Prop) {
  return (
    <select
      className="form-select"
      onChange={(event) => onFilter(event.target.value)}
    >
      <option value="">All Categories</option>
      {Categories.map((category) => (
        <option value={category}>{category}</option>
      ))}
    </select>
  );
}

export default ExpenseFilter;
