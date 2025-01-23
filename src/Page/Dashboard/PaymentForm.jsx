import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import toast from "react-hot-toast";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router";


const PaymentForm = ({ registerInfo }) => {
  console.log(registerInfo)
  const stripe = useStripe()
  const elements = useElements()
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const { user } = useAuth()
  const axiosPublic = useAxiosPublic()
  const axiosSecure = useAxiosSecure()
  const navigate=useNavigate()
  const amountSM = registerInfo?.campFees * 100


  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const { data } = await axiosPublic.post('/create-payment-intent', { amount: amountSM, currency: 'usd' })
      console.log(data)
      const clientSecret = data.clientSecret
      // Confirm the payment
      const paymentResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            email: user?.email || 'anonymous',
            name: user?.displayName || 'anonymous'
          }
        },
      });
      const txID = paymentResult.paymentIntent.id


      await axiosSecure.post('payments', {
        email: user?.email,
        campName: registerInfo?.campName,
        campId: registerInfo._id,

        campFees: registerInfo.campFees,
        transactionId: txID,
        data: new Date()
      })


      if (paymentResult.error) {
        toast.error(`Payment failed: ${paymentResult.error.message}`);
      } else if (paymentResult.paymentIntent.status === "succeeded") {
        toast.success("Payment successful!");
        navigate('/dashboard/registered')
      }
    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }



  }
  return (
    <div>
      <h2>Complete Payment</h2>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button
          type="submit"
          disabled={!stripe || loading}
          className="btn btn-primary mt-4"

        >
          {loading ? "Processing..." : "Pay Now"}
        </button>
      </form>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
};

export default PaymentForm;