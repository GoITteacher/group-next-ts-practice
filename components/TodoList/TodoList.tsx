"use client";
import { useQuery } from "@tanstack/react-query";
import css from "./TodoList.module.css";
import { getTodos } from "@/services/todos";
import TodoItem from "./TodoItem/TodoItem";

const TodoList = () => {
  const queryTodos = useQuery({
    queryKey: ["todos"],
    queryFn: () => getTodos({}),
  });
  const items = queryTodos.data?.todos || [];

  return (
    <div className={css["todoList"]}>
      <h2>Todos list:</h2>
      <ul>
        {items.map((el) => {
          return (
            <li key={el._id}>
              <TodoItem elem={el} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
