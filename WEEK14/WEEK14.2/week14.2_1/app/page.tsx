import { prisma } from "@/db";

async function getUserDetails() {
  try {
    const user = await prisma.user.findFirst({});
    return {
      name: user?.username || "Guest",
      email: user?.username || "No email found",
    };
  } catch (error) {
    console.log(error);
  }
}

export default async function Home() {
  const userDetails = await getUserDetails();
  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded">
          <div>Name: {userDetails?.name}</div>

          <div>Email :{userDetails?.email}</div>
        </div>
      </div>
    </div>
  );
}
