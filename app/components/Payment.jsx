export default function Payment({ onNext }) {
  const handleStripePayment = () => {
    // Simulate payment process
    onNext();
  };

  return (
    <div className="text-center space-y-4">
      <p>Go to Stripe and pay Amount cash</p>
      <button
        onClick={handleStripePayment}
        className="btn btn-primary btn-lg w-100"
      >
        Pay Now
      </button>
    </div>
  );
}
