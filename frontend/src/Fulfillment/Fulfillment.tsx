import React from 'react';

const Fulfillment = () => {
  // Mock fulfillment data with a mix of shipped and unshipped orders
  const fulfillmentData = [
    { id: 1, product: 'Product A', status: 'shipped' },
    { id: 2, product: 'Product B', status: 'unshipped' },
    { id: 3, product: 'Product C', status: 'shipped' },
    { id: 4, product: 'Product D', status: 'unshipped' },
  ];

  return (
    <div>
      <h2>Fulfillment Orders</h2>
      <ul>
        {fulfillmentData.map(order => (
          <li
            key={order.id}
            style={{ color: order.status === 'unshipped' ? 'red' : 'black' }}
          >
            {order.product} - {order.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Fulfillment;


