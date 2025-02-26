import { ChevronFirst, ChevronLast } from "lucide-react";
import logo from "../../assets/logo.png";
import { createContext, useState, useEffect } from "react";

export const SidebarContext = createContext();

export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(() => {
    return localStorage.getItem("sidebarExpanded") === "false" ? false : true;
  });

  useEffect(() => {
    localStorage.setItem("sidebarExpanded", expanded);
  }, [expanded]);

  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-[#1B3A57]">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img src={logo} className={`overflow-hidden transition-all ${expanded ? "w-8" : "w-0"}`} />
          <button 
            onClick={() => setExpanded((curr) => !curr)} 
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>
      </nav>
    </aside>
  );
}
