import "./App.css";
import "./components/Header";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpensives } from "./components/IncomeExpensives";
import { TransactionList } from "./components/transactionList";
import { AddTransaction } from "./components/AddTransaction";

import { GlobalProvider } from "./context/GlobalState";


function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpensives />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
