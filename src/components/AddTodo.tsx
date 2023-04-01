import React, { useRef } from "react";

type AddTodoProps = {
  todoAdded: (todoText: string) => void;
};

const AddTodo: React.FC<AddTodoProps> = (props) => {
  // ()でundefined指定することはuseRefはできないので初期値はnull
  const textInputRef = useRef<HTMLInputElement>(null);
  // フォーム内で何かがsubmitされたら、useRefが発火する
  const todoSubmitHandler = (event: React.FormEvent) => {
    // preventDefaultでDOMをレンダーすることを防ぐ。
    // これがないとinputを押した瞬間に再レンダーされ、入力した内容が消えてしまう。
    event.preventDefault();
    // textInputRefの初期値はnullなので、currentに！をつけないとerrorになる
    const enteredText = textInputRef.current!.value;
    // AddTodoProps関数のtodoAddedに入力されたテキストを渡している。
    props.todoAdded(enteredText);
  };

  return (
    <>
      <form onSubmit={todoSubmitHandler}>
        <div>
          <label htmlFor="todo-text">Todo Text</label>
          {/* ref {textInputRef}を追加してレンダーされる場所を明記 */}
          <input type="text" id="todo-text" ref={textInputRef} />
        </div>
        <button type="submit">ADD todo</button>
      </form>
    </>
  );
};

export default AddTodo;
