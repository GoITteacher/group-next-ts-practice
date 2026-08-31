import { Todo } from "@/types/todos";
import css from "./TodoItem.module.css";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodo } from "@/services/todos";

interface TodoItemProps {
  elem: Todo;
}

const TodoItem = ({ elem }: TodoItemProps) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ["deleteTodos"],
    mutationFn: () => deleteTodo(elem._id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });

  return (
    <div className={css["todoItem"]}>
      <p>{elem.title}</p>
      <button onClick={() => mutate()} type="button">
        x
      </button>
    </div>
  );
};

export default TodoItem;
