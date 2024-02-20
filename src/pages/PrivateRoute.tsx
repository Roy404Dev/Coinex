import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

type PrivateRouteType = {
  children: JSX.Element;
};

const PrivateRoute = ({ children }: PrivateRouteType) => {
  const user = useSelector((state: RootState) => state.user.data);
  const navigate = useNavigate();

  return user.aud ? <>{children}</> : <>{navigate("/login")}</>;
};

export default PrivateRoute;
