import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import SidebarItems from "./components/sidebar/SidebarItems";
import ChatField from "./components/ChatField";
import Settings from "./components/Settings";
import HomePage from "./components/HomePage";

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar>
          <SidebarItems />
        </Sidebar>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chat/:id" element={<ChatField />} />
          <Route path="/settings" element={<Settings/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
