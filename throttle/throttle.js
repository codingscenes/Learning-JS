let isWating = false;
function onFired() {
  console.log('Shoot Button pressed!');
  if (!isWating) {
    shoot();
    isWating = true;
    setTimeout(() => {
      isWating = false;
    }, 2000);
  }
}
// time 1 sec

// generic throttle function

function saveChangesToDb(changes) {
  console.log('Saving changes: ', changes);
}
// closure, higer order function, first class function
const throttle = (func, timeout = 2000) => {
  let isWaiting = false;
  return (...args) => {
    if (!isWaiting) {
      // bind, call, apply
      func.apply(this, args); // task completed
      isWaiting = true;
      setTimeout(() => {
        isWaiting = false;
      }, timeout);
    }
  };
};

// const processTask = throttle(saveChangesToDb, 1000);
// processTask('image File', 'Text File');
// processTask('image File', 'Text File');
// processTask('image File', 'Text File');
// processTask('image File', 'Text File');
// processTask('image File', 'Text File');
// processTask('image File', 'Text File');
// processTask('image File', 'Text File');
// processTask('image File', 'Text File');

// configuring my thorootle function
const fireNow = throttle(shoot, 1000);

function onFired() {
  console.log('Shoot Button pressed!');
  fireNow();
}
