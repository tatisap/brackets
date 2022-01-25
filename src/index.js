module.exports = function check(str, bracketsConfig) {
  let openedBracketsExample = [];
  let closedBracketsExample = [];
  bracketsConfig.forEach( brackets => {
    openedBracketsExample.push(brackets[0]);
    closedBracketsExample.push(brackets[1]);
  });

  function closeOpened(char) {
    if (opened[opened.length - 1] === openedBracketsExample[closedBracketsExample.indexOf(char)]) opened.pop();
  }

  let opened = [];

  for (let char of str) {
    if (closedBracketsExample.includes(char) && opened.includes(openedBracketsExample[closedBracketsExample.indexOf(char)])) {
      closeOpened(char);
    } else if (openedBracketsExample.includes(char)) {
      opened.push(char);
    } else return false;
  }

  return (opened.length) ? false : true;
}