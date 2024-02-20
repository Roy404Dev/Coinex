import { Outlet } from "react-router-dom";
import "./RootLayout.scss";
import { useDispatch } from "react-redux";
import { getUserData } from "@/api/data/userData";

import { addUser } from "@/redux/Features/userSlice";
import { useQuery } from "react-query";
import { useEffect } from "react";

const RootLayout = () => {
  const dispatch = useDispatch();
  const { data, error, isLoading, isSuccess } = useQuery({
    queryKey: ["user"],
    queryFn: getUserData,
    staleTime: 60 * 60 * 1000,
  });

  useEffect(() => {
    if (isSuccess) {
      dispatch(addUser(data));
    }
  }, [dispatch, data, isSuccess]);

  if (isLoading) {
    return <span>Loading</span>;
  }

  if(error) {
    return <span>error</span>
  }

  return (
    <div className="RootLayout">
      <Outlet />
    </div>
  );
};

export default RootLayout;
