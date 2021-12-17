import "./App.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//import { Container } from "reactstrap";

import Navbar from './components/Navbar/Navbar'
import HomePage from "./pages/HomePage/HomePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import IsPrivate from "./components/Auths/IsPrivate/IsPrivate";
import IsAnon from "./components/Auths/IsAnon/IsAnon"
import Expenses from "./pages/Expenses/Expenses"
import Income from "./pages/Income/Income"
import EditIncome from "./components/Routes/Income/EditIncome";
import Investments from "./pages/Investments/Investments"
import ExpenseDetails from "./components/Routes/Expenses/ExpenseDetails";
import EditExpense from './components/Routes/Expenses/EditExpense'
import Charts from './components/Charts/Charts'

function App() {
  return (
    <div>

      <div className="App wrapper">
        <Navbar />
      </div>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<IsPrivate> <ProfilePage /> </IsPrivate>} />
          <Route path="/signup" element={<IsAnon> <SignupPage /> </IsAnon>} />
          <Route path="/login" element={<IsAnon> <LoginPage /> </IsAnon>} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/income" element={<Income />} />
          <Route path="/expenses/details/:expensesId" element={<EditIncome />} />
          <Route path="/investments" element={<Investments />} />
          <Route path="/expenses/details/:expensesId" element={<ExpenseDetails />} />
          <Route path="/income/edit/:incomeId" element={<EditExpense />} />
          <Route path="/charts" element={<Charts />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>

    </div>
  );
}

export default App;
