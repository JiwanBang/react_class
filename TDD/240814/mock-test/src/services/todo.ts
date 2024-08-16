// interface Todo {
//   id: number;
//   title: string;
//   isCompleted: boolean;
// }

import Todo from "../models/Todo";

// let todoList: Todo[] = [];
// let todoId = 1;

export const add = async (title: string) => {
  if (title?.length) {
    const todo = await Todo.create({ title });
    return todo;
    // todoList.push({
    //   id: todoId++,
    //   title,
    //   isCompleted: false,
    // });
    // return todoList[todoList.length - 1];
  } else {
    throw new Error("plz input title");
  }
};

export const getList = async () => {
  const todos = await Todo.findAll();
  return todos;
  // return [...todoList]
};

export const updateTodo = async ({
  id,
  title,
  isCompleted,
}: {
  id: number;
  title?: string;
  isCompleted?: boolean;
}) => {
  try {
    const todo = await Todo.findByPk(id);
    // const todo = todoList.find((item: Todo) => item.id === id);
    if (todo === null) throw new Error("cannot find todo item");
    if (title !== undefined) todo.title = title;
    if (isCompleted !== undefined) todo.isCompleted = isCompleted;
    await todo.save();
    return todo;
  } catch (error) {
    throw error;
  }
};

export const deleteTodo = async (id: number) => {
  const todo = await Todo.findByPk(id);
  // const todo = todoList.findIndex((item: Todo) => item.id === id);
  if (todo === null) throw new Error("not found todo item");
  await todo.destroy();
  return await Todo.findAll();
  // todoList = todoList.filter((item: Todo) => item.id !== id);
  // return [...todoList];
};
