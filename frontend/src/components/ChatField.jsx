import ChatHeader from "./chat/ChatHeader";
import ChatMessages from "./chat/ChatMessages";
import ChatInput from "./chat/ChatInput";

const ChatField = () => {
    return (
        <div className="flex flex-col w-full h-full overflow-hidden bg-[#2C3E50]">
            <ChatHeader />
            <ChatMessages />
            {/* <ChatInput /> */}
        </div>
    );
};

export default ChatField;
