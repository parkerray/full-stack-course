const button = document.querySelector("#run");
const statusDiv = document.querySelector("#status");

const handleClick = () => {
  statusDiv.innerHTML = "";
  console.log(`you clicked a button`);
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
    console.log(`will loop ${x} time`)
  } else {
    console.log(`will loop ${x} times`)
  }
  for (let i = 1; i <= x; i++) {
    console.log(`loop #${i}`)
  }
}

button.addEventListener("click", handleClick);
document.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    handleClick();
  }
});