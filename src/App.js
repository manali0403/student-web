import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { DashboardPage } from "./pages/DashboardPage";
import { ApiPage } from "./pages/ApiPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/dashboard" exact element={<DashboardPage />} />
        <Route path="/api" exact element={<ApiPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
