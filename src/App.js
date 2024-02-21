import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { DashboardPage } from "./pages/DashboardPage";
import { ApiPage } from "./pages/ApiPage";
import { ManualTradingPage } from "./pages/ManualTradingPage";
import MembershipPage from "./pages/MembershipPage";
import AnotherMembershipPage from "./pages/AnotherMembershipPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/dashboard" exact element={<DashboardPage />} />
        <Route path="/api" exact element={<ApiPage />} />
        <Route path="manual-trade" exact element={<ManualTradingPage />} />
        <Route path="/memberships" exact element={<MembershipPage />} />
        <Route path="/memberships/mt4-and-mt5" exact element={<AnotherMembershipPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
