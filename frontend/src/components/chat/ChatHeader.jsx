import { IoShareOutline } from "react-icons/io5";
import profile from "../../assets/user.png";

const ChatHeader = () => {
    return (
        <div className="flex items-center justify-end gap-5 p-4">
            <IoShareOutline className="w-6 h-6 text-gray-400 cursor-pointer" />
            <div className="flex items-center gap-2">
                <img src={profile} alt="User" className="w-9 h-9 rounded-full" />
            </div>
        </div>
    );
};

export default ChatHeader;
