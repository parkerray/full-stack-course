const button = document.querySelector("#run");
const statusDiv = document.querySelector("#status");
const resultsDiv = document.querySelector("#results");

const handleClick = () => {
  statusDiv.innerHTML = "";
  resultsDiv.innerHTML = "";
  const input = document.querySelector("#count");
  const count = input.value;
  if (count < 1 || count > 1000) {
    const errorMessage = `please use a number between 1 and 1,000`;
    console.log(errorMessage);
    const error = document.createElement('p');
    error.setAttribute('class', 'error');
    error.innerHTML = errorMessage;
    statusDiv.appendChild(error)
  } else {
    forLoop(count);
    input.value = "";
  }
}

const forLoop = (x) => {
  if (x === 1) {
    const statusLine = document.createElement('p')
    statusLine.innerHTML = `will loop ${x} time`;
    resultsDiv.appendChild(statusLine);
  } else {
    const statusLine = document.createElement('p')
    statusLine.innerHTML = `will loop ${x} times`;
    resultsDiv.appendChild(statusLine);
  }
  for (let i = 1; i <= x; i++) {
    const statusLine = document.createElement('p')
    statusLine.innerHTML = `loop ${i}`;
    resultsDiv.appendChild(statusLine);
  }
}

button.addEventListener("click", handleClick);
document.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    handleClick();
  }
});