import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";


const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Rent",
      amount: 553,
      date: new Date(2022, 0, 3),
    },
    { id: "e2", title: "Phone Plan", amount: 50, date: new Date(2022, 0, 3) },
    {
      id: "e3",
      title: "Prescription",
      amount: 30,
      date: new Date(2022, 0, 4),
    },
    {
      id: "e4",
      title: "Electricity",
      amount: 63.13,
      date: new Date(2022, 0, 11),
    },
  ];

  return (
  

    <div>
      <NewExpense/>

      <Expenses items = {expenses}/>

    </div>
  );
}

export default App;
