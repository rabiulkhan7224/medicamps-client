import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import toast from "react-hot-toast";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";


const PaymentForm = ({registerInfo}) => {

  const stripe = useStripe()
  const elements = useElements()
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const {user}=useAuth()
  const axiosPublic=useAxiosPublic()


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setLoading(true);
    try {
      const { data } = await axiosPublic.post('/create-payment-intent', { amount: 5000, currency: 'usd' })
      console.log(data)
      const clientSecret = data.clientSecret
      // Confirm the payment
      const paymentResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            email: user?.email || 'anonymous',
            name: user?.displayName || 'anonymous' }
        },
      });

      const paymentHistory={

      }
      

      if (paymentResult.error) {
        toast.error(`Payment failed: ${paymentResult.error.message}`);
      } else if (paymentResult.paymentIntent.status === "succeeded") {
        toast.success("Payment successful!");
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