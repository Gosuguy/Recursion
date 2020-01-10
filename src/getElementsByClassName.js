// Easy version:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// Hard version:
const getElementsByClassName = function(className, element) {
  var element = element || document.body;
  let elementList = [];
  if (element.classList) {
  	if (element.classList.contains(className)) {
      elementList.push(element);
    }
  }
  element.childNodes.forEach(function(childNode) {
    elementList = elementList.concat(getElementsByClassName(className, childNode));
  });
  return elementList;
};
