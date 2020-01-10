// Easy mode:
// var stringifyJSON = JSON.stringify;

// hard mode:
var stringifyJSON = function(obj) {
  var string = "";

  if (typeof(obj) == "number" || typeof(obj) == "boolean") {
    string += obj.toString();

  } else if (Array.isArray(obj)) {
    string += '[';
    _.each(obj, function(element, index) {
      string += stringifyJSON(element);
      if (index !== obj.length - 1) {
        string += ',';
      }
    });
    string += ']';

  } else if (typeof(obj) == "string") {
    string += '"' + obj + '"';

  } else if (typeof(obj) == "undefined" || obj == null) {
    string += "null"

  } else if (typeof(obj) == "object") {
    string += '{';
    for (var key in obj) {
      if (typeof(key) != "function" && typeof(key) != "undefined") {
        string += stringifyJSON(key) + ":" + stringifyJSON(obj[key]);
        if (obj[key] !== Object.keys(obj)[Object.keys(obj).length - 1]) {
          string += ',';
        }
      }
    }
    string += '}';
  } else if (typeof(obj) == "function") {
    string += '';
  }

  return string
};
