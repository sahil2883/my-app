import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./frontend/Header";
import Home, { todosTypes } from "./frontend/Home";
import Lists from "./frontend/Lists";
import { useState } from "react";

function App() {
  const [todo, setTodos] = useState<[]|todosTypes[]>([]);

  const onMainHandleChange = (data: todosTypes) => {
    setTodos((prev) => [...prev, data]);
    alert("successfully Added");
  };
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home onMainHandleChange={onMainHandleChange} />}
        />
        <Route path="/lists" element={<Lists  todos={todo}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
