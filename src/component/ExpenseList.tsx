interface expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expenseLists: expense[];
  onDelete: (data: number) => void;
}
const ExpenseList = ({ expenseLists, onDelete }: Props) => {
  return (
    <div>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {expenseLists.map((expenseList) => {
            return (
              <tr>
                <td>{expenseList.description}</td>
                <td>{expenseList.amount}</td>
                <td>{expenseList.category}</td>
                <td>
                  <button
                    onClick={() => onDelete(expenseList.id)}
                    className="btn btn-primary"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td>Total Amount</td>
            <td>{expenseLists.reduce((acc, item) => item.amount + acc, 0)}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ExpenseList;
