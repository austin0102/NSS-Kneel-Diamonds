import { setStylesId } from "./TransientState.js";

const handleStyleChoice = (changeEvent) => {
  if (changeEvent.target.name === "style") {
    setStylesId(parseInt(changeEvent.target.value));
  }
};
export const StyleOptions = async () => {
  const response = await fetch("http://localhost:8088/styles");
  const styles = await response.json();
  document.addEventListener("change", handleStyleChoice);

  let styleHTML = "";
  const divStringArray = styles.map((style) => {
    styleHTML += `<div>
        <input type="radio" name="style" value="${style.id}" />${style.style}
        </div>`;
  });
  styleHTML += divStringArray.join(" ");
  return styleHTML;
};
