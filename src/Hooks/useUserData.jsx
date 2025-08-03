
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useUserData = ( email ) => {
    const axiosSecure = useAxiosSecure()
    const { data: userData = [], refetch, isLoading: loading } = useQuery({
        queryKey: ['userData'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/${email}`)
            return res.data
        }
    })
    console.log(userData)
    return [userData, refetch, loading]
};

export default useUserData;