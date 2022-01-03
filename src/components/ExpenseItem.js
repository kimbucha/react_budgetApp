import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2022, 0, 28);
  const expenseTitle = "Car Insurance";
  const expenseAmount = 294.67;
  return (
    <div className="expense-item">
      <div>April 20th 2222</div>
      <div className="expense-item__description">
        <h2>{Swag}</h2>
        <div className="expense-item__price">$69.42</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
