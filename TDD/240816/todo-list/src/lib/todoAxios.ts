import instance from "./axios";

export interface ITodo {
  id?: number;
  title?: string;
  isCompleted?: boolean;
}

export const getList = async (): Promise<ITodo[]> => {
  try {
    const response = await instance.get("/todo");
    return response.data;
  } catch (error) {
    throw new Error("Failed to get Data");
  }
};

export const addTodo = async ({ title }: ITodo): Promise<ITodo[]> => {
  try {
    const response = await instance.post("/todo", { title });
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to Add Todo");
  }
};
