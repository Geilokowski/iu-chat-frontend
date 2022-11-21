import {useEffect, useState} from "react";
import {onSnapshot, orderBy, query} from "firebase/firestore";
import {messageCollection} from "../config/firebase-config";
const q = query(messageCollection, orderBy("created"));

const useMessages = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => onSnapshot(q, (snapshot) => {
        setMessages(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})));
    }), []);

    return [messages];
}

export default useMessages;