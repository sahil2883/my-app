import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./frontend/Header";
import Home, { todosTypes } from "./frontend/Home";
import Lists from "./frontend/Lists";
import { useState } from "react";
import CompleteTask from "./frontend/CompleteTask";

function App() {
  const [todo, setTodos] = useState<[] | todosTypes[]>([]);

  const onMainHandleChange = (data: todosTypes) => {
    setTodos((prev) => [...prev, data]);
    alert("successfully Added");
  };

  const handleDelete = (id: number) => {
    const data = todo.filter((ele) => ele?.id !== id);
    setTodos(data);
  };

  const onHandleChange = (data:todosTypes):void => {
    
    const datas = todo?.map((ele) => {
      if (ele?.id === data?.id) {
        return data;
      } else {
        return ele;
      }
    });

    setTodos(datas);
  };


  // const handleEdit = (id: number | null) => {
  //   const data = todo?.map((ele)=>{

  //   })
  // };
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home onMainHandleChange={onMainHandleChange} />}
        />
        <Route
          path="/lists"
          element={<Lists todos={todo} handleDelete={handleDelete} onHandleChange={onHandleChange} />}
        />
        <Route
          path="/completeTask"
          element={<CompleteTask todos={todo} handleDelete={handleDelete} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
