import AddUser from "./app/components/addUser";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./app/components/home";
import DisplayUsers from "./app/components/displayUsers";
import NavBar from "./app/components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/add-user" element={<AddUser />} />
        <Route exact path="/users" element={<DisplayUsers />} />
      </Routes>
    </Router>
  );
}

export default App;
