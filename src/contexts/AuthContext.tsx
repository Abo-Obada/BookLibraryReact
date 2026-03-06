import { createContext, type ReactNode } from "react";
import { query } from "../Services/query/auth";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import type { Me } from "../Services/model/authModel";

type props = {
    isLoading: boolean,
    data: undefined | Me,
    isError: boolean,
    isSuccess: boolean,
    errorCode: number | undefined,
}

export const authContext = createContext<props | undefined>(undefined);

export function AuthContextProvider({ children }: { children: ReactNode }) {
    const { data, isLoading, isError, isSuccess, error } = useQuery({
        queryKey: ['me'],
        queryFn: async () => await query.server.me(),
        staleTime: 1000 * 60 * 5,
        retry: false,
    });

    const errorCode = isError && error ? (error as Error & { status?: number }).status : undefined;

    return (
        <authContext.Provider value={{ data, isError, isLoading, isSuccess, errorCode }}>
            {children}
        </authContext.Provider>
    );
}