import CreateTodo from "@/components/CreateTodo/CreateTodo";
import css from "./Page.module.css";
import TodoList from "@/components/TodoList/TodoList";

const Page = () => {
  return (
    <div className={css["page"]}>
      <CreateTodo />
      <TodoList />
    </div>
  );
};

export default Page;
