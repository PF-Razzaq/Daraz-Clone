import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import SignUp from "./Pages/SignUp/SignUp";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignUp />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
