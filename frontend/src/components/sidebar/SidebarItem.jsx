import { useContext } from "react";
import { SidebarContext } from "./Sidebar";

export function SidebarItem({ icon, text, active }) {
  const { expanded } = useContext(SidebarContext);

  return (
    <li
      className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group 
        ${
          active
            ? "bg-gradient-to-tr from-[#4A6E8D] to-[#A4CBE1] text-[#1B3A57]"
            : "hover:bg-[#2C3E50] text-[#F0F0F0]"
        }`}
    >
      {icon}
      <span className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>{text}</span>
    </li>
  );
}
