import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../init.firebase";
import GetUserInfo from "../../Shared/GetUserInfo/GetUserInfo";
import Loading from "../../Shared/LoadingSpinner/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L17CjFVPM1NcC4wk5HSCO097ADOKg2eQAOM7vvJiloMXfu1ghTtdemx4zqJIsaokSLRN1ymzqin5gtKFyMn0e6z00PtAPsGer"
);
const Payment = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  const { userInfo, isLoading } = GetUserInfo(email);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="px-2 py-8">
      <div className="flex justify-center items-center h-[80vh]">
        <div className="bg-base-100 border border-primary rounded-lg p-8 shadow-lg">
          <div>
            <p>
              Hello, <span className="font-bold">{userInfo?.name}</span>
            </p>
            <h2 className="text-blue-500 mt-2">
              Please pay for our "professional" service
            </h2>
            <div className="mt-5">
              <Elements stripe={stripePromise}>
                <CheckoutForm userInfo={userInfo} />
              </Elements>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
