import { ScrollArea } from "@/components/ui/scroll-area";
import Message from "../messages/Message";

const ChatMessages = () => {
    return (
        <ScrollArea className="flex-1 p-4 overflow-y-auto">
            <div className="w-full md:w-1/2 mx-auto space-y-4">
                <Message text="Hello! How are you?" incoming={true} />
                <Message text="I'm good! How about you?" incoming={false} />
                <Message text="" incoming={true} image="https://plus.unsplash.com/premium_photo-1686729237226-0f2edb1e8970?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbHBhcGVyfGVufDB8fDB8fHww" />
                <Message text="Check this out!" incoming={true} image="https://plus.unsplash.com/premium_photo-1686729237226-0f2edb1e8970?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbHBhcGVyfGVufDB8fDB8fHww" />
            </div>
        </ScrollArea>
    );
};

export default ChatMessages;
