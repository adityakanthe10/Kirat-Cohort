import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(
  userId: number,
  title: string,
  description: string
) {
  const resCreateTodo = await prisma.todo.create({
    data: {
      userId: userId,
      title: title,
      description: description,
    },
    select: {
      title: true,
      description: true,
      done: true,
      id: true,
    },
  });
  return resCreateTodo;
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
  const resUpdateTodo = await prisma.todo.update({
    where: {
      id: todoId,
    },
    data: {
      done: true,
    },
  });
  return resUpdateTodo;
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
  const resgetTodos = await prisma.todo.findMany({
    where: { id: userId },
    select: {
      userId: true,
      title: true,
      description: true,
      done: true,
      id: true,
    },
  });
  return resgetTodos;
}
