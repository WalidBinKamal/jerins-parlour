import { createContext, useState } from "react";
import api from "../Hooks/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useToast from "../Hooks/useToast";

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const queryClient = useQueryClient()
    const toast = useToast()

    // regsitering user
    const { mutate: signup, isLoading: signupLoading, error: signupError } = useMutation({
        mutationFn: (data) => api.post("/auth/register", data),
        onSuccess: () => {
            queryClient.invalidateQueries(["user"])
            toast({ title: "Registration is Successful", icon: "success" })
        },
        onError: (error) => {
            toast({ title: `${error?.response?.data?.message}`, icon: "error" })
        }
    })

    // Logging in user
    const { mutate: login, isLoading: loginLoading, error: loginError } = useMutation({
        mutationFn: (data) => api.post('/auth/login', data),
        onSuccess: () => {
            queryClient.invalidateQueries(["user"])
            toast({ title: "Login is Successful", icon: "success" })
        },
        onError: (error) => {
            toast({ title: `${error?.response?.data?.message}`, icon: "error" })
        }
    })

    // fetching current user data
    const { data: userData, isLoading: loading, isError, refetch } = useQuery({
        queryKey: ["user"],
        queryFn: async () => {
            const res = await api.get("/auth/checkUser")
            return res.data.email
        },
        retry: false
    })
    const user = userData || null

    // logOut User
    const { mutate: logout, isPending: isLoggingOut } = useMutation({
        mutationFn: async () => {
            const res = await api.post("/auth/logout")
            return res.data
        },
        onSuccess: (data) => {
            toast({ title: `${user} ${data?.message}`, icon: "success" })
            queryClient.setQueryData(["user"], null)
        },
    })

    const authInfo = {
        user,
        login,
        signup,
        refetch,
        logout,
        loading,
        isError,
        loginLoading,
        loginError,
        signupLoading,
        signupError,
        isLoggingOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;