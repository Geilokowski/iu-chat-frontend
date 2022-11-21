import './App.css';
import SignIn from "./routes/sign-in";
import Chat from "./routes/chat";

function App() {
    const at = sessionStorage.getItem("access-token");
    if(at) return (<Chat/>);
    return (<SignIn/>);
}

export default App;
