import { serverApi } from "@/types/serverApi";
import { GetStudentsResponse, Student } from "@/types/users";

export const getUsers = async () => {
  const res = await serverApi.get<GetStudentsResponse>("/public/students");
  return res.data;
};

export const getUserById = async (id: string) => {
  const res = await serverApi.get<Student>(`/public/students/${id}`);
  return res.data;
};
