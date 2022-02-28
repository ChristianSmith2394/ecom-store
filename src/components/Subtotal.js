import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import ShoppingBasket from '@material-ui/icons/ShoppingBasket'
import { useStateValue } from './StateProvider'
import { useNavigate } from 'react-router-dom'
import { getBasketTotal } from './reducer'

function Subtotal() {
  const history = useNavigate();
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick={e => history('/payment')}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;