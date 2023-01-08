/**
 Highlight all of the words on the webpage over 5 characters long in the paragraph text with a red background
 */

const paragraph = document.querySelector('p');

paragraph.innerHTML = paragraph.innerHTML
  .split(' ')
  .map((word) => {
    return word.length > 8
      ? `<span style="background-color: red; color:#fff;">${word}</span>`
      : word;
  })
  .join(' ');
