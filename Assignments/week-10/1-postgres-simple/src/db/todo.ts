import { client } from "..";
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
  //   await client.connect();
  //   const res = await client.query(`
  //         CREATE TABLE IF NOT EXISTS todos (
  //         id SERIAL PRIMARY KEY,
  //         user_id INTEGER NOT NULL REFERENCES users(id),
  //         title VARCHAR(255) NOT NULL,
  //         description TEXT,
  //         done BOOLEAN DEFAULT false
  //         )
  //         `);
  //   console.log("todos Table created Successfully", res);

  const insertData = await client.query(
    `
    INSERT INTO todos(user_id,title,description) VALUES ($1,$2,$3) RETURNING *`,
    [userId, title, description]
  );

  return insertData.rows[0];
  //   return insertData;
  //   console.log("todos table ", insertData);
  //   await client.end();
}
// client.end();

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
  //   await client.connect();
  const updatedTodo = await client.query(
    `
    UPDATE todos
    SET done = true
    WHERE id = $1 
    RETURNING *`,
    [todoId]
  );

  return updatedTodo.rows[0];
  //   console.log("updated todo", updatedTodo);
  //   await client.end();
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
  //   await client.connect();
  const res = await client.query(
    `
    SELECT * FROM todos
    where user_id =  $1
    `,
    [userId]
  );
  return res.rows;
  //   const response = res.rows[0];
  //   console.log("response", response);
  //   await client.end();
}
// createTodo(1, "gym", "calisthenics");
// getTodos(1);
// updateTodo(1);
// getTodos(1);
