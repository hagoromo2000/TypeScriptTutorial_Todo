import React, { useState } from "react";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import { ToDo } from "./todo.model";

const App: React.FC = () => {
  const [todos, setTodos] = useState<ToDo[]>([]);

  const todoAdd = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: text },
    ]);
  };
  return (
    <div className="App">
      {/* AddTodo.tsxから渡されたテキストデータがここに入る */}
      <AddTodo todoAdded={todoAdd} />
      <Todo items={todos} />
    </div>
  );
};

export default App;
