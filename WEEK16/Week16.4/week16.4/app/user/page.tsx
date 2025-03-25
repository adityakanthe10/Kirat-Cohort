import Appbar from "@/components/Appbar";
import { getServerSession } from "next-auth";
import { NEXT_AUTH } from "../lib/auth";

export default async function User() {
  const session = await getServerSession(NEXT_AUTH);
  return (
    <div>
      <Appbar />
      User Component {JSON.stringify(session, null, 2)}
    </div>
  );
}
