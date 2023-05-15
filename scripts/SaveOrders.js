import { placeOrder } from "./TransientState.js";

const handlePlacedOrderClick = (clickEvent) => {
    if(clickEvent.target.id === 'placeOrder') {
        placeOrder()
    }
}

export const placeOrderButton = () => {
    document.addEventListener("click", handlePlacedOrderClick)
    return `<button id="placeOrder">Place Order</button>`
}