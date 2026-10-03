import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import MyBookedSessionsUI from "@/components/MyBookedSessionsUI";

const MySessionsPage = async () => {
  const tokenData = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch("http://localhost:5000/my-bookings", {
    headers: {
      Authorization: `Bearer ${tokenData.token}`,
    },
    cache: "no-store",
  });

  const bookings = await res.json();

  return <MyBookedSessionsUI bookings={bookings}  token ={tokenData.token}/>;
};

export default MySessionsPage;