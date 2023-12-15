import { useQuery } from "@tanstack/react-query";

const GetUserForInvitee = (email: any) => {
  const { data: singleUser, isLoading } = useQuery(["singleUser", email], () =>
    fetch(`https://myscheduler-server.onrender.com/singleUser/${email}`, {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  return { singleUser, isLoading };
};

export default GetUserForInvitee;
