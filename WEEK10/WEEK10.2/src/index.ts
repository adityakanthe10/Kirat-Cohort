import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//  Inset Function

// async function insertUser(
//   username: string,
//   password: string,
//   firstName: string,
//   lastName: string
// ) {
//   const res = await prisma.user.create({
//     data: {
//       email: username,
//       password,
//       firstName,
//       lastName,
//     },
//   });
//   console.log(res, "response");
// }
// insertUser("adityakanthe10@gmail.com", "Aditya@1234", "Aditya", "Kanthe");

//  Update Function

// interface UpdateUser {
//   firstName: string;
//   lastName: string;
// }

// const updateUser = async (
//   userName: string,
//   firstName: string,
//   lastName: string
// ) => {
//   const res = await prisma.user.update({
//     where: { email: userName },
//     data: {
//       firstName,
//       lastName,
//     },
//   });
//   console.log(res);
// };

// updateUser("adityakanthe10@gmail.com", "AAditya", "KKanthe");

// Get Function

const getUser = async (userName: string) => {
  const user = await prisma.user.findFirst({
    where: {
      email: userName,
    },
    select: {
      firstName: true,
      lastName: true,
    },
  });
  console.log(user);
};

getUser("adityakanthe10@gmail.com");
