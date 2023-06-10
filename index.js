function createButton() {
  // Create the button element
  const button = document.createElement("button");
  button.textContent = "Click Me";

  // Add event listener to the button
  button.addEventListener("click", function () {
    alert("Button clicked!");
  });

  // Append the button to the container div
  const container = document.getElementById("container");
  container.appendChild(button);
}
createButton();
