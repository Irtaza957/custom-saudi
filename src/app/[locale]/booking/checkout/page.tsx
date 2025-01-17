'use client'
import CheckoutPage from '@/components/checkout'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe('pk_test_xxx');
export default function Checkout() {
    return (
        <Elements
            stripe={stripePromise}
            options={{
                mode: "payment",
                amount: 100,
                currency: "usd",
            }}
        >
            <CheckoutPage amount={100} />
        </Elements>
    )
}

