import React from "react";

const Message = ({ text, incoming, image }) => {
    return (
        <div className={`flex ${incoming ? "justify-start" : "justify-end"}`}>
            <div className={`max-w-xs p-3 rounded-lg text-white ${incoming ? "bg-[#4A6E8D]" : "bg-[#1B3A57]"}`}>
                {image && <img src={image} alt="Message Attachment" className="mb-2 rounded-lg max-w-full" />}
                {text && <p>{text}</p>}
            </div>
        </div>
    );
};

export default Message;