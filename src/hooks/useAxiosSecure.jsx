import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import useAuth from "./useAuth";


const axiosSecure = axios.create({
    baseURL: 'https://medicamps-server.vercel.app',
    withCredentials: true
})

const useAxiosSecure = () => {

    const { logout } = useAuth()
    const navigate = useNavigate()
    useEffect(() => {
        axiosSecure.interceptors.response.use(response => {
            return response;
        }, error => {
            console.log('api response error', error.status)
            if (error.status === 401 || error.status === 403) {
                logout()
                    .then(() => {
                        console.log('logout user')
                        navigate('/login')

                    })
                    .catch(err => console.log(err))
            }
            return Promise.reject(error)
        })

    }, [logout, navigate])
    return axiosSecure;
};



export default useAxiosSecure;