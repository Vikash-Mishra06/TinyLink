import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CreateLink from "./pages/CreateLink";
import LinkDetails from "./pages/LinkDetails";
import Status from "./pages/Status";

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: "10px", borderBottom: "1px solid #ddd", marginBottom: "20px" }}>
        <Link to="/" style={{ marginRight: "15px" }}>Dashboard</Link>
        <Link to="/create" style={{ marginRight: "15px" }}>Create Link</Link>
        <Link to="/status">Status</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create" element={<CreateLink />} />
        <Route path="/link/:code" element={<LinkDetails />} />
        <Route path="/status" element={<Status />} />
      </Routes>
    </BrowserRouter>
  );
}
