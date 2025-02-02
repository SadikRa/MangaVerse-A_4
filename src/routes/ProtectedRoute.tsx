import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { verifyToken } from "../components/utils/verifyToken";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { logout, useCurrentToken } from "../redux/features/auth/authSlice";
import { JwtPayload } from "jwt-decode";

interface IDecodedToken extends JwtPayload {
  role: string;
}

type TProtectedRoute = {
  children: ReactNode;
  role: string | undefined;
};

const ProtectedRoute = ({ children, role }: TProtectedRoute) => {
  const token = useAppSelector(useCurrentToken);

  let user: IDecodedToken | null = null;

  if (token) {
    user = verifyToken(token) as IDecodedToken;
  }

  const dispatch = useAppDispatch();

  if (role !== undefined && role !== user?.role) {
    dispatch(logout());
    return <Navigate to="/login" replace={true} />;
  }

  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};

export default ProtectedRoute;
