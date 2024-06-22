//import "./App.css";
import Form from "./component/Form";
import { useState } from "react";
import ExpenseList from "./component/ExpenseList";
import ExpenseFilter from "./component/ExpenseFilter";

interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}
let expenses: Expense[] = [
  {
    id: 1,
    description: "test description",
    amount: 10,
    category: "Grocery",
  },
  {
    id: 2,
    description: "test description",
    amount: 20,
    category: "Grocery",
  },
  {
    id: 3,
    description: "test description",
    amount: 15,
    category: "Utilities",
  },
  {
    id: 4,
    description: "test description",
    amount: 5,
    category: "Utilities",
  },
  {
    id: 5,
    description: "test description",
    amount: 50,
    category: "Other",
  },
];

function App() {
  const [expenseLists, saveExpenseList] = useState(expenses);
  const [selectedCategory, saveSelectedCategory] = useState("");
  const updateExpenseList = (data: {
    description: string;
    amount: number;
    category: string;
  }) => {
    saveExpenseList([
      ...expenseLists,
      { ...data, id: expenseLists.length + 1 },
    ]);
  };

  const visibleExpensesLists = selectedCategory
    ? expenseLists.filter((expense) => expense.category == selectedCategory)
    : expenseLists;

  return (
    <div className="Container">
      <div className="m-5">
        <Form updateExpenseList={updateExpenseList} />
      </div>
      <div className="m-5">
        <ExpenseFilter
          onFilter={(category) => saveSelectedCategory(category)}
        />
      </div>
      <div className="m-5">
        <ExpenseList
          onDelete={(categoryId) =>
            saveExpenseList(
              expenseLists.filter((list) => list.id !== categoryId)
            )
          }
          expenseLists={visibleExpensesLists}
        />
      </div>
    </div>
  );
}

export default App;
