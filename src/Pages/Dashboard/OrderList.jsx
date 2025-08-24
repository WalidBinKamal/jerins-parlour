import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import DashboardNavbar from '../Shared/DashboardNavbar';
import { useEffect, useState } from 'react';

const OrderList = () => {
    const axiosSecure = useAxiosSecure()

    const { data: orderList, isLoading } = useQuery({
        queryKey: ['order-list'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/order-list`)
            return res.data
        }
    })

    const [localOrderList, setLocalOrderList] = useState([])
    useEffect(() => {
        if (orderList) {
            setLocalOrderList(orderList)
        }
    }, [orderList])

    const statuses = ["Pending", "On going", "Done"]

    return (
        <div>
            <DashboardNavbar title="Order List"></DashboardNavbar>
            <div className="overflow-x-hidden m-4 p-3 bg-white rounded-xl">
                <table className="table w-full">
                    {/* head */}
                    <thead className='bg-[#F5F6FA]'>
                        <tr>
                            <th className="first:rounded-xl">Name</th>
                            <th>Email ID</th>
                            <th>Service</th>
                            <th className="last:rounded-xl">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            !isLoading && orderList.map((item, index) => {
                                const dropDownOptions = statuses.filter(s => s !== item.status)
                                return < tr key={index}>
                                    <td>{item.fullName}</td>
                                    <td>{item.email}</td>
                                    <td>{item.serviceName}</td>
                                    <td>
                                        <select
                                            value={item.status}
                                            onChange={(e) => {
                                                const updatedList = [...localOrderList]
                                                updatedList[index].status = e.target.value
                                                setLocalOrderList(updatedList)
                                                axiosSecure.patch(`/booking/${item._id}`, { status: e.target.value })
                                                    .then(res => console.log(res.data))
                                            }}
                                            className={`border rounded px-2 py-1 ${item.status === "Pending"
                                                ? "text-[#FF4545]"
                                                : item.status === "On going"
                                                    ? "text-[#FFBD3E]"
                                                    : "text-[#009444]"}`}
                                        >
                                            <option value={item.status} className='text-orange-400'>{item.status}</option>
                                            {
                                                dropDownOptions.map(status => (
                                                    <option key={status} value={status}>{status}</option>
                                                ))
                                            }
                                        </select>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default OrderList;