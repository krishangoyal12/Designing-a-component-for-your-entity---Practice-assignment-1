import UserCard from "./components/usercard.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserCard />} />
      </Routes>
    </>
  );
}

export default App;
