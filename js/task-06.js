const inputValidation = document.querySelector("input#validation-input");

inputValidation.addEventListener("blur", () => {
  if (
    inputValidation.value.length.toString() === inputValidation.dataset.length
  ) {
    inputValidation.classList.remove("invalid");
    inputValidation.classList.add("valid");
  } else {
    inputValidation.classList.remove("valid");
    inputValidation.classList.add("invalid");
  }
});
