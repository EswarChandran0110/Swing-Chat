import "./App.css";
import { Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ChatPage from "./Pages/ChatPage";

function App() {
  return (
    <div className="App">
      <Route path="/" exact={true} component={HomePage} />
      <Route path="/chats" exact={true} component={ChatPage} />
    </div>
  );
}

export default App;
