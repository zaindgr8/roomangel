import Link from "next/link";

export default function PaymentSuccess() {
  return (
    <div className="text-center space-y-4">
      <p>Payment Successful. Welcome to the Foundation!</p>
      <button className="btn btn-primary btn-lg w-100">
        <Link href={"/hotel-form"}>Go to my hotel page</Link>
      </button>
    </div>
  );
}
