import Link from "next/link";

export default function PaymentSuccess() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center space-y-8">
        <p className="text-xl pb-6">
          Payment Successful. Welcome to the Foundation!
        </p>
        <Link href="/membership" passHref className=" mt-7">
          <button className="btn btn-primary btn-lg">Go Back</button>
        </Link>
      </div>
    </div>
  );
}
