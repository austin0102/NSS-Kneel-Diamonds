export const Orders = async () => {
  const fetchResponse = await fetch(
    "http://localhost:8088/orders?_expand=metals&_expand=styles&_expand=sizes"
  );
  const orders = await fetchResponse.json();
  let ordersHTML = "";
  const ordersArray = orders.map((order) => {
    const orderPrice =
      order.metals.price + order.styles.price + order.sizes.price;
    ordersHTML += `<div>
            Order #${order.id} cost $${orderPrice}
            </div>`;
  });
  ordersHTML += ordersArray.join(" ");
  return ordersHTML;
};
