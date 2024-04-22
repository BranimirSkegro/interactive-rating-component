const inputs = document.getElementsByTagName("input");
const submitBtn = document.getElementById("submit-btn");
const ratingContainer = document.getElementsByClassName('rating-state-container')[0];
const thankYouContainer = document.getElementsByClassName('thank-you-state-container')[0];
const selectedRate = document.getElementsByClassName("your-selection")[0];
let selectedInput;

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("click", function () {
    selectedInput = this.id;
  });
}


function giveFeedback(clickedInputId) {
  const clickedInput = document.getElementById(clickedInputId);
  if (clickedInput) {
    thankYouContainer.classList.remove('hide');
    ratingContainer.classList.add('hide');
    selectedRate.innerText = `You selected ${clickedInput.value} out of 5`;
  }
}

submitBtn.addEventListener("click", function () {
  giveFeedback(selectedInput);
});