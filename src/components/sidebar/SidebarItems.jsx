import { Link, useLocation } from "react-router-dom";
import { Home, Settings, StickyNote } from "lucide-react";
import { SidebarItem } from "./SidebarItem";
import chatList from "../chatList";

const SidebarItems = () => {
  const location = useLocation();

  return (
    <>
      {/* Home link */}
      <Link to="/">
        <SidebarItem icon={<Home size={20} />} text="Home" active={location.pathname === "/"} />
      </Link>

      {/* Chat list */}
      <div className="h-[74vh] overflow-y-auto hover:overflow-y-scroll scrollbar-hide">
        {chatList.map((chat) => (
          <Link key={chat.id} to={`/chat/${chat.id}`}>
            <SidebarItem icon={<StickyNote size={20} />} text={chat.name} active={location.pathname === `/chat/${chat.id}`} />
          </Link>
        ))}
      </div>

      <div className="mt-auto">
        <hr className="my-3" />
        <Link to="/settings">
          <SidebarItem icon={<Settings size={20} />} text="Settings" active={location.pathname === "/settings"} />
        </Link>
      </div>
    </>
  );
};

export default SidebarItems;
