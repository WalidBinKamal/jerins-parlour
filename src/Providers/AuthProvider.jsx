import { createContext, useState } from "react";
import api from "../Hooks/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useToast from "../Hooks/useToast";
import useAxiosSecure from "../Hooks/useAxiosSecure";

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const queryClient = useQueryClient()
    const toast = useToast()
    const axiosSecure = useAxiosSecure()

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
    const email = user

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

    // isAdmin
    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user, 'isAdmin'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${email}`)
            return res.data
        }
    })

    const authInfo = {
        user,
        login,
        signup,
        refetch,
        logout,
        isAdmin,
        isAdminLoading,
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