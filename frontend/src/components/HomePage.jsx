import React from "react";
import { IoChatbubblesOutline } from "react-icons/io5";
import ChatInput from "./chat/ChatInput";
import ChatHeader from "./chat/ChatHeader";

const HomePage = () => {

    return (
        <div className="flex flex-col w-full h-full overflow-hidden bg-[#2C3E50]">
            {/* Header */}
            <ChatHeader/>

            {/* Hero Section */}
            <div className="flex flex-col items-center text-center mt-20 mb-20 space-y-4">
                <IoChatbubblesOutline className="w-24 h-24 text-[#F0F0F0]" />
                <h2 className="text-xl font-semibold">Start a Conversation</h2>
                <p className="text-gray-300">Chat seamlessly with our AI and share images with ease.</p>
            </div>

            {/* Input Field */}
            <ChatInput/>

        </div>
    );
};

export default HomePage;
