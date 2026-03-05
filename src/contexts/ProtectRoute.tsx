import { createContext } from "react";
import { query } from "../Services/query/auth";
const me = query.server.me();
export const LoginContext = createContext<boolean>(false);

