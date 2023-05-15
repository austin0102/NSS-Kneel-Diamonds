const transientState = {
  stylesId: 0,
  sizesId: 0,
  metalsId: 0,
};

export const setStylesId = (chosenStyle) => {
  transientState.stylesId = chosenStyle;
};

export const setSizesId = (chosenSize) => {
  transientState.sizesId = chosenSize;
};

export const setMetalsId = (chosenMetal) => {
  transientState.metalsId = chosenMetal;
};

export const placeOrder = async () => {
  /*
        Add the required keys to the object below that are
        needed for a POST operation.
    */

  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(transientState),
  };

  // Send the transient state to your API
  const response = await fetch("http://localhost:8088/orders", postOptions);
  const customEvent = new CustomEvent("newOrderCreated");
  document.dispatchEvent(customEvent);
};
