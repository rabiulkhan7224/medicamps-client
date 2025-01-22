import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Loader from "../shared/Loader";

const Payment = () => {

    const {id}=useParams()
    const axiosPublic=useAxiosPublic()
    const {data:regidata={},isLoading}=useQuery({queryKey:['regidata',id],
        queryFn: async()=>{
            const {data}= await axiosPublic.get(`/regidata/${id}`)
            return data;
        }
    })
    const stristripePromise=loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
    if(isLoading) return <Loader></Loader>
    if(!regidata)return <><h1 className="text-2xl text-red-500">Register camp Data Not found !</h1></>
    return (
       <Elements stripe={stristripePromise}>
        <PaymentForm registerInfo={regidata}></PaymentForm>

       </Elements>
    );
};

export default Payment;