const SurjoPay = ({ amount, onSuccess }) => {
    const handlePayment = () => {
      alert(`Redirecting to SurjoPay for payment of $${amount}...`);
      setTimeout(() => {
        alert("Payment successful!");
        onSuccess();
      }, 2000);
    };
  
    return (
      <button
        className="w-full bg-green-500 hover:bg-green-600 text-white py-2 mt-4"
        onClick={handlePayment}
      >
        Pay with SurjoPay
      </button>
    );
  };
  
  export default SurjoPay;
  