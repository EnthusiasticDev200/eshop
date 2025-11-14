import React from 'react'
import "./SubTotal.css"
import { NumericFormat } from 'react-number-format'

import { getBaskeTotal } from '../../dataLayer/reducer'
import { useStateValue } from '../../dataLayer/StateProvider'

function SubTotal() {
    const [ { basket }, dispatch ] = useStateValue(); // removed dispatch
    return (
        <div className='subTotal'>
            <NumericFormat
                renderText={(value)=>(
                    <>
                        Subtotal ({basket.length} items): <strong>{value}</strong>
                        <small className='subTotal__gift'>
                             <input type="checkbox" /> This order has a gift
                        </small>
                    </>
                )}
                value={getBaskeTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₦"}
            />
            <button className='proceedToPayment__button'> Procced to payment </button>
        </div>
    )
}


export default SubTotal