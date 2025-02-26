import { useState } from "react";
import ChatInput from "./ChatInput";

const ChatComponent = () => {
    const [messages, setMessages] = useState([]);

    const handleSendMessage = async (message, images) => {
        const newMessage = { text: message, sender: "user" };
        setMessages((prev) => [...prev, newMessage]); // Add user message to chat

        try {
            const response = await fetch("http://localhost:5000/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ text: message, images }),
            });

            const data = await response.json();
            setMessages((prev) => [...prev, { text: data.reply, sender: "bot" }]); // Add bot response
        } catch (error) {
            console.error("Error sending message:", error);
            setMessages((prev) => [...prev, { text: "Error generating response", sender: "bot" }]);
        }
    };

    return (
        <div className="flex flex-col w-full h-screen bg-gray-900 text-white">
            {/* Chat messages container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-[calc(100vh-150px)]">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                        <div
                            className={`p-3 rounded-lg max-w-xs md:max-w-md lg:max-w-lg ${
                                msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-700 text-white"
                            }`}
                        >
                            {msg.text}
                        </div>
                    </div>
                ))}
            </div>

            {/* Chat input component */}
            <ChatInput onSendMessage={handleSendMessage} />
        </div>
    );
};

export default ChatComponent;
