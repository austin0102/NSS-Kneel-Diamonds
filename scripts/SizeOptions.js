import { setSizesId } from "./TransientState.js";

const handleSizeChoice = (changeEvent) => {
  if (changeEvent.target.name === "carets") {
    setSizesId(parseInt(changeEvent.target.value));
  }
};

export const SizeOptions = async () => {
  const response = await fetch("http://localhost:8088/sizes");

  const sizes = await response.json();

  document.addEventListener("change", handleSizeChoice);

  let sizeHTML = "";

  const divStringArray = sizes.map((size) => {
    sizeHTML += `<div>
        <input type="radio" name="carets" value="${size.id}"/>${size.carets}
        </div>`;
  });
  sizeHTML += divStringArray.join("");
  return sizeHTML;
};
