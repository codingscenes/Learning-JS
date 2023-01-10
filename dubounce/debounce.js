// let implement debouncing
let timer;
// function onSearch(event) {
//   const searchTerm = event.target.value;
//   console.log('text: ', searchTerm);
//   clearTimeout(timer);
//   console.log('cancelled previou timer', timer);
//   timer = setTimeout(() => {
//     makeHttpCall(searchTerm);
//   }, 2000);
//   console.log(timer);
// }

// generic debouncing function
function searchUserInput(input) {
  console.log('sending to server ', input);
}

const debounce = (func, timeout = 2000) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};

const sendToServer = debounce(searchUserInput, 2000);
sendToServer('search about javascript');
sendToServer('search about javascript');
sendToServer('search about javascript');
sendToServer('search about javascript');
sendToServer('search about javascript');

// using generic debounce function for http call
const searchOnServer = debounce(makeHttpCall, 2000);
function onSearch(event) {
  const searchTerm = event.target.value;
  searchOnServer(searchTerm);
}
