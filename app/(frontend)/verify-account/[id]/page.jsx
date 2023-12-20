"use client";

import { HiInformationCircle } from "react-icons/hi";
import { Alert } from "flowbite-react";

export default function VerifyAccount() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow-2xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
              Verify Account
            </h1>
            <Alert color="failure" icon={HiInformationCircle}>
              <span className="font-medium">Please Check your Email!</span> We
              have sent you a Verification Link and Click on the Link to Verify
              your Account. Thank you!
            </Alert>
            <div className="my-6">
              <p className="text-sm font-light text-gray-500 dark:text-gray-400 ">
                Did not see it?{" "}
                <button className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                  Resend the Link
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
