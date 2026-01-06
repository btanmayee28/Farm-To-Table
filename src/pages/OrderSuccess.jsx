import { useLocation, Link, Navigate } from 'react-router-dom';
import './OrderSuccess.css';

const OrderSuccess = () => {
  const location = useLocation();
  const order = location.state?.order;

  if (!order) {
    return <Navigate to="/" replace />;
  }

  const getPaymentMethodText = (method) => {
    switch(method) {
      case 'cod': return 'Cash on Delivery';
      case 'upi': return 'UPI Payment';
      case 'card': return 'Credit/Debit Card';
      default: return method;
    }
  };

  return (
    <div className="order-success-page">
      <div className="success-container">
        <div className="success-icon">✓</div>
        <h1>Order Placed Successfully!</h1>
        <p className="success-message">
          Thank you for your order. We'll deliver fresh products from local farms to your doorstep.
        </p>

        <div className="order-details-card">
          <div className="order-header">
            <h2>Order Details</h2>
            <span className="order-id">Order ID: {order.orderId}</span>
          </div>

          <div className="order-info-section">
            <h3>Delivery Address</h3>
            <div className="address-box">
              <p><strong>{order.customer.fullName}</strong></p>
              <p>{order.customer.address}</p>
              <p>{order.customer.city}, {order.customer.state} - {order.customer.pincode}</p>
              <p>📞 {order.customer.phone}</p>
              <p>📧 {order.customer.email}</p>
            </div>
          </div>

          <div className="order-info-section">
            <h3>Payment Method</h3>
            <p className="payment-method">{getPaymentMethodText(order.paymentMethod)}</p>
          </div>

          <div className="order-info-section">
            <h3>Order Items</h3>
            <div className="order-items-list">
              {order.items.map(item => (
                <div key={item.id} className="order-item">
                  <img src={item.image} alt={item.name} />
                  <div className="order-item-details">
                    <h4>{item.name}</h4>
                    <p>Quantity: {item.quantity}</p>
                    <p className="item-farm">From: {item.farmName}</p>
                  </div>
                  <span className="order-item-price">
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="order-summary-section">
            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{(order.total - order.delivery).toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Delivery Charges</span>
              <span>₹{order.delivery.toFixed(2)}</span>
            </div>
            <div className="summary-row total">
              <span>Total Paid</span>
              <span>₹{order.total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="success-actions">
          <Link to="/products" className="continue-shopping-btn">
            Continue Shopping
          </Link>
          <Link to="/" className="home-btn">
            Go to Home
          </Link>
        </div>

        <div className="delivery-info">
          <p>🚚 Expected delivery: 1-2 business days</p>
          <p>📧 A confirmation email has been sent to {order.customer.email}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
