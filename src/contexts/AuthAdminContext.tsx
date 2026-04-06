import { createContext, type ReactNode } from "react";
import { query } from "../Services/admin/query/auth";
import type { meResponse } from "../Services/admin/model/authAdminModel";

export const AuthAdminContext = createContext<meResponse | undefined >(undefined);

export function AuthAdminContextProvider({ children }: { children: ReactNode }) {
    const me = query.server.me();
    const status = me.data;
    return (
        <AuthAdminContext.Provider value={status}>
            {children}
        </AuthAdminContext.Provider>
    );
}