import { CreateTodoBody, GetTodosResponse, Todo } from "@/types/todos";
import { proxyServer } from "./server-config";

export const getTodos = async (params: any) => {
  const res = await proxyServer.get<GetTodosResponse>("/todos", { params });
  return res.data;
};
export const createTodos = async (newBody: CreateTodoBody) => {
  const res = await proxyServer.post<Todo>("/todos", newBody);
  return res.data;
};

export const deleteTodo = async (id: string) => {
  const res = await proxyServer.delete<Todo>(`/todos/${id}`);
  return res.data;
};
