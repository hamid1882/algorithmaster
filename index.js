
let data = [1,2,3,4,5,6,7,8,9,10];
let find = 6;

function get_current_value(event) {
  let answerElem = document.getElementById("answer");

  answerElem.innerHTML = `Found ${event} at position ${BinarySearch(data, parseInt(event,10))}`
}


function BinarySearch(data, find) {
  let first = 0;
  let last = data.length - 1;

  while(first <= last) {
    let mid = Math.round(first + last / 2);
    let guess = data[mid];

    if(guess === find) {
     return mid;
    }

    if(guess > find) {
      last = mid - 1;
    } else {
      first = mid + 1;
    }
  }

  return null;

}

let answerElem = document.getElementById("answer");

answerElem.innerHTML = `Found ${find} at position ${BinarySearch(data,find)}`