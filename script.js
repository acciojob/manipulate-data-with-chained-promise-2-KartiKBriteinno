//your JS code here. If required.
function manipulateArray() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  })
  .then((array) => {
    // First transformation: Filter out the odd numbers
    return new Promise((resolve) => {
      setTimeout(() => {
        const evenNumbers = array.filter(num => num % 2 === 0);
        updateOutputDiv(evenNumbers);
        resolve(evenNumbers);
      }, 1000);
    });
  })
  .then((evenNumbers) => {
    // Second transformation: Multiply the even numbers by 2
    return new Promise((resolve) => {
      setTimeout(() => {
        const multipliedNumbers = evenNumbers.map(num => num * 2);
        updateOutputDiv(multipliedNumbers);
        resolve(multipliedNumbers);
      }, 2000);
    });
  });
}

function updateOutputDiv(array) {
  const outputDiv = document.getElementById('output');
  outputDiv.textContent = array.join(',');
}

// Call the function to start the process
manipulateArray();