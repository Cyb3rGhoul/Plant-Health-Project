import { IoShareOutline } from "react-icons/io5";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import profile from "../../assets/user.png";

const ChatHeader = () => {
    return (
        <div className="flex items-center justify-end gap-5 p-4">
            <IoShareOutline className="w-6 h-6 text-gray-400 cursor-pointer" />

            <SignedIn>
                <UserButton 
                    redirectUrl="/" 
                    appearance={{
                        elements: {
                            avatarBox: "w-9 h-9",
                        },
                    }}
                />
            </SignedIn>

            <SignedOut>
                <SignInButton mode="modal" afterSignInUrl="/" afterSignUpUrl="/">
                    <img 
                        src={profile} 
                        alt="User" 
                        className="w-9 h-9 rounded-full cursor-pointer"
                    />
                </SignInButton>
            </SignedOut>
        </div>
    );
};

export default ChatHeader;
