import { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { FaMicrophone } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FiSend } from "react-icons/fi";
import { CiImageOn } from "react-icons/ci";

const ChatInput = ({ onSendMessage }) => {
    const [message, setMessage] = useState("");
    const [imagePreviews, setImagePreviews] = useState([]);
    const fileInputRef = useRef(null);

    const handleImageChange = (event) => {
        const files = Array.from(event.target.files);
        const newImages = files.slice(0, 3 - imagePreviews.length);

        if (newImages.length > 0) {
            const imagePromises = newImages.map((file) => {
                return new Promise((resolve) => {
                    if (file.type.startsWith("image/")) {
                        const reader = new FileReader();
                        reader.onloadend = () => resolve(reader.result);
                        reader.readAsDataURL(file);
                    }
                });
            });

            Promise.all(imagePromises).then((images) => {
                setImagePreviews((prev) => [...prev, ...images]);
            });
        }

        event.target.value = "";
    };

    const removeImage = (index) => {
        setImagePreviews((prev) => prev.filter((_, i) => i !== index));
    };

    const handleSendMessage = () => {
        if (!message.trim() && imagePreviews.length === 0) return; // Prevent sending empty messages

        onSendMessage(message, imagePreviews); // Pass message and images to parent component
        setMessage(""); // Clear input field
        setImagePreviews([]); // Clear image previews
    };

    return (
        <div className="p-4 flex justify-center items-center bg-gray-800">
            <div className="relative w-full md:w-1/2">

                {/* Display selected images */}
                {imagePreviews.length > 0 && (
                    <div className="absolute -top-16 flex gap-2">
                        {imagePreviews.map((image, index) => (
                            <div key={index} className="relative w-14 h-14">
                                <img src={image} alt="Selected" className="w-full h-full rounded-lg object-cover shadow-sm" />
                                <button
                                    onClick={() => removeImage(index)}
                                    className="absolute -top-2.5 -right-2 bg-gray-200 text-gray-700 w-5 h-5 rounded-full flex items-center justify-center text-md"
                                >
                                    <IoClose />
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                {/* Message Input Field */}
                <Input
                    placeholder="Type a message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full h-14 pl-12 text-white pr-12 bg-gray-700 border-none rounded-xl placeholder:text-gray-400 focus:outline-none"
                />

                {/* Attach Image Icon */}
                <CiImageOn
                    className="absolute left-4 bottom-1/2 translate-y-1/2 w-6 h-6 text-white cursor-pointer"
                    onClick={() => fileInputRef.current.click()}
                />
                <input type="file" ref={fileInputRef} accept="image/*" multiple className="hidden" onChange={handleImageChange} />

                {/* Microphone and Send Icons */}
                <div className="absolute right-4 bottom-1/2 translate-y-1/2 flex items-center gap-3">
                    <FaMicrophone className="w-6 h-6 text-white cursor-pointer" />
                    <FiSend className="w-6 h-6 text-white cursor-pointer" onClick={handleSendMessage} />
                </div>
            </div>
        </div>
    );
};

export default ChatInput;
