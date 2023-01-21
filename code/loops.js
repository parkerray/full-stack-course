const button = document.querySelector("#run");

const handleClick = () => {
  console.log(`you clicked a button`);
  let count = document.querySelector("#count").value;
  if (count < 1 || count > 1000) {
    console.log(`please use a number between 1 and 1,000`)
  } else {
    forLoop(count);
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
