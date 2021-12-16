import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "reactstrap";

import SideBar from './components/Navbar/SideBar'
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import IsPrivate from "./components/Auths/IsPrivate/IsPrivate";
import IsAnon from "./components/Auths/IsAnon/IsAnon"
import Expenses from "./pages/Expenses/Expenses"
import Income from "./pages/Income/Income"
import Investments from "./pages/Investments/Investments"
import ExpenseDetails from "./components/Routes/Expenses/ExpenseDetails";
import EditExpense from './components/Routes/Expenses/EditExpense'
import Charts from './components/Charts/Charts'




function App() {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);


  return (
    <div className="App">

      <div className="App wrapper">
        <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
      </div>

      <Container>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<IsPrivate> <ProfilePage /> </IsPrivate>} />
          <Route path="/signup" element={<IsAnon> <SignupPage /> </IsAnon>} />
          <Route path="/login" element={<IsAnon> <LoginPage /> </IsAnon>} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/income" element={<Income />} />
          <Route path="/investments" element={<Investments />} />
          <Route path="/expenses/details/:expensesId" element={<ExpenseDetails />} />
          <Route path="/expenses/edit/:expensesId" element={<EditExpense />} />
          <Route path="/charts" element={<Charts />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
