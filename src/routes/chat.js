import useAxios from "../hooks/axios-hook";
import useMessages from "../hooks/message-hook";
import {useCallback, useState} from "react";

const unixToFormattedTime = (unix) => {
    const date = new Date(unix * 1000);
    return date.toLocaleString("de-DE").substring(0, 17);
}

const Chat = () => {
    const axios = useAxios();
    const [messages] = useMessages();
    const [newMessageText, setNewMessageText] = useState("");
    const username = sessionStorage.getItem("username");

    const createMessage = useCallback(() => {
        axios.post("/api/messages", {
            message: newMessageText
        }).then(() => {
            setNewMessageText("");
        });
    }, [axios, newMessageText]);

    const rightOrLeft = (user) => {
        if(user === username)
            return "right";
        return "left";
    }

    return (
        <div className="main">
            <div className="head">
                <div className="title">IU Chat</div>
            </div>
            <div className="chat" id="bubble-section">
                <div className="divider"></div>

                {messages.map(msg => (
                    <div key={msg.id} className={"bubble bubble-" + rightOrLeft(msg.name)}>
                        <div className="hour">{msg.name + " - " + unixToFormattedTime(msg.created)}</div>
                        <div className={"bubble-content bubble-content-" + rightOrLeft(msg.name)}>
                            <p>{msg.message}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="write-section">
                <input className="type-text" id="msgInput" type="text"
                       value={newMessageText} onChange={e => setNewMessageText(e.target.value)}
                       placeholder="Enter your message"/>
                <button className="button" onClick={createMessage}>Send</button>
            </div>
        </div>
    );
}

export default Chat;