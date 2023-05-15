import { MetalOptions } from "./Metals.js";
import { StyleOptions } from "./StyleOptions.js";
import { SizeOptions } from "./SizeOptions.js";
import { placeOrderButton } from "./SaveOrders.js";
import { Orders } from "./ordersList.js";
const container = document.querySelector("#container");

const render = async () => {
  const metalOptionsHTML = await MetalOptions();
  const StyleOptionsHTML = await StyleOptions();
  const sizeOptionsHTML = await SizeOptions();
  const orderButton = await placeOrderButton();
  const ordersList = await Orders();
  const composedHTML = `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${metalOptionsHTML}
            </section>

            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${sizeOptionsHTML}
            </section>

            <section class="choices__styles options">
                <h2>Styles</h2>
                ${StyleOptionsHTML}
            </section>
        </article>

        <article class="order">
        ${orderButton}
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            ${ordersList}
        </article>
    `;

  container.innerHTML = composedHTML;
};
document.addEventListener("newOrderCreated", render);

render();
