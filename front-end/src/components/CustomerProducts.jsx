import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Navbar, ProductCard, Button } from '.';

import { getProducts } from '../services';
import { navPages } from '../utils';
import { calculateOrderTotalPrice, formatNumber } from '../helpers';

const CustomerProducts = () => {
  const [products, setProducts] = useState([]);

  const orderProducts = useSelector((state) => state.customer.orderProducts);

  useEffect(() => getProducts(setProducts), []);

  return (
    <>
      <header>
        <Navbar navPages={ navPages['/customer'] } />
      </header>
      <main className="main-customer-products-page">
        {
          products.map((product) => (
            <ProductCard key={ product.id } { ...product } />
          ))
        }

        <Button
          text={ formatNumber(calculateOrderTotalPrice(orderProducts)) }
          route="/customer/checkout"
          testId="79"
          disabled={ !orderProducts.length }
        />
        <p data-testid="customer_products__checkout-bottom-value">
          { formatNumber(calculateOrderTotalPrice(orderProducts)) }
        </p>
      </main>
    </>
  );
};

export default CustomerProducts;
