function reverse(array) {
  let newArr = [];
  for(i = array.length-1; i >= 0; i--) {
    newArr.push(array[i]);
  }
  return newArr;
}

function reverseInPlace(array) {
  for(i = 0; i < array.length; i++) {
    let tmp = array.splice(i, 1)[0];
    array.unshift(tmp);
  }
  return array;
}
