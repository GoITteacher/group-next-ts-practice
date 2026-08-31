"use client";
import css from "./CreateTodo.module.css";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTodos } from "@/services/todos";
import { CreateTodoBody } from "@/types/todos";

const CreateTodo = () => {
  const queryClient = useQueryClient();

  const todosMutation = useMutation({
    mutationKey: ["CreateTodos"],
    mutationFn: (body: CreateTodoBody) => createTodos(body),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
    onError: () => {},
  });

  const handleSubmit = async (formData: FormData) => {
    const todo = {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
    };
    todosMutation.mutate(todo);
  };

  return (
    <div className={css["createTodo"]}>
      <form action={handleSubmit}>
        <input type="text" name="title" placeholder="Title" />
        <input type="text" name="description" placeholder="Description?" />

        <button type="submit">Add Todos</button>
      </form>
    </div>
  );
};

export default CreateTodo;
