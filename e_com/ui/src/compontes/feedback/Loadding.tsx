import { ReactNode } from "react";

type tt = {
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
  children: React.ReactNode;
};
const Loadding = ({ loading, error, children }: tt) => {
  if (loading === "pending") {
    return <div> wait </div>;
  }
  if (loading === "failed") {
    return <div> {error} </div>;
  }

  return <div>{children}</div>;
};

export default Loadding;
